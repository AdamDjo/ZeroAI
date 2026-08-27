---
title: Fallback PixelLab
type: procedure
tags: [pipeline, fallback, qa]
statut: archive
maj: 2026-08-24
---

# Fallback — quand PixelLab échoue

> Procédure historique. Le workflow actif utilise `hatch-pet` et
> [[Retry-Et-Escalade]].

Si une animation n'est pas assez cohérente, appliquer **dans l'ordre** :

```text
1. retry prompt
2. reduce motion
3. generate key poses
4. interpolate / compose
5. optional Pixelorama cleanup
```

## Règle

> [!danger] On ne change jamais tout le pipeline parce qu'UNE animation est
> difficile.

L'escalade s'arrête au niveau minimal qui résout le problème.

## Quand utiliser Pixelorama

Uniquement pour :

- correction exceptionnelle
- suppression de pixel
- alignement
- vérification de frame
- preview

Jamais comme étape obligatoire du pipeline ([[Stack-Outils]]).

## Lien avec le retry automatique

Les étapes 1–2 relèvent de [[Retry-Et-Escalade]]. Il n'existe plus de limite
fixe de trois tentatives ni d'état humain obligatoire.

Diagnostic préalable : [[Signaux-Derive]].

---
Source : §148, §149, §150
