---
title: Touch Interactions
type: spec
tags: [engine, interaction, ux]
statut: actif
maj: 2026-08-20
---

# Touch Interactions

Phase 19.

## Zones tactiles

```text
head tap
body tap
tail tap
long press
```

## Réactions

| Zone | Réaction |
|------|----------|
| head tap | `pet` |
| tail orb tap | `curious` / `surprised` |
| body tap | `happy` |
| long press | réaction prolongée |

## Pourquoi des zones et non un tap global

Toucher l'orbe de queue et toucher la tête ne veulent pas dire la même
chose. Distinguer les zones est ce qui fait passer le personnage de
« sprite cliquable » à « créature qui répond ».

Les zones s'appuient sur les mêmes repères que [[Anchors]].

## Début et fin de la réaction

La réaction commence visuellement en moins de `120 ms`. Après l'action,
Chimi passe par un court `settle`, puis revient à `idle`. Il ne coupe jamais
directement vers la frame neutre ([[Living-Mascot-System]]).

## Animations mobilisées

`pet` (5 frames), `surprised` (4), `happy` (6) — voir [[Animations-MVP]].

---
Source : §126
