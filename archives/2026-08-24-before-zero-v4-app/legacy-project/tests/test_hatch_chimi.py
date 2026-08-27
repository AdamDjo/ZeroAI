from __future__ import annotations

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path

from PIL import Image


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SCRIPT_PATH = PROJECT_ROOT / "tools/skills/hatch-chimi/scripts/hatch_chimi.py"
SPEC = importlib.util.spec_from_file_location("hatch_chimi", SCRIPT_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError(f"Impossible de charger {SCRIPT_PATH}")
HATCH_CHIMI = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = HATCH_CHIMI
SPEC.loader.exec_module(HATCH_CHIMI)


class HatchChimiTests(unittest.TestCase):
    def test_valid_key_pose_builds_sheet_preview_and_manifest(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            clip_directory = Path(temporary_directory) / "look-left"
            HATCH_CHIMI.scaffold(PROJECT_ROOT, "look-left", clip_directory)

            middle_path = clip_directory / "frames/frame-02.png"
            middle = Image.open(middle_path).convert("RGBA")
            first_position = None
            second_position = None
            first_color = None
            for y in range(34, 50):
                for x in range(26, 67):
                    color = middle.getpixel((x, y))
                    if color[3] == 0:
                        continue
                    if first_position is None:
                        first_position = (x, y)
                        first_color = color
                    elif color != first_color:
                        second_position = (x, y)
                        break
                if second_position is not None:
                    break

            self.assertIsNotNone(first_position)
            self.assertIsNotNone(second_position)
            first = first_position
            second = second_position
            middle.putpixel(first, middle.getpixel(second))
            middle.putpixel(second, first_color)
            middle.save(middle_path)

            report = HATCH_CHIMI.validate(clip_directory / "clip-spec.json")
            self.assertEqual(report["status"], "passed", report["errors"])

            output = clip_directory / "candidate"
            HATCH_CHIMI.build(clip_directory / "clip-spec.json", output)
            self.assertTrue((output / "chimi-look-left-v1-sheet.png").is_file())
            self.assertTrue((output / "chimi-look-left-v1-preview.gif").is_file())
            self.assertTrue((output / "manifest.json").is_file())
            self.assertTrue((output / "validation-report.json").is_file())

            with Image.open(output / "chimi-look-left-v1-sheet.png") as sheet:
                self.assertEqual(sheet.size, (288, 96))

    def test_horizontal_cut_is_rejected_as_split_silhouette(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            clip_directory = Path(temporary_directory) / "idle-breathe"
            HATCH_CHIMI.scaffold(PROJECT_ROOT, "idle-breathe", clip_directory)

            cut_path = clip_directory / "frames/frame-02.png"
            cut = Image.open(cut_path).convert("RGBA")
            for x in range(14, 82):
                cut.putpixel((x, 60), (0, 0, 0, 0))
            cut.save(cut_path)

            report = HATCH_CHIMI.validate(clip_directory / "clip-spec.json")
            self.assertEqual(report["status"], "failed")
            self.assertTrue(
                any("silhouette coupée" in error for error in report["errors"]),
                report["errors"],
            )
            candidate = clip_directory / "candidate"
            with self.assertRaises(ValueError):
                HATCH_CHIMI.build(clip_directory / "clip-spec.json", candidate)
            self.assertFalse(candidate.exists())

    def test_identity_change_outside_mutable_region_is_rejected(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            clip_directory = Path(temporary_directory) / "blink"
            HATCH_CHIMI.scaffold(PROJECT_ROOT, "blink", clip_directory)

            frame_path = clip_directory / "frames/frame-02.png"
            frame = Image.open(frame_path).convert("RGBA")
            original = frame.getpixel((30, 80))
            replacement = (26, 26, 26, 255) if original != (26, 26, 26, 255) else (255, 247, 234, 255)
            frame.putpixel((30, 80), replacement)
            frame.save(frame_path)

            report = HATCH_CHIMI.validate(clip_directory / "clip-spec.json")
            self.assertEqual(report["status"], "failed")
            self.assertTrue(
                any("hors zones mutables" in error for error in report["errors"]),
                report["errors"],
            )

    def test_imperceptible_motion_is_rejected(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            clip_directory = Path(temporary_directory) / "tail-sway-v2"
            HATCH_CHIMI.scaffold(PROJECT_ROOT, "tail-sway-v2", clip_directory)

            frame_path = clip_directory / "frames/frame-02.png"
            frame = Image.open(frame_path).convert("RGBA")
            positions_by_color: dict[tuple[int, int, int, int], tuple[int, int]] = {}
            for y in range(32, 80):
                for x in range(56, 90):
                    color = frame.getpixel((x, y))
                    if color[3] > 0 and color not in positions_by_color:
                        positions_by_color[color] = (x, y)

            self.assertGreaterEqual(len(positions_by_color), 2)
            first_color, second_color = list(positions_by_color)[:2]
            first_position = positions_by_color[first_color]
            second_position = positions_by_color[second_color]
            frame.putpixel(first_position, second_color)
            frame.putpixel(second_position, first_color)
            frame.save(frame_path)

            report = HATCH_CHIMI.validate(clip_directory / "clip-spec.json")
            self.assertEqual(report["status"], "failed")
            self.assertTrue(
                any("Mouvement imperceptible" in error for error in report["errors"]),
                report["errors"],
            )


if __name__ == "__main__":
    unittest.main()
