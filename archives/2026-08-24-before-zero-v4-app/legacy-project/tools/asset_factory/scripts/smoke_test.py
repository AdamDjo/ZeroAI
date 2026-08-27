"""PIPE-003 — Smoke test PixelLab.

Verifie, sans rien produire de definitif :
  1. la cle API est lue depuis .env
  2. le compte repond et a du credit
  3. une generation 96x96 aboutit et respecte le canvas

Usage :
    .venv/bin/python tools/asset_factory/scripts/smoke_test.py
"""

import json
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[3]
OUTPUT_DIR = ROOT / "tools" / "asset_factory" / "output"
DIMENSIONS = ROOT / "tools" / "asset_factory" / "config" / "dimensions.json"


def fail(message: str) -> None:
    print(f"\n  ECHEC — {message}")
    sys.exit(1)


def main() -> None:
    load_dotenv(ROOT / ".env")

    api_key = os.getenv("PIXELLAB_API_KEY", "").strip()
    if not api_key:
        fail("PIXELLAB_API_KEY absent. Copier .env.example vers .env et remplir.")
    print(f"[1/3] cle lue           ...{api_key[-4:]}")

    import pixellab

    client = pixellab.Client(secret=api_key)

    try:
        balance = client.get_balance()
    except Exception as exc:  # noqa: BLE001 — on veut le message brut
        fail(f"appel API refuse : {exc}")

    print(f"[2/3] compte joignable  credit = {balance.usd} USD")
    if balance.usd <= 0:
        fail("credit epuise — recharger le compte avant de generer.")

    canvas = json.loads(DIMENSIONS.read_text())["canvas"]
    size = {"width": canvas["width"], "height": canvas["height"]}

    print(f"[3/3] generation test   {size['width']}x{size['height']} ...")
    try:
        response = client.generate_image_pixflux(
            description=(
                "small round cream-colored cat sitting, black ears, "
                "cute pixel art, front view, flat colors"
            ),
            image_size=size,
            no_background=True,
            outline="single color black outline",
            shading="flat shading",
            detail="low detail",
        )
    except Exception as exc:  # noqa: BLE001
        fail(f"generation refusee : {exc}")

    image = response.image.pil_image()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    destination = OUTPUT_DIR / "smoke_test.png"
    image.save(destination)

    print(f"      recu             {image.size[0]}x{image.size[1]}, mode {image.mode}")
    print(f"      ecrit            {destination.relative_to(ROOT)}")

    if image.size != (canvas["width"], canvas["height"]):
        fail(f"canvas inattendu : {image.size}")
    if image.mode != "RGBA":
        print("      note             pas d'alpha — a surveiller pour la production")

    print("\n  OK — le pipeline peut demarrer. Prochaine issue : ART-001.")


if __name__ == "__main__":
    main()
