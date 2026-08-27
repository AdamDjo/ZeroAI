from __future__ import annotations

import importlib.util
import sys
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SCRIPT_PATH = PROJECT_ROOT / "tools/asset_factory/scripts/render_presence_preview.py"
SPEC = importlib.util.spec_from_file_location("render_presence_preview", SCRIPT_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError(f"Impossible de charger {SCRIPT_PATH}")
PREVIEW = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = PREVIEW
SPEC.loader.exec_module(PREVIEW)


class PresencePreviewTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.context = PREVIEW.load_context(PROJECT_ROOT)

    def test_sixty_second_audit_passes_every_check(self) -> None:
        schedule = PREVIEW.generate_schedule(
            self.context,
            duration_ms=60_000,
            seed=PREVIEW.DEFAULT_SEED,
        )

        report = PREVIEW.validate_schedule(self.context, schedule)

        self.assertEqual(report["status"], "passed", report)
        self.assertTrue(all(report["checks"].values()), report)
        self.assertEqual(
            set(report["metrics"]["microActionsSeen"]),
            set(self.context.micro_actions),
        )
        self.assertEqual(
            set(report["metrics"]["semanticActionsSeen"]),
            set(self.context.semantic_actions),
        )

    def test_v2_pack_covers_polished_and_rare_actions(self) -> None:
        context = PREVIEW.load_context(PROJECT_ROOT, "animation-pack-v2.json")
        schedule = PREVIEW.generate_schedule(
            context,
            duration_ms=60_000,
            seed=PREVIEW.DEFAULT_SEED,
        )

        report = PREVIEW.validate_schedule(context, schedule)

        self.assertEqual(report["status"], "passed", report)
        self.assertEqual(report["id"], "chimi-presence-60s-v2")
        self.assertIn("specialIdleYawn", report["metrics"]["microActionsSeen"])
        self.assertEqual(context.clips["standUp"].clip_id, "chimi-stand-up-v2")
        self.assertEqual(context.clips["thinking"].clip_id, "chimi-thinking-v2")

    def test_schedule_is_reproducible_and_has_no_overlap(self) -> None:
        first = PREVIEW.generate_schedule(self.context, 60_000, seed=1234)
        second = PREVIEW.generate_schedule(self.context, 60_000, seed=1234)

        self.assertEqual(first, second)
        for left, right in zip(first.events, first.events[1:]):
            self.assertLessEqual(left.end_ms, right.start_ms)

    def test_each_action_returns_to_neutral_idle_frame(self) -> None:
        schedule = PREVIEW.generate_schedule(
            self.context,
            duration_ms=60_000,
            seed=PREVIEW.DEFAULT_SEED,
        )
        master_bytes = self.context.master.tobytes()

        for event in schedule.events:
            action, frame_index, frame = PREVIEW.frame_state_at(
                self.context,
                schedule,
                event.end_ms,
            )
            self.assertEqual(action, self.context.idle_key)
            self.assertEqual(frame_index, 0)
            self.assertEqual(frame.tobytes(), master_bytes)


if __name__ == "__main__":
    unittest.main()
