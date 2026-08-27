---
title: Validation des dimensions
type: spec
tags: [validation, geometrie, manifest]
statut: actif
maj: 2026-08-24
---

# Validation des dimensions

Les dimensions attendues viennent du format déclaré par le candidat.

Pour le package `hatch-pet` actuel :

```text
cellule  192 × 208
atlas    1536 × 1872
```

Le fichier final doit respecter exactement son contrat. Les images sources et
les futurs formats peuvent utiliser d'autres dimensions avant normalisation.

Une nouvelle créature n'a pas besoin de tenir dans l'ancien canvas `96×96`.

Voir [[Canvas-96x96]], [[Sprite-Sheets]] et [[Manifests]].
