#!/usr/bin/env python3
"""Remove chroma pixels introduced by frame resampling.

The official hatch-pet extractor keys the source strip before fitting each
sprite into its 192x208 cell. Lanczos fitting can reintroduce tiny coloured
edge pixels, so this deterministic second pass applies the same key after the
resize and normalizes removed pixels to transparent black.
"""

from __future__ import annotations

import argparse
import math
from pathlib import Path

from PIL import Image


def color_distance(
    red: int,
    green: int,
    blue: int,
    key: tuple[int, int, int],
) -> float:
    return math.sqrt(
        (red - key[0]) ** 2
        + (green - key[1]) ** 2
        + (blue - key[2]) ** 2
    )


def clean_frame(
    path: Path,
    key: tuple[int, int, int],
    threshold: float,
) -> int:
    with Image.open(path) as opened:
        frame = opened.convert("RGBA")

    pixels = frame.load()
    removed = 0
    for y in range(frame.height):
        for x in range(frame.width):
            red, green, blue, alpha = pixels[x, y]
            if alpha and color_distance(red, green, blue, key) <= threshold:
                pixels[x, y] = (0, 0, 0, 0)
                removed += 1

    frame.save(path)
    return removed


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("frames_root", type=Path)
    parser.add_argument("--threshold", type=float, default=200.0)
    args = parser.parse_args()

    frame_paths = sorted(args.frames_root.glob("*/*.png"))
    if not frame_paths:
        raise SystemExit(f"no PNG frames found under {args.frames_root}")

    removed = sum(
        clean_frame(path, (255, 0, 255), args.threshold)
        for path in frame_paths
    )
    print(f"cleaned {len(frame_paths)} frames; removed {removed} chroma pixels")


if __name__ == "__main__":
    main()
