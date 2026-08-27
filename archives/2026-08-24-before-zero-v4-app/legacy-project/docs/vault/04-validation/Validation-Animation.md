---
title: Validation Animation
type: spec
tags: [validation, animation]
statut: actif
maj: 2026-08-20
---

# Validation — Animation

Fichier : `validate_animation.py`

## Contrôles spécifiques aux animations

```text
frame count
timing
loop seam
baseline
bbox jitter
presence anti-repetition (capture 60 s)
reaction latency
palette consistency
```

## Exemple — validation d'`idle`

```text
frame count = 6
dimensions  = 96×96
baseline    stable
bbox        stable
palette     stable
```

Puis générer un **GIF preview** ([[Previews]]) comme artefact d'audit.

Le GIF d'un clip ne suffit pas à valider une mascotte vivante. Une capture
de 60 secondes du scheduler complet doit aussi passer les critères de
[[Living-Mascot-System]].

## Loop seam

Pour une animation marquée `loop: true`, la dernière frame doit enchaîner
proprement sur la première. Une couture visible sur `idle` est
immédiatement perceptible puisque c'est l'état par défaut du personnage.

## Bbox jitter

Différent de [[Validation-Bbox]] : ici on mesure la **variation** de la
bbox d'une frame à l'autre, pas l'écart au master. Un jitter élevé donne
une impression de tremblement.

## Frame counts attendus

Voir le budget par animation dans [[Animations-MVP]].

## Après validation

Le builder produit sheet, manifest, GIF et rapport. La promotion est
automatique uniquement si le rapport vaut `passed`; tout clip en échec est
conservé dans `generated/rejected/` ([[Human-Gates]]).

---
Source : §38, §141
