---
title: Sprite sheets
type: spec
tags: [pipeline, sprites, performance]
statut: actif
maj: 2026-08-24
---

# Sprite sheets

## Principe

L'application charge une sheet et son manifest plutôt qu'une collection de
GIFs indépendants. Les GIFs restent utiles pour la prévisualisation et la QA.

## Format hatch-pet actuel

```text
cellule   192 × 208
grille    8 × 9
atlas     1536 × 1872
format    WebP ou PNG avec alpha
```

Ce format s'applique aux packages `hatch-pet` actuels. Une évolution future est
possible si le manifest et le lecteur changent ensemble.

## Organisation

Un candidat peut utiliser une sheet unique tant que sa taille reste raisonnable.
Des packs séparés sont possibles plus tard si le chargement ou le nombre
d'animations le justifie.

## Validation

Cellules utilisées non vides, cellules inutilisées transparentes, aucune
coupure, dimensions valides et manifest cohérent.

Voir [[Manifests]], [[Performance]] et [[Human-Gates]].
