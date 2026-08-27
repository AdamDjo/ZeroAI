---
title: Architecture Flame
type: reference-conditionnelle
tags: [engine, flame, flutter]
statut: differe
maj: 2026-08-26
source_archive: legacy-project/docs/vault/06-engine/Flame-Architecture.md
---

# Architecture Flame

Flame n’est pas encore une dépendance du projet. Cette note définit comment l’utiliser si Flutter est confirmé.

## Composants envisagés

- `ZeroPetComponent` : rendu et animation courante ;
- `ZeroBehaviorController` : choix des états ;
- `ZeroLookController` : quantification vers 16 directions ;
- `ZeroLayerStack` : corps, traits, accessoires et effets ;
- `ZeroAssetRepository` : chargement des manifests et caches ;
- `ZeroSaveAdapter` : projection du domaine sauvegardé vers le runtime.

Le domaine de croissance et de génome reste en dehors des composants Flame. Flame affiche un état déjà décidé ; il ne devient pas la source de vérité produit.

Le choix sera pris après un prototype comparant simplicité, performance, accessibilité et intégration des écrans applicatifs.
