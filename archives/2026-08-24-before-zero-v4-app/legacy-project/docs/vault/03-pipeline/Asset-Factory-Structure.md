---
title: Asset Factory Structure
type: spec
tags: [pipeline, structure]
statut: actif
maj: 2026-08-20
---

# Asset Factory — structure

```text
tools/asset_factory/
├── README.md
├── config/
│   ├── palette.json
│   ├── dimensions.json
│   └── quality_thresholds.json
├── scripts/
│   ├── validate_asset.py
│   ├── validate_animation.py
│   ├── generate_manifest.py
│   ├── pack_spritesheet.py
│   ├── generate_preview.py
│   └── compare_master.py
├── output/
└── reports/
```

## Rôle de chaque script

| Script | Rôle | Nœud |
|---|---|---|
| `validate_asset.py` | dimensions, alpha, bbox, palette, baseline | [[Validators]] |
| `validate_animation.py` | frame count, timing, loop seam, jitter | [[Validation-Animation]] |
| `generate_manifest.py` | JSON d'animation et d'assets | [[Manifests]] |
| `pack_spritesheet.py` | assemblage des frames | [[Sprite-Sheets]] |
| `generate_preview.py` | GIF et contact sheets | [[Previews]] |
| `compare_master.py` | comparaison identité vs master | [[Validation-Identite]] |

## Config

`config/` centralise les valeurs qui ne doivent jamais être codées en dur :
palette ([[Palette-Officielle]]), dimensions ([[Canvas-96x96]]) et seuils
([[Seuils-Qualite]]).

---
Source : §11
