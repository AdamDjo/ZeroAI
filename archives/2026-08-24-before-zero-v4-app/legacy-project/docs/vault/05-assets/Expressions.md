---
title: Expressions adaptatives
type: spec
tags: [assets, expressions, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Expressions adaptatives

Une planche d'expressions séparée est optionnelle. `hatch-pet` peut tester
directement le visage et la posture dans les états animés du candidat.

## Quand produire une planche

- le visage dérive entre plusieurs animations ;
- la personnalité reste difficile à lire ;
- plusieurs directions d'expression doivent être comparées rapidement ;
- une émotion importante manque au pack animé.

## Contenu libre

Le nombre et le type d'expressions dépendent de la créature et du produit. Une
liste comme `neutral`, `happy`, `curious` ou `sad` est un point de départ, pas
un contrat.

## Validation

Les expressions d'un candidat doivent rester cohérentes avec sa propre base
canonique. Une nouvelle créature peut avoir un système de visage entièrement
différent.

Il n'existe pas de gate séparée obligatoire avant de produire les animations.

Voir [[Animations-MVP]], [[Validation-Identite]] et [[Human-Gates]].
