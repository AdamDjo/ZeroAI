---
title: Conventions Nommage
type: spec
tags: [pipeline, conventions]
statut: actif
maj: 2026-08-20
---

# Conventions de Nommage

## Fichiers : snake_case

Toujours.

```text
zero_baby_idle_v01.png
zero_baby_happy_v01.png
head_cap_black_001.png
effect_data_lime_001.png
```

## IDs en base de données : UPPER_SNAKE_CASE

```text
HEAD_CAP_BLACK_001
```

> [!danger] Jamais de chemin comme identifiant
> ```text
> /assets/new/final/cap2.png   ❌
> ```
> Un chemin change. Un ID est permanent.

## Pourquoi des IDs permanents

Un item acheté par un utilisateur doit rester référencé même si le fichier
est régénéré, déplacé, ou re-packé dans une autre sprite sheet.

## Signal d'alerte

Un nom comme `zero_happy_hat_red_glasses_bag.png` signifie que le pipeline
compose les combinaisons **au mauvais endroit**. Elles doivent être
composées au runtime : [[Layers]], [[Anchors]], [[Perimetre-MVP]].

## Convention TypeScript (projet global)

Fichiers `kebab-case.ts` · Types `PascalCase` · fonctions `camelCase` ·
constantes `UPPER_SNAKE_CASE` · composants React `PascalCase.tsx`.

---
Source : §112, §113, §175
