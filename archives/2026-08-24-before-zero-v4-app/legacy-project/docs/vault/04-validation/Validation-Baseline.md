---
title: Validation de la continuité au sol
type: spec
tags: [validation, geometrie, animation]
statut: actif
maj: 2026-08-24
---

# Validation de la continuité au sol

La baseline est évaluée relativement à chaque animation. Il n'existe plus de
coordonnée universelle comme `Y=86`.

## Attendu

- repos et boucles stationnaires sans saut involontaire ;
- départ et arrivée compatibles avec l'état neutre ;
- déplacement vertical autorisé pour les actions qui le demandent ;
- transition visuellement propre entre deux états.

La contact sheet aide à comparer les poses ; le GIF révèle le jitter réel.

Voir [[Validation-Bbox]], [[Validation-Animation]] et [[Animations-MVP]].
