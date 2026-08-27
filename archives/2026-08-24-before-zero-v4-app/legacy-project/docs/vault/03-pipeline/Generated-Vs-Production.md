---
title: Generated vs Production
type: regle
tags: [pipeline, structure, critique]
statut: actif
maj: 2026-08-20
---

# Generated vs Production

## Deux zones strictement séparées

```text
assets/generated/    → tous les essais
assets/production/   → uniquement les assets acceptés
```

## La règle

> [!danger] L'application ne charge JAMAIS depuis `generated/`.

Aucune exception, y compris en développement. Un asset non validé qui
apparaît dans l'app fausse tout jugement sur le produit.

## Promotion

Le passage de `generated/` à `production/` :

- ne peut se faire qu'après réussite de tous les validateurs bloquants
  ([[Human-Gates]])
- s'accompagne de la mise à jour du sprite sheet, du manifest d'animation,
  du manifest d'assets et du changelog
- est refusé automatiquement au moindre échec ; aucune décision humaine
  n'est requise

## Pourquoi conserver `generated/`

Les essais rejetés documentent ce qui n'a pas marché : ils alimentent le
feedback de [[Retry-Et-Escalade]] et évitent de retenter les mêmes prompts.

Sauvegarde : [[Gouvernance-Visuelle]].

---
Source : §115, §116, §117
