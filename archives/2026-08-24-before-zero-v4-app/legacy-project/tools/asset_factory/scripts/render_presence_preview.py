#!/usr/bin/env python3
"""Génère un audit vidéo autonome de la présence vivante de Chimi."""

from __future__ import annotations

import argparse
import hashlib
import json
import random
import shutil
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

from PIL import Image, ImageDraw


DEFAULT_DURATION_SECONDS = 60
DEFAULT_FPS = 20
DEFAULT_SEED = 20260824
SCALE = 6
BACKGROUND = (15, 17, 18, 255)


@dataclass(frozen=True)
class Clip:
    key: str
    manifest_path: Path
    clip_id: str
    character_version: str
    frames: tuple[Image.Image, ...]
    durations_ms: tuple[int, ...]
    loop: bool

    @property
    def duration_ms(self) -> int:
        return sum(self.durations_ms)

    def frame_index_at(self, elapsed_ms: int) -> int:
        if self.loop:
            elapsed_ms %= self.duration_ms
        elapsed_ms = min(max(0, elapsed_ms), self.duration_ms - 1)
        cursor = 0
        for index, duration in enumerate(self.durations_ms):
            cursor += duration
            if elapsed_ms < cursor:
                return index
        return len(self.frames) - 1

    def frame_at(self, elapsed_ms: int) -> Image.Image:
        return self.frames[self.frame_index_at(elapsed_ms)]


@dataclass(frozen=True)
class ScheduledEvent:
    action: str
    kind: str
    source: str
    start_ms: int
    end_ms: int
    trigger_ms: int | None = None

    @property
    def duration_ms(self) -> int:
        return self.end_ms - self.start_ms

    def as_json(self, clip: Clip) -> dict[str, Any]:
        result: dict[str, Any] = {
            "action": self.action,
            "kind": self.kind,
            "source": self.source,
            "clipId": clip.clip_id,
            "startMs": self.start_ms,
            "endMs": self.end_ms,
            "durationMs": self.duration_ms,
            "frameCount": len(clip.frames),
        }
        if self.trigger_ms is not None:
            result["triggerMs"] = self.trigger_ms
            result["reactionLatencyMs"] = self.start_ms - self.trigger_ms
        return result


@dataclass(frozen=True)
class PreviewContext:
    project_root: Path
    production_root: Path
    presence: dict[str, Any]
    animation_pack: dict[str, Any]
    clips: dict[str, Clip]
    micro_actions: dict[str, dict[str, Any]]
    semantic_actions: dict[str, dict[str, Any]]
    idle_key: str
    master: Image.Image


@dataclass(frozen=True)
class Schedule:
    events: tuple[ScheduledEvent, ...]
    decisions: tuple[dict[str, Any], ...]
    seed: int
    duration_ms: int


def read_json(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"JSON illisible : {path} ({error})") from error


def write_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def load_clip(key: str, manifest_path: Path) -> Clip:
    manifest = read_json(manifest_path)
    canvas = manifest["canvas"]
    width, height = int(canvas[0]), int(canvas[1])
    image = Image.open(manifest_path.parent / manifest["sheet"]).convert("RGBA")
    frame_ids = tuple(int(frame) for frame in manifest["frames"])
    if image.size != (width * len(frame_ids), height):
        raise ValueError(f"Sprite sheet incohérente : {manifest_path}")
    durations = tuple(int(duration) for duration in manifest["durationsMs"])
    if len(durations) != len(frame_ids):
        raise ValueError(f"Timing incomplet : {manifest_path}")
    frames = tuple(
        image.crop((frame_id * width, 0, (frame_id + 1) * width, height))
        for frame_id in frame_ids
    )
    return Clip(
        key=key,
        manifest_path=manifest_path,
        clip_id=str(manifest["id"]),
        character_version=str(manifest["characterVersion"]),
        frames=frames,
        durations_ms=durations,
        loop=bool(manifest["loop"]),
    )


def load_context(
    project_root: Path,
    animation_pack_name: str = "animation-pack-v1.json",
) -> PreviewContext:
    project_root = project_root.resolve()
    production_root = project_root / "assets/chimi/production"
    animation_pack = read_json(production_root / animation_pack_name)
    presence = read_json(production_root / animation_pack["presencePack"])
    clips: dict[str, Clip] = {}

    idle_key = "idle"
    clips[idle_key] = load_clip(
        idle_key,
        production_root / presence["baseLayer"]["clip"],
    )

    micro_actions = dict(presence["microActions"])
    for key, config in micro_actions.items():
        clips[key] = load_clip(key, production_root / config["clip"])

    semantic_actions = dict(animation_pack["semanticActions"])
    for key, config in semantic_actions.items():
        clips[key] = load_clip(key, production_root / config["clip"])

    return PreviewContext(
        project_root=project_root,
        production_root=production_root,
        presence=presence,
        animation_pack=animation_pack,
        clips=clips,
        micro_actions=micro_actions,
        semantic_actions=semantic_actions,
        idle_key=idle_key,
        master=Image.open(project_root / "design/reference/CHIMI_MASTER_V1.png").convert("RGBA"),
    )


def overlaps(start_ms: int, end_ms: int, event: ScheduledEvent) -> bool:
    return start_ms < event.end_ms and event.start_ms < end_ms


def weighted_choice(
    rng: random.Random,
    candidates: Iterable[str],
    configs: dict[str, dict[str, Any]],
) -> str:
    names = list(candidates)
    weights = [float(configs[name]["weight"]) for name in names]
    return rng.choices(names, weights=weights, k=1)[0]


def generate_schedule(
    context: PreviewContext,
    duration_ms: int,
    seed: int = DEFAULT_SEED,
    ensure_coverage: bool = True,
) -> Schedule:
    rng = random.Random(seed)
    scheduler = context.presence["scheduler"]
    interval_min, interval_max = (int(value) for value in scheduler["rollIntervalMs"])
    nothing_weight = float(scheduler["nothingWeight"])
    history_size = int(scheduler["historySize"])
    max_sequence = int(scheduler["maxActionsInSequence"])
    forced_pause_min, forced_pause_max = (
        int(value) for value in scheduler["forcedPauseMs"]
    )

    semantic_specs = (("thinking", 20_000), ("happy", 42_000))
    semantic_events = [
        ScheduledEvent(
            action=action,
            kind="semantic",
            source="audit-trigger",
            start_ms=trigger_ms,
            end_ms=trigger_ms + context.clips[action].duration_ms,
            trigger_ms=trigger_ms,
        )
        for action, trigger_ms in semantic_specs
        if action in context.semantic_actions and trigger_ms < duration_ms
    ]

    coverage_queue = list(context.micro_actions)
    rng.shuffle(coverage_queue)
    history: list[str] = []
    cooldown_until: dict[str, int] = {name: 0 for name in context.micro_actions}
    events: list[ScheduledEvent] = list(semantic_events)
    decisions: list[dict[str, Any]] = []
    consecutive_actions = 0
    roll_ms = rng.randint(interval_min, min(interval_max, 4_500))

    while roll_ms < duration_ms:
        covering_semantic = next(
            (event for event in semantic_events if event.start_ms <= roll_ms < event.end_ms),
            None,
        )
        if covering_semantic is not None:
            decisions.append(
                {
                    "atMs": roll_ms,
                    "result": "semantic-reserved",
                    "untilMs": covering_semantic.end_ms,
                }
            )
            consecutive_actions = 0
            roll_ms = covering_semantic.end_ms + rng.randint(interval_min, interval_max)
            continue

        eligible = [
            name
            for name in context.micro_actions
            if cooldown_until[name] <= roll_ms and name not in history
        ]
        action: str | None = None
        source = "weighted-roll"

        if ensure_coverage and coverage_queue:
            action = next((name for name in coverage_queue if name in eligible), None)
            if action is not None:
                coverage_queue.remove(action)
                source = "coverage-roll"
        elif eligible and rng.random() >= nothing_weight:
            action = weighted_choice(rng, eligible, context.micro_actions)

        if action is None:
            decisions.append({"atMs": roll_ms, "result": "nothing"})
            consecutive_actions = 0
            roll_ms += rng.randint(interval_min, interval_max)
            continue

        clip = context.clips[action]
        event = ScheduledEvent(
            action=action,
            kind="micro-action",
            source=source,
            start_ms=roll_ms,
            end_ms=roll_ms + clip.duration_ms,
        )
        conflict = next((item for item in semantic_events if overlaps(event.start_ms, event.end_ms, item)), None)
        if conflict is not None:
            decisions.append(
                {
                    "atMs": roll_ms,
                    "result": "semantic-reserved",
                    "actionSkipped": action,
                    "untilMs": conflict.end_ms,
                }
            )
            if source == "coverage-roll":
                coverage_queue.insert(0, action)
            consecutive_actions = 0
            roll_ms = conflict.end_ms + rng.randint(interval_min, interval_max)
            continue

        events.append(event)
        cooldown_min, cooldown_max = (
            int(value) for value in context.micro_actions[action]["cooldownMs"]
        )
        cooldown_until[action] = event.end_ms + rng.randint(cooldown_min, cooldown_max)
        history.append(action)
        history = history[-history_size:]
        consecutive_actions += 1
        decisions.append(
            {
                "atMs": roll_ms,
                "result": action,
                "source": source,
                "cooldownUntilMs": cooldown_until[action],
                "history": list(history),
            }
        )

        next_interval_max = min(interval_max, 5_500) if coverage_queue else interval_max
        next_interval = rng.randint(interval_min, next_interval_max)
        if consecutive_actions >= max_sequence:
            forced_pause = rng.randint(forced_pause_min, forced_pause_max)
            next_interval = max(next_interval, forced_pause)
            consecutive_actions = 0
        roll_ms = event.end_ms + next_interval

    return Schedule(
        events=tuple(sorted(events, key=lambda item: item.start_ms)),
        decisions=tuple(decisions),
        seed=seed,
        duration_ms=duration_ms,
    )


def active_event_at(schedule: Schedule, time_ms: int) -> ScheduledEvent | None:
    return next(
        (event for event in schedule.events if event.start_ms <= time_ms < event.end_ms),
        None,
    )


def idle_epoch_at(schedule: Schedule, time_ms: int) -> int:
    return max(
        (event.end_ms for event in schedule.events if event.end_ms <= time_ms),
        default=0,
    )


def frame_state_at(
    context: PreviewContext,
    schedule: Schedule,
    time_ms: int,
) -> tuple[str, int, Image.Image]:
    event = active_event_at(schedule, time_ms)
    if event is not None:
        clip = context.clips[event.action]
        elapsed_ms = time_ms - event.start_ms
        index = clip.frame_index_at(elapsed_ms)
        return event.action, index, clip.frames[index]
    idle = context.clips[context.idle_key]
    elapsed_ms = time_ms - idle_epoch_at(schedule, time_ms)
    index = idle.frame_index_at(elapsed_ms)
    return context.idle_key, index, idle.frames[index]


def render_frame(sprite: Image.Image, scale: int = SCALE) -> Image.Image:
    size = sprite.width * scale, sprite.height * scale
    background = Image.new("RGBA", size, BACKGROUND)
    enlarged = sprite.resize(size, Image.Resampling.NEAREST)
    background.alpha_composite(enlarged)
    return background


def peak_frame_index(clip: Clip, master: Image.Image) -> int:
    master_bytes = tuple(master.get_flattened_data())
    changes = [
        sum(left != right for left, right in zip(master_bytes, frame.get_flattened_data()))
        for frame in clip.frames
    ]
    return max(range(len(changes)), key=changes.__getitem__)


def frame_start_ms(clip: Clip, frame_index: int) -> int:
    return sum(clip.durations_ms[:frame_index])


def render_poster(context: PreviewContext, schedule: Schedule, destination: Path) -> None:
    happy = next((event for event in schedule.events if event.action == "happy"), None)
    if happy is None:
        _, _, frame = frame_state_at(context, schedule, 0)
    else:
        clip = context.clips[happy.action]
        frame = clip.frames[peak_frame_index(clip, context.master)]
    destination.parent.mkdir(parents=True, exist_ok=True)
    render_frame(frame).save(destination)


def render_contact_sheet(context: PreviewContext, schedule: Schedule, destination: Path) -> None:
    ordered_actions = [context.idle_key, *context.micro_actions, *context.semantic_actions]
    tile_scale = 3
    sprite_size = context.master.width * tile_scale
    label_height = 28
    columns = 5
    rows = (len(ordered_actions) + columns - 1) // columns
    sheet = Image.new(
        "RGBA",
        (columns * sprite_size, rows * (sprite_size + label_height)),
        BACKGROUND,
    )
    draw = ImageDraw.Draw(sheet)
    for index, action in enumerate(ordered_actions):
        clip = context.clips[action]
        frame = clip.frames[peak_frame_index(clip, context.master)]
        tile = render_frame(frame, scale=tile_scale)
        x = (index % columns) * sprite_size
        y = (index // columns) * (sprite_size + label_height)
        sheet.alpha_composite(tile, (x, y))
        draw.text((x + 8, y + sprite_size + 7), action, fill=(255, 247, 234, 255))
    destination.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(destination)


def render_video(
    context: PreviewContext,
    schedule: Schedule,
    destination: Path,
    fps: int,
) -> None:
    ffmpeg = shutil.which("ffmpeg")
    if ffmpeg is None:
        raise RuntimeError("FFmpeg est requis pour produire le MP4.")
    width = context.master.width * SCALE
    height = context.master.height * SCALE
    command = [
        ffmpeg,
        "-y",
        "-loglevel",
        "error",
        "-f",
        "rawvideo",
        "-pixel_format",
        "rgb24",
        "-video_size",
        f"{width}x{height}",
        "-framerate",
        str(fps),
        "-i",
        "-",
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "18",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(destination),
    ]
    destination.parent.mkdir(parents=True, exist_ok=True)
    process = subprocess.Popen(command, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
    if process.stdin is None:
        raise RuntimeError("Impossible d'ouvrir le flux FFmpeg.")
    frame_count = schedule.duration_ms * fps // 1000
    try:
        for frame_number in range(frame_count):
            time_ms = frame_number * 1000 // fps
            _, _, sprite = frame_state_at(context, schedule, time_ms)
            process.stdin.write(render_frame(sprite).convert("RGB").tobytes())
        process.stdin.close()
        stderr = process.stderr.read().decode("utf-8", errors="replace") if process.stderr else ""
        return_code = process.wait()
    except Exception:
        process.kill()
        process.wait()
        raise
    if return_code != 0:
        raise RuntimeError(f"FFmpeg a échoué ({return_code}) : {stderr}")


def source_validation_passed(context: PreviewContext) -> bool:
    return all(
        read_json(clip.manifest_path.parent / "validation-report.json").get("status") == "passed"
        for clip in context.clips.values()
    )


def neutral_returns_passed(context: PreviewContext) -> bool:
    master_bytes = context.master.tobytes()
    return all(
        clip.loop
        or (clip.frames[0].tobytes() == master_bytes and clip.frames[-1].tobytes() == master_bytes)
        for clip in context.clips.values()
    )


def has_repeated_ten_second_sequence(
    context: PreviewContext,
    schedule: Schedule,
) -> bool:
    window_ms = 10_000
    sample_ms = 100
    signatures: set[str] = set()
    for start_ms in range(0, schedule.duration_ms - window_ms + 1, 1_000):
        tokens = []
        for time_ms in range(start_ms, start_ms + window_ms, sample_ms):
            action, frame_index, _ = frame_state_at(context, schedule, time_ms)
            tokens.append(f"{action}:{frame_index}")
        digest = hashlib.sha256("|".join(tokens).encode("utf-8")).hexdigest()
        if digest in signatures:
            return True
        signatures.add(digest)
    return False


def validate_schedule(context: PreviewContext, schedule: Schedule) -> dict[str, Any]:
    events = schedule.events
    no_overlap = all(left.end_ms <= right.start_ms for left, right in zip(events, events[1:]))
    gaps = [right.start_ms - left.end_ms for left, right in zip(events, events[1:])]
    initial_gap = events[0].start_ms if events else schedule.duration_ms
    final_gap = schedule.duration_ms - events[-1].end_ms if events else schedule.duration_ms
    idle_gaps = [initial_gap, *gaps, final_gap]
    start_intervals = [right.start_ms - left.start_ms for left, right in zip(events, events[1:])]
    micro_actions_seen = {event.action for event in events if event.kind == "micro-action"}
    semantic_actions_seen = {event.action for event in events if event.kind == "semantic"}
    repeated_sequence = has_repeated_ten_second_sequence(context, schedule)
    reaction_latencies = [
        event.start_ms - event.trigger_ms
        for event in events
        if event.trigger_ms is not None
    ]
    action_durations: dict[str, int] = {}
    for event in events:
        action_durations[event.action] = action_durations.get(event.action, 0) + event.duration_ms
    dominance = {
        action: round(duration / schedule.duration_ms, 4)
        for action, duration in action_durations.items()
    }

    checks = {
        "sourceValidationPassed": source_validation_passed(context),
        "allMicroActionsCovered": micro_actions_seen == set(context.micro_actions),
        "allSemanticActionsCovered": semantic_actions_seen == set(context.semantic_actions),
        "noOverlappingActions": no_overlap,
        "variableIntervals": len(set(start_intervals)) > 1,
        "truePausePresent": max(idle_gaps, default=0) >= 1_500,
        "noRepeatedTenSecondSequence": not repeated_sequence,
        "reactionLatencyUnder120Ms": bool(reaction_latencies)
        and max(reaction_latencies) < 120,
        "neutralReturnPassed": neutral_returns_passed(context),
        "noActionDominates": max(dominance.values(), default=0.0) < 0.2,
    }
    return {
        "schemaVersion": 1,
        "id": context.presence.get("auditId", "chimi-presence-60s-v1"),
        "status": "passed" if all(checks.values()) else "failed",
        "durationMs": schedule.duration_ms,
        "seed": schedule.seed,
        "mode": "deterministic-coverage-audit",
        "checks": checks,
        "metrics": {
            "eventCount": len(events),
            "microActionsSeen": sorted(micro_actions_seen),
            "semanticActionsSeen": sorted(semantic_actions_seen),
            "idleGapsMs": idle_gaps,
            "startIntervalsMs": start_intervals,
            "reactionLatenciesMs": reaction_latencies,
            "actionDominance": dominance,
        },
    }


def timeline_json(context: PreviewContext, schedule: Schedule) -> dict[str, Any]:
    return {
        "schemaVersion": 1,
        "id": context.presence.get("auditId", "chimi-presence-60s-v1"),
        "characterVersion": context.presence["characterVersion"],
        "durationMs": schedule.duration_ms,
        "seed": schedule.seed,
        "mode": "deterministic-coverage-audit",
        "baseLayer": context.clips[context.idle_key].clip_id,
        "events": [event.as_json(context.clips[event.action]) for event in schedule.events],
        "decisions": list(schedule.decisions),
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path(__file__).resolve().parents[3],
    )
    parser.add_argument("--duration-seconds", type=int, default=DEFAULT_DURATION_SECONDS)
    parser.add_argument("--fps", type=int, default=DEFAULT_FPS)
    parser.add_argument("--seed", type=int, default=DEFAULT_SEED)
    parser.add_argument("--animation-pack", default="animation-pack-v1.json")
    parser.add_argument("--output", type=Path)
    parser.add_argument("--no-video", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    if args.duration_seconds <= 0 or args.fps <= 0:
        raise ValueError("La durée et le nombre d'images par seconde doivent être positifs.")
    context = load_context(args.project_root, args.animation_pack)
    audit_id = context.presence.get("auditId", "chimi-presence-60s-v1")
    output = (
        args.output.resolve()
        if args.output
        else context.project_root / f"assets/chimi/previews/{audit_id}"
    )
    schedule = generate_schedule(
        context,
        duration_ms=args.duration_seconds * 1000,
        seed=args.seed,
        ensure_coverage=True,
    )
    report = validate_schedule(context, schedule)
    output.mkdir(parents=True, exist_ok=True)
    write_json(output / "timeline.json", timeline_json(context, schedule))
    write_json(output / "validation-report.json", report)
    render_poster(context, schedule, output / "poster.png")
    render_contact_sheet(context, schedule, output / "contact-sheet.png")
    if report["status"] != "passed":
        raise ValueError(json.dumps(report, ensure_ascii=False, indent=2))
    if not args.no_video:
        render_video(
            context,
            schedule,
            output / f"{audit_id}.mp4",
            fps=args.fps,
        )
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
