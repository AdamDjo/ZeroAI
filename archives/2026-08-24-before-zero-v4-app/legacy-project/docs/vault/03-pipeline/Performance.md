---
title: Performance
type: spec
tags: [pipeline, performance, mobile]
statut: actif
maj: 2026-08-20
---

# Performance

## Sprite sheets

Préférables à une multitude de fichiers, tant que cela reste raisonnable.
Ne pas créer une texture géante contenant tout le jeu.
Voir [[Sprite-Sheets]].

## Préchargement — écran Home

Précharger :

```text
core
current outfit
common particles
```

## Lazy load — boutique

```text
preview items
```

Les items non possédés ne sont chargés qu'à l'affichage de leur aperçu.

## Cibles QA mobile

```text
iOS
Android
60fps target
low-end device check
memory
sprite loading
```

Checklist complète : [[QA-Checklists]].

## Coût de génération

L'économie ne se joue pas qu'au runtime : voir [[Quand-Utiliser-Quoi]] et
[[Perimetre-MVP]] pour éviter les combinaisons pré-rendues.

---
Source : §143, §144, §146, §147, §191
