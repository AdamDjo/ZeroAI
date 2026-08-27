---
title: ÉTAT ACTUEL
type: etat
tags: [index, suivi, zero, v4, baby]
statut: actif
maj: 2026-08-26
---

# État actuel

## Validé

- Zéro V4 est la source de vérité visuelle.
- Le modèle actuel est officiellement le stade **adulte**.
- Le stade **bébé** possède désormais son propre master et son propre atlas complet validé.
- Les packages adulte et bébé contiennent chacun 13 animations et 16 directions de regard.
- Chaque atlas app mesure 1536 × 3120, sur une grille de 8 × 15 cellules de 192 × 208.
- Le package adulte se trouve dans `assets/v4/final/`.
- Le package bébé se trouve dans `assets/evolution/baby/final/`.
- La version Codex V2 est installée séparément dans `~/.codex/pets/zero/`.

## À produire

- un master canonique **adolescent** ;
- un atlas complet et validé pour le stade adolescent ;
- les calques et traits nécessaires au futur breeding.

## Tooling installé

- `save-systems` : sauvegardes, versions et migrations ;
- `game-ai` : machine d’états et comportement vivant ;
- `procedural-gen` : graines et sélection déterministe de traits ;
- `hatch-zero-evolution` : contrat des trois âges, génomes, normalisation des rangées supplémentaires et assemblage 8×15.

Le skill spécialisé a été validé sur un breeding reproductible et sur l’atlas adulte existant. Il a détecté puis corrigé une cellule `idle` fantôme hors contrat.

## Prochaine production

1. générer et approuver `ZERO_ADOLESCENT_MASTER_V1` ;
2. produire puis valider son atlas complet ;
3. intégrer le sélecteur de stade au runtime de l’app ;
4. créer le premier catalogue de traits de breeding.

Voir [[ZERO-BABY-ATLAS]], [[SKILLS-ET-OUTILS]], [[EVOLUTION-STAGES]] et [[BREEDING]].
