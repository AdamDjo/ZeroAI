"""ART-003 — Normalisation d'un sprite genere.

Prend un PNG brut sorti de PixelLab et le met aux normes geometriques :
  1. seuillage de l'alpha (pas de semi-transparence)
  2. upscale NEAREST vers 96x96 (uniquement si diviseur exact)
  3. recalage vertical sur baselineY = 86

Pour une source haute definition generee depuis le master, l'option
``--fit-downscale`` detoure le contenu alpha et le reduit en NEAREST dans
une bbox de production, sans changer ses proportions. Le resultat est
centre puis pose sur la baseline officielle.

Ne redessine rien, ne retouche aucune couleur. Toutes les operations sont
sans perte : l'upscale duplique les pixels, le recalage les translate.

La quantification sur 5 couleurs est disponible via --quantize mais
DESACTIVEE par defaut : sur un sprite deja propre elle ronge les contours
et fait apparaitre du coral sur les zones d'ombre. Verifier a l'oeil.

Usage :
    .venv/bin/python tools/asset_factory/scripts/normalize_asset.py in.png out.png
    .venv/bin/python tools/asset_factory/scripts/normalize_asset.py in.png out.png --fit-downscale
"""

import json
import sys
import warnings
from pathlib import Path

from PIL import Image

warnings.filterwarnings("ignore", category=DeprecationWarning)

ROOT = Path(__file__).resolve().parents[3]
CONFIG = ROOT / "tools" / "asset_factory" / "config"


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def load_palette() -> list[tuple[int, int, int]]:
    raw = json.loads((CONFIG / "palette.json").read_text())
    return [hex_to_rgb(v) for k, v in raw.items() if not k.startswith("_")]


def nearest(pixel, palette):
    return min(
        palette,
        key=lambda c: (pixel[0] - c[0]) ** 2
        + (pixel[1] - c[1]) ** 2
        + (pixel[2] - c[2]) ** 2,
    )


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    flags = {a for a in sys.argv[1:] if a.startswith("--")}

    if len(args) < 2:
        print(__doc__)
        sys.exit(2)

    source = Path(args[0]).expanduser()
    destination = Path(args[1]).expanduser()
    do_quantize = "--quantize" in flags
    fit_downscale = "--fit-downscale" in flags

    dims = json.loads((CONFIG / "dimensions.json").read_text())
    canvas = dims["canvas"]
    target = (canvas["width"], canvas["height"])
    palette = load_palette()

    image = Image.open(source).convert("RGBA")
    print(f"\n  source  {source.name}  {image.size[0]}x{image.size[1]}")

    # --- 1. seuillage alpha ------------------------------------------
    pixels = list(image.getdata())
    pixels = [(r, g, b, 255 if a > 128 else 0) for r, g, b, a in pixels]
    image.putdata(pixels)

    # --- 2. mise a l'echelle NEAREST ---------------------------------
    fitted = False
    if fit_downscale:
        bbox = image.getbbox()
        if not bbox:
            print("  ARRET : aucun pixel visible dans la source.")
            sys.exit(1)

        image = image.crop(bbox)
        max_width = canvas.get("masterMaxWidth", 76)
        max_height = canvas.get("masterMaxHeight", 78)
        ratio = min(max_width / image.width, max_height / image.height)
        fitted_size = (
            max(1, round(image.width * ratio)),
            max(1, round(image.height * ratio)),
        )
        image = image.resize(fitted_size, Image.NEAREST)
        fitted = True
        print(
            f"  fit NEAREST -> {fitted_size[0]}x{fitted_size[1]} "
            f"(bbox max {max_width}x{max_height})"
        )
    elif image.size != target:
        factor_w = target[0] / image.size[0]
        factor_h = target[1] / image.size[1]
        if factor_w != factor_h or factor_w != int(factor_w):
            print(f"  ARRET : {image.size} n'est pas un diviseur exact de 96x96.")
            print("          Un upscale non entier inventerait des pixels.")
            sys.exit(1)
        image = image.resize(target, Image.NEAREST)
        print(f"  upscale x{int(factor_w)} NEAREST -> {target[0]}x{target[1]}")

    # --- 3. quantification (opt-in) ----------------------------------
    if do_quantize:
        pixels = list(image.getdata())
        quantized = []
        changed = 0
        for r, g, b, a in pixels:
            if a == 0:
                quantized.append((0, 0, 0, 0))
                continue
            nr, ng, nb = nearest((r, g, b), palette)
            if (nr, ng, nb) != (r, g, b):
                changed += 1
            quantized.append((nr, ng, nb, 255))
        image.putdata(quantized)
        opaque = sum(1 for p in quantized if p[3] > 0)
        print(f"  palette  {changed}/{opaque} px reajustes sur les 5 couleurs")
    else:
        distinct = len({p[:3] for p in image.getdata() if p[3] > 0})
        print(f"  palette  intacte, {distinct} teintes conservees")

    # --- 4. centrage et recalage baseline ----------------------------
    if fitted:
        composed = Image.new("RGBA", target, (0, 0, 0, 0))
        x = (target[0] - image.width) // 2
        y = canvas["baselineY"] - image.height + 1
        composed.paste(image, (x, y), image)
        image = composed
        print(f"  placement centre x={x}, baseline y={canvas['baselineY']}")

    bbox = image.getbbox()
    if bbox:
        current = bbox[3] - 1
        expected = canvas["baselineY"]
        shift = expected - current
        if shift:
            shifted = Image.new("RGBA", target, (0, 0, 0, 0))
            shifted.paste(image, (0, shift))
            image = shifted
            print(f"  baseline decalage {shift:+d} px -> y={expected}")

    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination)
    print(f"  ecrit    {destination}\n")


if __name__ == "__main__":
    main()
