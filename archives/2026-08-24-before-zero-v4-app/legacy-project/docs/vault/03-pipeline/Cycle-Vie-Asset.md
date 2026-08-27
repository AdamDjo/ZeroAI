---
title: Cycle de vie d'un candidat
type: spec
tags: [pipeline, lifecycle, iteration]
statut: actif
maj: 2026-08-24
---

# Cycle de vie d'un candidat

```text
IDEA
→ GENERATING
→ CANDIDATE
→ VALIDATING
→ REPAIR / COMPARABLE
→ SELECTED
→ PRODUCTION
```

## Principe

`COMPARABLE` signifie que le candidat est propre et peut être évalué. Cela ne
signifie pas qu'il est définitif.

Depuis `REPAIR`, on peut corriger une animation, changer le style ou créer une
nouvelle créature. Depuis `SELECTED`, on peut encore revenir à un candidat
précédent tant que la version finale n'est pas publiée.

## Métadonnées minimales

```json
{
  "id": "candidate-v2",
  "workflow": "hatch-pet",
  "reference": "canonical-base.png",
  "status": "comparable"
}
```

## Stockage

Les essais restent dans leur dossier de run. Seule une version sélectionnée et
validée est copiée dans la zone chargée par l'application.

Voir [[Generated-Vs-Production]], [[Retry-Et-Escalade]] et
[[Gouvernance-Visuelle]].
