---
title: Pipeline hatch-pet
type: procedure
tags: [pipeline, generation, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Pipeline de génération

## Outil principal

Les candidats animés sont produits avec le skill officiel `hatch-pet`. Le
workflow accepte une référence existante ou une nouvelle description de
créature.

## Flux simple

```text
1. définir une intention courte
2. générer la base canonique du candidat
3. générer les états utiles
4. extraire et assembler les frames
5. produire sheet, contact sheet et GIFs
6. valider techniquement et visuellement
7. réparer, comparer ou changer de direction
```

Les détails internes du skill garantissent la géométrie et la transparence. La
documentation projet ne duplique pas toutes ses commandes.

## Entrées flexibles

- aucun visuel : partir d'une description ;
- une référence : la préserver ou s'en inspirer ;
- plusieurs références : combiner les qualités recherchées ;
- candidat existant : réparer uniquement les lignes faibles ;
- direction insatisfaisante : créer une autre créature.

## Sorties attendues

```text
spritesheet.webp
validation.json
contact-sheet.png
previews/*.gif
pet.json
```

Un manifest d'application peut ensuite préciser les vitesses et les usages.

Voir [[Cycle-Vie-Asset]], [[Retry-Et-Escalade]] et [[Human-Gates]].
