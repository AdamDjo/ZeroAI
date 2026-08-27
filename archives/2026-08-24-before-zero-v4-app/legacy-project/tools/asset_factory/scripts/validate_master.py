"""ART-001 — Validation d'un master candidat.

Verifie un PNG telecharge depuis l'editeur PixelLab contre les contraintes
du vault. Ne modifie rien, ne rejette rien d'autorite : il rapporte.

Usage :
    .venv/bin/python tools/asset_factory/scripts/validate_master.py fichier.png
"""

import json
import sys
import warnings
from collections import Counter
from pathlib import Path

from PIL import Image

warnings.filterwarnings("ignore", category=DeprecationWarning)

ROOT = Path(__file__).resolve().parents[3]
CONFIG = ROOT / "tools" / "asset_factory" / "config"

OK = "  ok   "
WARN = "  !    "
BAD = "  FAIL "


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def load_palette() -> dict[str, tuple[int, int, int]]:
    raw = json.loads((CONFIG / "palette.json").read_text())
    return {k: hex_to_rgb(v) for k, v in raw.items() if not k.startswith("_")}


def nearest_distance(pixel, palette) -> int:
    """Distance L1 a la couleur de palette la plus proche."""
    return min(
        abs(pixel[0] - c[0]) + abs(pixel[1] - c[1]) + abs(pixel[2] - c[2])
        for c in palette.values()
    )


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)

    path = Path(sys.argv[1]).expanduser()
    if not path.exists():
        print(f"{BAD} fichier introuvable : {path}")
        sys.exit(1)

    dims = json.loads((CONFIG / "dimensions.json").read_text())
    canvas = dims["canvas"]
    tol = dims["tolerances"]
    palette = load_palette()

    image = Image.open(path)
    print(f"\n  {path.name}\n")

    failures = 0
    warnings = 0

    # --- dimensions : obligatoire -------------------------------------
    target = (canvas["width"], canvas["height"])
    if image.size == target:
        print(f"{OK} dimensions      {image.size[0]}x{image.size[1]}")
    else:
        print(f"{BAD} dimensions      {image.size[0]}x{image.size[1]}, attendu 96x96")
        print("                 -> redimensionner en NEAREST, jamais en bicubique")
        failures += 1

    # --- alpha : obligatoire ------------------------------------------
    if image.mode != "RGBA":
        image = image.convert("RGBA")
    alpha = image.getchannel("A")
    transparent = sum(1 for v in alpha.getdata() if v == 0)
    if transparent == 0:
        print(f"{BAD} alpha           aucun pixel transparent")
        print("                 -> regenerer avec 'no background' active")
        failures += 1
    else:
        pct = 100 * transparent / (image.size[0] * image.size[1])
        print(f"{OK} alpha           {pct:.0f}% de fond transparent")

    # --- anti-aliasing : semi-transparence ----------------------------
    semi = sum(1 for v in alpha.getdata() if 0 < v < 255)
    if semi > 0:
        pct = 100 * semi / (image.size[0] * image.size[1])
        print(f"{WARN} anti-aliasing   {semi} px semi-transparents ({pct:.1f}%)")
        print("                 -> seuiller l'alpha a 128 avant production")
        warnings += 1
    else:
        print(f"{OK} anti-aliasing   aucun pixel semi-transparent")

    # --- bounding box et baseline -------------------------------------
    bbox = image.getbbox()
    if bbox and transparent > 0:
        x0, y0, x1, y1 = bbox
        baseline = y1 - 1
        expected = canvas["baselineY"]
        delta = abs(baseline - expected)
        print(f"{OK} bbox            x {x0}..{x1}  y {y0}..{y1}")
        if delta <= tol["baselinePx"]:
            print(f"{OK} baseline        y={baseline} (cible {expected}, ecart {delta})")
        else:
            print(f"{WARN} baseline        y={baseline}, cible {expected}, ecart {delta} px")
            print("                 -> decaler verticalement, ne pas redessiner")
            warnings += 1
    else:
        print(f"{WARN} bbox            non mesurable sans transparence")
        warnings += 1

    # --- palette ------------------------------------------------------
    opaque = [
        px[:3] for px in image.getdata() if px[3] > 128
    ]
    if opaque:
        exact = sum(1 for px in opaque if nearest_distance(px, palette) == 0)
        close = sum(1 for px in opaque if nearest_distance(px, palette) <= 24)
        score = close / len(opaque)
        label = OK if score >= 0.85 else WARN
        print(
            f"{label} palette         {score:.0%} proche palette "
            f"({exact / len(opaque):.0%} exact) — seuil 85%"
        )
        if score < 0.85:
            print("                 -> quantifier sur les 5 couleurs officielles")
            warnings += 1

        distinct = len(Counter(opaque))
        print(f"{OK} couleurs        {distinct} teintes distinctes")
        if distinct > 40:
            print("                 -> beaucoup de teintes : verifier que c'est du vrai pixel-art")

    # --- verdict ------------------------------------------------------
    print()
    if failures:
        print(f"  REJET — {failures} blocage(s). Regenerer.")
        sys.exit(1)
    if warnings:
        print(f"  ACCEPTABLE — {warnings} point(s) a corriger, rien de bloquant.")
        print("  Les ecarts de baseline et d'alpha se corrigent sans redessiner.")
        sys.exit(0)
    print("  CONFORME — pret pour le Gate 1 (MASTER APPROVED).")


if __name__ == "__main__":
    main()
