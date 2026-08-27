---
title: Seuils de qualité adaptatifs
type: spec
tags: [validation, seuils, candidat]
statut: actif
maj: 2026-08-24
---

# Seuils de qualité adaptatifs

## Invariants

Les erreurs de format, dimensions de package, alpha, cellules vides, coupures
et résidus de transparence sont bloquantes.

## Mesures adaptatives

Bbox, baseline, palette, amplitude et similarité d'identité sont évaluées par
rapport au candidat, à son style et à l'animation concernée. Un seuil du chat
V1 ne doit pas rejeter une nouvelle créature volontairement différente.

## Décision

```text
erreur technique → rejet ou réparation
mesure atypique → inspection visuelle
mouvement cassé → rejet même si les scores sont verts
nouvelle direction volontaire → nouvelle référence de candidat
```

Les seuils servent à détecter les anomalies, pas à choisir la direction
artistique.

Voir [[Validators]], [[Validation-Identite]] et [[Human-Gates]].
