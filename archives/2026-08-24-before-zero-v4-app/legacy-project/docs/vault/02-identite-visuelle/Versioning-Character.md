---
title: Versionnement des candidats
type: procedure
tags: [identite, versioning, iteration]
statut: actif
maj: 2026-08-24
---

# Versionnement des candidats

## Principe

Ne pas écraser silencieusement un candidat existant. Créer une nouvelle version
permet de comparer, revenir en arrière et comprendre ce qui a changé.

```text
candidate-v1
candidate-v2
candidate-v3
```

Une nouvelle version peut modifier une animation, le style ou la créature
complète. Aucune RFC formelle n'est nécessaire pendant l'exploration.

## Trace minimale

```json
{
  "version": "candidate-v3",
  "workflow": "hatch-pet",
  "basedOn": "candidate-v2",
  "change": "nouvelle créature et idle plus expressif"
}
```

Lorsqu'une version est réellement publiée, conserver son package, son manifest
et sa QA afin de permettre un rollback.

Voir [[Cycle-Vie-Asset]], [[Gouvernance-Visuelle]] et [[Manifests]].
