---
title: Manifests
type: source-verite
tags: [pipeline, manifest, runtime]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/03-pipeline/Manifests.md
---

# Manifests

## Package final minimal

- `spritesheet.webp` ;
- `pet.json` ;
- master et base canonique ;
- `stage.json` pour un stade d’évolution ;
- `asset-manifest.json` ;
- dossier `qa/`.

## `pet.json`

Il définit l’identifiant du pet, le chemin de l’atlas, la géométrie, les animations, les durées, les boucles et les 16 directions. Le runtime ne doit pas dupliquer ces valeurs en dur.

## Extension de croissance

Chaque futur package ajoute au minimum :

```json
{
  "schemaVersion": 1,
  "archetype": "zero-cat",
  "stage": "baby",
  "assetVersion": 1,
  "atlasContract": "zero-app-8x15-v1"
}
```

Une modification incompatible augmente la version de schéma et fournit une migration de sauvegarde.

Le package bébé actif respecte ce contrat dans `assets/evolution/baby/final/`. Son `asset-manifest.json` contient les empreintes SHA-256 des fichiers runtime et ses rapports QA conservent la dérogation directionnelle approuvée par le propriétaire du produit.
