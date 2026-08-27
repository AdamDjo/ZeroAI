---
title: Validation Transparence
type: spec
tags: [validation, alpha]
statut: actif
maj: 2026-08-20
---

# Validation — Transparence

## Règle

Le background doit être transparent pour le personnage.
Vérifier la présence d'un **canal alpha**.

Si l'image contient un fond opaque :

```text
REJECT
```

## Statut

**Bloquant / mandatory.**

## Pourquoi

Le personnage est composé au runtime au-dessus d'un environnement et sous
des accessoires ([[Layers]]). Un fond opaque rend la composition
impossible et masque les couches inférieures.

Même exigence pour les [[Cosmetiques]] : `transparent background`,
`no character body`.

---
Source : §17, §23, §62
