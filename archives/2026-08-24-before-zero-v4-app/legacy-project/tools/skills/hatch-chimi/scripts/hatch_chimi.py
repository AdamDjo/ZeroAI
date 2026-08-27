#!/usr/bin/env python3
"""Prépare, valide et assemble des clips pixel-art complets de Chimi."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

from PIL import Image


PROFILE_PATH = Path("tools/asset_factory/config/chimi-animation-profiles.json")
REPORT_NAME = "validation-report.json"


@dataclass(frozen=True)
class ClipContext:
    spec_path: Path
    project_root: Path
    spec: dict[str, Any]
    master: Image.Image
    master_path: Path
    frames: list[Image.Image]
    frame_paths: list[Path]


def read_json(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"JSON illisible : {path} ({error})") from error


def write_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def resolve_from_root(project_root: Path, value: str) -> Path:
    return (project_root / value).resolve()


def load_context(spec_path: Path) -> ClipContext:
    spec_path = spec_path.resolve()
    spec = read_json(spec_path)
    project_root = (spec_path.parent / spec["projectRoot"]).resolve()
    master_path = resolve_from_root(project_root, spec["master"])
    frames_dir = (spec_path.parent / spec.get("framesDirectory", "frames")).resolve()
    frame_paths = sorted(frames_dir.glob("frame-*.png"))

    try:
        master = Image.open(master_path).convert("RGBA")
        frames = [Image.open(path).convert("RGBA") for path in frame_paths]
    except OSError as error:
        raise ValueError(f"Image illisible : {error}") from error

    return ClipContext(
        spec_path=spec_path,
        project_root=project_root,
        spec=spec,
        master=master,
        master_path=master_path,
        frames=frames,
        frame_paths=frame_paths,
    )


def opaque_pixels(image: Image.Image) -> set[tuple[int, int]]:
    alpha = image.getchannel("A")
    return {
        (x, y)
        for y in range(image.height)
        for x in range(image.width)
        if alpha.getpixel((x, y)) > 0
    }


def opaque_palette(image: Image.Image) -> set[tuple[int, int, int, int]]:
    return {pixel for pixel in image.get_flattened_data() if pixel[3] > 0}


def component_sizes(image: Image.Image, minimum_size: int = 3) -> list[int]:
    remaining = opaque_pixels(image)
    sizes: list[int] = []
    while remaining:
        pending = [remaining.pop()]
        size = 0
        while pending:
            x, y = pending.pop()
            size += 1
            for neighbor in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if neighbor in remaining:
                    remaining.remove(neighbor)
                    pending.append(neighbor)
        if size >= minimum_size:
            sizes.append(size)
    return sorted(sizes, reverse=True)


def alpha_iou(left: Image.Image, right: Image.Image) -> float:
    left_pixels = opaque_pixels(left)
    right_pixels = opaque_pixels(right)
    union = left_pixels | right_pixels
    return 1.0 if not union else len(left_pixels & right_pixels) / len(union)


def bottom_y(image: Image.Image) -> int | None:
    bbox = image.getchannel("A").getbbox()
    return None if bbox is None else bbox[3] - 1


def bbox_delta(left: tuple[int, int, int, int], right: tuple[int, int, int, int]) -> int:
    return max(abs(a - b) for a, b in zip(left, right))


def pixel_changes(
    left: Image.Image,
    right: Image.Image,
    bounds: Iterable[int] | None = None,
) -> int:
    if bounds is None:
        bounds = (0, 0, left.width, left.height)
    x0, y0, x1, y1 = bounds
    return sum(
        left.getpixel((x, y)) != right.getpixel((x, y))
        for y in range(y0, y1)
        for x in range(x0, x1)
    )


def point_in_regions(x: int, y: int, regions: list[list[int]]) -> bool:
    return any(x0 <= x < x1 and y0 <= y < y1 for x0, y0, x1, y1 in regions)


def changes_outside_regions(
    left: Image.Image,
    right: Image.Image,
    regions: list[list[int]],
) -> int:
    return sum(
        left.getpixel((x, y)) != right.getpixel((x, y))
        for y in range(left.height)
        for x in range(left.width)
        if not point_in_regions(x, y, regions)
    )


def validate_context(context: ClipContext) -> dict[str, Any]:
    spec = context.spec
    errors: list[str] = []
    metrics: list[dict[str, Any]] = []
    metadata_path = resolve_from_root(context.project_root, spec["masterMetadata"])
    metadata = read_json(metadata_path)
    expected_digest = metadata.get("sha256")

    if sha256(context.master_path) != expected_digest:
        errors.append("Le checksum du master ne correspond pas aux métadonnées.")

    expected_count = int(spec["frameCount"])
    if len(context.frames) != expected_count:
        errors.append(f"Frame count invalide : {len(context.frames)} au lieu de {expected_count}.")

    if len(spec.get("durationsMs", [])) != expected_count:
        errors.append("durationsMs doit contenir une durée par frame.")
    if len(spec.get("motion", [])) != expected_count:
        errors.append("motion doit contenir un libellé par frame.")

    master_palette = opaque_palette(context.master)
    master_bbox = context.master.getchannel("A").getbbox()
    master_baseline = bottom_y(context.master)
    master_components = component_sizes(context.master)
    mutable_regions = spec.get("mutableRegions", [])

    if master_bbox is None or master_baseline is None:
        errors.append("Le master est entièrement transparent.")
        master_bbox = (0, 0, 0, 0)
        master_baseline = 0

    frame_bboxes: list[tuple[int, int, int, int]] = []
    changed_pixel_counts: list[int] = []
    for path, frame in zip(context.frame_paths, context.frames):
        frame_errors: list[str] = []
        if frame.size != context.master.size:
            frame_errors.append(f"dimensions {frame.size}, attendu {context.master.size}")
            metrics.append({"frame": path.name, "errors": frame_errors})
            errors.append(f"{path.name}: " + "; ".join(frame_errors))
            continue

        frame_palette = opaque_palette(frame)
        unexpected_colors = sorted(frame_palette - master_palette)
        if unexpected_colors:
            frame_errors.append(f"couleurs hors palette : {unexpected_colors}")

        semi_transparent = sum(0 < pixel[3] < 255 for pixel in frame.get_flattened_data())
        if semi_transparent:
            frame_errors.append(f"{semi_transparent} pixels semi-transparents")

        frame_bbox = frame.getchannel("A").getbbox()
        frame_baseline = bottom_y(frame)
        if frame_bbox is None or frame_baseline is None:
            frame_errors.append("frame entièrement transparente")
            frame_bbox = (0, 0, 0, 0)
            frame_baseline = 0
        frame_bboxes.append(frame_bbox)

        iou = alpha_iou(context.master, frame)
        if iou < float(spec["minAlphaIou"]):
            frame_errors.append(f"silhouette IoU {iou:.4f} < {spec['minAlphaIou']}")

        baseline_delta = abs(frame_baseline - master_baseline)
        if baseline_delta > int(spec["maxBaselineDelta"]):
            frame_errors.append(
                f"baseline décalée de {baseline_delta}px (max {spec['maxBaselineDelta']})"
            )

        current_bbox_delta = bbox_delta(master_bbox, frame_bbox)
        if current_bbox_delta > int(spec["maxBboxJitter"]):
            frame_errors.append(
                f"bbox décalée de {current_bbox_delta}px (max {spec['maxBboxJitter']})"
            )

        components = component_sizes(frame)
        components_delta = abs(len(components) - len(master_components))
        if components_delta > int(spec["maxComponentsDelta"]):
            frame_errors.append(
                f"silhouette coupée : {len(components)} composantes au lieu de {len(master_components)}"
            )

        outside_changes = changes_outside_regions(context.master, frame, mutable_regions)
        if outside_changes:
            frame_errors.append(f"{outside_changes} pixels modifiés hors zones mutables")

        changed_pixels = pixel_changes(context.master, frame)
        changed_pixel_counts.append(changed_pixels)

        protected_metrics: dict[str, int] = {}
        for protected in spec.get("protectedRegions", []):
            changed = pixel_changes(context.master, frame, protected["bounds"])
            protected_metrics[protected["name"]] = changed
            if changed > int(protected["maxChangedPixels"]):
                frame_errors.append(
                    f"région {protected['name']} : {changed} changements "
                    f"(max {protected['maxChangedPixels']})"
                )

        metrics.append(
            {
                "frame": path.name,
                "alphaIou": round(iou, 6),
                "baselineDelta": baseline_delta,
                "bboxDelta": current_bbox_delta,
                "componentCount": len(components),
                "changedPixelsFromMaster": changed_pixels,
                "changesOutsideMutableRegions": outside_changes,
                "protectedChanges": protected_metrics,
                "errors": frame_errors,
            }
        )
        errors.extend(f"{path.name}: {message}" for message in frame_errors)

    for index, (previous_bbox, current_bbox) in enumerate(
        zip(frame_bboxes, frame_bboxes[1:]), start=2
    ):
        jitter = bbox_delta(previous_bbox, current_bbox)
        if jitter > int(spec["maxBboxJitter"]):
            errors.append(
                f"frame-{index:02d}.png: jitter inter-frame de {jitter}px "
                f"(max {spec['maxBboxJitter']})."
            )

    hashes = {hashlib.sha256(frame.tobytes()).hexdigest() for frame in context.frames}
    if len(hashes) < int(spec["minDistinctFrames"]):
        errors.append(
            f"Clip trop statique : {len(hashes)} poses distinctes, "
            f"minimum {spec['minDistinctFrames']}."
        )

    peak_changed_pixels = max(changed_pixel_counts, default=0)
    minimum_peak = int(spec.get("minPeakChangedPixels", 0))
    if peak_changed_pixels < minimum_peak:
        errors.append(
            f"Mouvement imperceptible : pic de {peak_changed_pixels} pixels modifiés, "
            f"minimum {minimum_peak}."
        )

    if context.frames and spec.get("requireMasterEndpoints"):
        if context.frames[0].tobytes() != context.master.tobytes():
            errors.append("La première frame doit être exactement le master.")
        if context.frames[-1].tobytes() != context.master.tobytes():
            errors.append("La dernière frame doit être exactement le master.")

    if (
        len(context.frames) >= 2
        and spec.get("loopClosure") == "exact"
        and context.frames[0].tobytes() != context.frames[-1].tobytes()
    ):
        errors.append("Loop seam : la dernière frame ne correspond pas à la première.")

    return {
        "schemaVersion": 1,
        "clipId": spec["id"],
        "status": "passed" if not errors else "failed",
        "masterSha256": sha256(context.master_path),
        "frameCount": len(context.frames),
        "peakChangedPixels": peak_changed_pixels,
        "metrics": metrics,
        "errors": errors,
    }


def scaffold(project_root: Path, profile_name: str, output: Path) -> None:
    project_root = project_root.resolve()
    profiles_path = project_root / PROFILE_PATH
    profiles = read_json(profiles_path)
    try:
        profile = profiles["profiles"][profile_name]
    except KeyError as error:
        available = ", ".join(sorted(profiles.get("profiles", {})))
        raise ValueError(f"Profil inconnu '{profile_name}'. Disponibles : {available}") from error

    output = output.resolve()
    if output.exists() and any(output.iterdir()):
        raise ValueError(f"Le dossier de sortie n'est pas vide : {output}")

    frames_dir = output / "frames"
    frames_dir.mkdir(parents=True, exist_ok=True)
    master_path = resolve_from_root(project_root, profiles["master"])
    for index in range(1, int(profile["frameCount"]) + 1):
        shutil.copy2(master_path, frames_dir / f"frame-{index:02d}.png")

    spec = {
        "schemaVersion": 1,
        "profile": profile_name,
        "characterVersion": profiles["characterVersion"],
        "projectRoot": str(Path(os.path.relpath(project_root, output))),
        "master": profiles["master"],
        "masterMetadata": profiles["masterMetadata"],
        "framesDirectory": "frames",
        **profile,
    }
    write_json(output / "clip-spec.json", spec)
    print(f"Scaffold créé : {output}")
    print("Remplacer uniquement les poses intermédiaires, puis lancer validate.")


def validate(spec_path: Path, report_path: Path | None = None) -> dict[str, Any]:
    context = load_context(spec_path)
    report = validate_context(context)
    if report_path:
        write_json(report_path.resolve(), report)
    return report


def build(spec_path: Path, output: Path) -> dict[str, Any]:
    context = load_context(spec_path)
    report = validate_context(context)
    if report["status"] != "passed":
        raise ValueError(json.dumps(report, ensure_ascii=False, indent=2))

    output = output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    clip_id = context.spec["id"]
    width, height = context.master.size

    sheet = Image.new("RGBA", (width * len(context.frames), height), (0, 0, 0, 0))
    for index, frame in enumerate(context.frames):
        sheet.alpha_composite(frame, (index * width, 0))
    sheet_name = f"{clip_id}-sheet.png"
    sheet.save(output / sheet_name)

    preview = [frame.resize((width * 6, height * 6), Image.Resampling.NEAREST) for frame in context.frames]
    preview_name = f"{clip_id}-preview.gif"
    preview[0].save(
        output / preview_name,
        save_all=True,
        append_images=preview[1:],
        duration=context.spec["durationsMs"],
        loop=0 if context.spec["loop"] else 1,
        disposal=2,
    )

    manifest = {
        "manifestVersion": "1.0.0",
        "characterVersion": context.spec["characterVersion"],
        "id": clip_id,
        "sheet": sheet_name,
        "canvas": [width, height],
        "frames": list(range(len(context.frames))),
        "durationsMs": context.spec["durationsMs"],
        "motion": context.spec["motion"],
        "loop": context.spec["loop"],
        "validation": REPORT_NAME,
    }
    write_json(output / "manifest.json", manifest)
    write_json(output / REPORT_NAME, report)
    print(f"Candidat validé et construit : {output}")
    return report


def create_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    scaffold_parser = subparsers.add_parser("scaffold", help="Préparer les frames neutres d'un profil")
    scaffold_parser.add_argument("--project-root", type=Path, required=True)
    scaffold_parser.add_argument("--profile", required=True)
    scaffold_parser.add_argument("--output", type=Path, required=True)

    validate_parser = subparsers.add_parser("validate", help="Valider les frames d'un clip")
    validate_parser.add_argument("--spec", type=Path, required=True)
    validate_parser.add_argument("--report", type=Path)

    build_parser = subparsers.add_parser("build", help="Valider puis assembler un candidat")
    build_parser.add_argument("--spec", type=Path, required=True)
    build_parser.add_argument("--output", type=Path, required=True)
    return parser


def main() -> int:
    args = create_parser().parse_args()
    try:
        if args.command == "scaffold":
            scaffold(args.project_root, args.profile, args.output)
            return 0
        if args.command == "validate":
            report = validate(args.spec, args.report)
            print(json.dumps(report, ensure_ascii=False, indent=2))
            return 0 if report["status"] == "passed" else 1
        if args.command == "build":
            build(args.spec, args.output)
            return 0
    except (KeyError, OSError, ValueError) as error:
        print(f"ERREUR : {error}", file=sys.stderr)
        return 1
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
