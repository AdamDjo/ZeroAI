---
title: Anchors
type: spec
tags: [assets, anchors, composition]
statut: actif
maj: 2026-08-20
---

# Anchors

Points d'accroche optionnels sur le personnage, exprimés dans le repère du
candidat ([[Canvas-96x96]]).

## Les 5 anchors

```text
head
face
neck
back
tail_tip
```

## Format

```json
{
  "idle_01": {
    "head":     [48, 18],
    "face":     [48, 36],
    "neck":     [48, 52],
    "back":     [67, 53],
    "tail_tip": [82, 41]
  }
}
```

Un jeu d'anchors **par frame** : un accessoire doit suivre le mouvement,
sinon il glisse.

## Stratégie de génération

| Version | Méthode |
|---------|---------|
| V1 | définis à la main sur quelques frames, puis interpolés |
| V2 | outil visuel interne — cliquer les anchors |
| V3 | vision automatique |

Les anchors ne sont produits que si les accessoires en ont besoin. Leur nombre
de frames suit le manifest du candidat actif.

## Usage

Les anchors sont consommés par [[Cosmetiques]] (chaque item déclare son
`anchor`) et ordonnés par [[Layers]].

---
Source : §56, §57, §58
