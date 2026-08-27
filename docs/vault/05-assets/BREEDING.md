---
title: Breeding
type: spec
tags: [assets, breeding, genome, procedural]
statut: planifie
maj: 2026-08-26
---

# Breeding

## Principe

Une naissance produit un **génome**, pas un nouvel appel de génération d’image. Le rendu final assemble des traits approuvés et compatibles avec le stade.

## Génome minimal versionné

```json
{
  "schemaVersion": 1,
  "id": "zero-child-example",
  "archetype": "zero-cat",
  "stage": "baby",
  "genes": {
    "bodyPalette": "cream",
    "earShape": "triangle-soft",
    "earPattern": "lime-inner-right",
    "visorEyeStyle": "lime-round",
    "tailType": "black-curved",
    "orbStyle": "lime-core",
    "marking": "none"
  },
  "seed": "deterministic-seed",
  "lineage": {
    "parentA": "zero-parent-a",
    "parentB": "zero-parent-b"
  }
}
```

## Séparation des responsabilités

- La génération crée les **familles morphologiques** et les pièces officielles.
- Le breeding choisit les traits avec une graine déterministe.
- Le runtime compose palettes, marques et accessoires.
- Un cache peut préassembler une texture pour accélérer l’affichage.

## Quand régénérer

Une nouvelle génération n’est nécessaire que si un trait change réellement la silhouette ou l’anatomie : forme d’oreille, corps, queue ou nouvelle espèce. Une couleur, une marque, un visor ou un accessoire doit utiliser des calques ou des palettes.

## Prérequis

- trois masters de croissance validés ;
- schéma `PetGenome` versionné ;
- bibliothèque de traits ;
- anchors cohérents ;
- tests de déterminisme et de compatibilité ;
- sauvegarde migrable.

Le schéma exécutable est documenté dans le skill `hatch-zero-evolution`, référence `genome-schema.md`.
