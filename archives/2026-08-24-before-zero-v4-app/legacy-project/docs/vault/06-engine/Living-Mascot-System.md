---
title: Système de mascotte vivante
type: spec
tags: [engine, animation, comportement, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Système de mascotte vivante

## Objectif

La mascotte doit paraître présente et réactive sans exiger une collection
figée de micro-animations.

## Base simple

Le moteur peut commencer uniquement avec les états fournis par le candidat
`hatch-pet` : repos, déplacement, salut, réaction, attente, travail et review.

```text
état de l'application
→ animation correspondante
→ action ponctuelle ou boucle
→ retour vers l'état neutre
```

Le candidat V2 contient déjà un clignement et plusieurs changements de posture
et d'expression. Aucun pack V1 n'est requis.

## Rythme vivant

- laisser de vraies pauses ;
- éviter de répéter toujours la même séquence ;
- ne pas changer d'état à chaque événement mineur ;
- utiliser `waiting`, `running` et `review` pour rendre le traitement lisible ;
- revenir proprement à `idle` après une action ponctuelle.

## Micro-animations optionnelles

Regard, oreille, queue, bouche ou lever peuvent être ajoutés plus tard si le
personnage paraît trop statique dans l'application. Ils peuvent aussi être
intégrés directement à une nouvelle version de `idle`.

On ne les produit pas pour satisfaire une liste : on les produit pour corriger
un manque visible.

## Évolution

Si la créature change, le comportement reste générique. Le nouveau manifest
indique les états disponibles et le moteur adapte son mapping.

## Validation en contexte

Observer une séquence suffisamment longue pour vérifier : pauses, variété,
lisibilité des états, absence de coupure et retour neutre. Les timings précis
sont réglés après intégration plutôt qu'imposés avant de voir le résultat.

Voir [[Animations-MVP]], [[Behavior-Engine]], [[Flame-Architecture]] et
[[Validation-Animation]].
