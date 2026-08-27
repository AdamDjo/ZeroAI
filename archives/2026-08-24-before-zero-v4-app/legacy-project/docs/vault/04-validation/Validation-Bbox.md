---
title: Validation de la silhouette utile
type: spec
tags: [validation, geometrie, bbox]
statut: actif
maj: 2026-08-24
---

# Validation de la silhouette utile

La bounding box sert à repérer une coupure, un débordement ou un changement de
taille accidentel. Elle n'impose pas les coordonnées d'un ancien chat.

## Contrôle

- silhouette entièrement dans la cellule ;
- marges suffisantes pour le mouvement ;
- taille cohérente entre les frames d'une même boucle ;
- variation autorisée pour saut, course ou pose volontairement large.

Une différence entre deux candidats est normale. Une variation non voulue au
milieu d'une boucle signale un défaut.

Voir [[Validation-Animation]] et [[Validation-Baseline]].
