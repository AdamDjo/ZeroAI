"""Decoupe une planche ImageGen en cellules RGBA nettoyees.

ImageGen peut laisser un halo faiblement opaque autour d'un sujet detoure.
Le seuil alpha supprime ce halo avant la normalisation 96x96, sans toucher
aux pixels opaques du personnage.

Usage :
    .venv/bin/python tools/asset_factory/scripts/slice_generated_sheet.py \
        sheet.png output_dir 3 2 200
"""

import sys
from pathlib import Path

from PIL import Image


def main() -> None:
    if len(sys.argv) != 7:
        print(__doc__)
        sys.exit(2)

    source = Path(sys.argv[1]).expanduser()
    output_dir = Path(sys.argv[2]).expanduser()
    columns = int(sys.argv[3])
    rows = int(sys.argv[4])
    alpha_threshold = int(sys.argv[5])
    prefix = sys.argv[6]

    image = Image.open(source).convert("RGBA")
    if image.width % columns or image.height % rows:
        print(
            f"ARRET : {image.size} n'est pas divisible par "
            f"une grille {columns}x{rows}."
        )
        sys.exit(1)

    cell_width = image.width // columns
    cell_height = image.height // rows
    output_dir.mkdir(parents=True, exist_ok=True)

    index = 0
    for row in range(rows):
        for column in range(columns):
            index += 1
            cell = image.crop(
                (
                    column * cell_width,
                    row * cell_height,
                    (column + 1) * cell_width,
                    (row + 1) * cell_height,
                )
            )
            pixels = [
                (r, g, b, 255 if a >= alpha_threshold else 0)
                for r, g, b, a in cell.getdata()
            ]
            cell.putdata(pixels)
            destination = output_dir / f"{prefix}-{index:02d}.png"
            cell.save(destination)
            print(f"ecrit {destination}")


if __name__ == "__main__":
    main()
