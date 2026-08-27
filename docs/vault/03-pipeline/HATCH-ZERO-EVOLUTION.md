---
title: Hatch Zéro Evolution
type: source-verite
tags: [pipeline, skill, evolution, breeding]
statut: actif
maj: 2026-08-26
---

# Hatch Zéro Evolution

Skill installé : `~/.codex/skills/hatch-zero-evolution/`.

## Responsabilités

- créer et valider les masters bébé, adolescent et adulte ;
- exécuter Hatch Pet V2 pour les 9 états standards et 16 regards ;
- normaliser `sleeping`, `happy`, `petting-reaction` et `eating-data` ;
- assembler et vérifier l’atlas app 8 × 15 ;
- valider les génomes ;
- produire un enfant déterministe à partir de deux parents et d’une graine.

## Cycle recommandé

1. approuver le master du stade ;
2. produire les animations standards ;
3. produire les quatre rangées supplémentaires ;
4. assembler l’atlas ;
5. exécuter QA automatique et inspection visuelle ;
6. publier le package final avec son statut QA et les éventuelles décisions visuelles documentées.

Le cycle reste itératif : un master, une animation ou une créature peuvent être remplacés tant que leur version, leur QA et leurs manifests sont mis à jour ensemble. Les rangées sont des briques remplaçables ; l’objectif est la cohérence finale, pas de figer prématurément la direction artistique.

## Garde-fous

- le bébé et l’adolescent ne sont pas des adultes redimensionnés ;
- quatre membres anatomiques exactement ; une occlusion naturelle est autorisée ;
- aucune cellule fantôme ;
- signatures visor, cœur et orbe conservées ;
- aucune génération d’image lors d’une naissance runtime ;
- même graine + mêmes parents + même catalogue = même génome.

## État du bébé

Le pipeline complet a été exécuté sur `assets/evolution/baby/final/` : master distinct, Hatch Pet V2 8 × 11, quatre rangées app, assemblage 8 × 15, 13 GIFs, QA structurelle et inspection visuelle indépendante.
