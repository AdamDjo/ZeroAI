---
title: Manifests d'animation
type: spec
tags: [pipeline, manifest, json]
statut: actif
maj: 2026-08-24
---

# Manifests d'animation

Le manifest décrit le candidat réellement livré. Il n'impose pas une liste
d'états commune à toutes les créatures.

## Exemple V2

```json
{
  "version": "candidate-v2",
  "sheet": "spritesheet.webp",
  "cell": { "width": 192, "height": 208 },
  "animations": {
    "idle": { "row": 0, "frames": 6, "fps": 3, "loop": true },
    "runningRight": { "row": 1, "frames": 8, "fps": 10, "loop": true },
    "runningLeft": { "row": 2, "frames": 8, "fps": 10, "loop": true },
    "waving": { "row": 3, "frames": 4, "fps": 6, "loop": false }
  }
}
```

Les lignes restantes suivent le même format. Les vitesses sont des valeurs de
départ à régler dans l'application.

## Règles

- le manifest correspond exactement à la sheet du candidat ;
- toute ligne remplacée met à jour sa version ;
- l'application ne suppose pas qu'un ancien état existe encore ;
- les anciens manifests restent disponibles pour le retour arrière.

`pet.json` décrit le package Codex. Le manifest d'application décrit la lecture
des animations ; ce sont deux responsabilités distinctes.

Voir [[Sprite-Sheets]], [[Flame-Architecture]] et [[Cycle-Vie-Asset]].
