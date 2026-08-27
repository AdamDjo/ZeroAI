---
title: Géométrie des candidats
type: spec
tags: [identite, geometrie, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Géométrie des candidats

Le nom historique de cette page est conservé. Le canvas `96×96` appartient à
l'ancien pipeline et n'est plus une contrainte générale.

## Contrat hatch-pet actuel

```text
cellule       192 × 208
atlas         1536 × 1872
grille        8 × 9
```

Ces dimensions garantissent la compatibilité du package `hatch-pet`. Le dessin
à l'intérieur de la cellule peut changer de taille, de proportions ou de
silhouette selon le candidat.

## Repères

La baseline et les marges doivent rester cohérentes dans une animation donnée.
Elles peuvent évoluer entre deux candidats ou lorsqu'une action exige un saut,
une course ou une pose plus large.

Les validateurs cherchent les coupures, les débordements et le jitter ; ils
n'imposent pas les anciennes coordonnées du chat V1.

Voir [[Validation-Dimensions]], [[Validation-Bbox]] et [[Animations-MVP]].
