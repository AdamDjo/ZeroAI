---
title: Anchors
type: source-verite
tags: [assets, anchors, cosmetics]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/05-assets/Anchors.md
---

# Anchors

Les anchors sont stockés en coordonnées locales de cellule 192 × 208, par stade, animation et image.

## Noms minimums

- `headTop` : chapeau ou couronne ;
- `faceCenter` : lunettes ou effet visor ;
- `collarCore` : pendentif et feedback du cœur ;
- `back` : sac, cape ou ailes ;
- `tailOrb` : effet lié à l’orbe ;
- `ground` : ombre et particules de sol.

## Format

```json
{
  "schemaVersion": 1,
  "cell": {"width": 192, "height": 208},
  "stage": "adult",
  "animation": "idle",
  "frame": 0,
  "anchors": {
    "headTop": {"x": 96, "y": 24, "rotation": 0, "scale": 1}
  }
}
```

Les valeurs ci-dessus illustrent le format, pas une coordonnée approuvée. Les anchors réels seront extraits et validés sur les trois masters.
