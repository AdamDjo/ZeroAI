---
title: Touch interactions
type: source-verite
tags: [engine, touch, interaction]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/06-engine/Touch-Interactions.md
---

# Touch interactions

## Zones initiales

- tête/visor : regarde le point touché, puis réaction positive ;
- corps : `petting-reaction` ;
- cœur IA : pulse de traitement ou `review` ;
- orbe : curiosité, apprentissage ou `eating-data` ;
- balayage horizontal : regard puis déplacement dans la direction ;
- appui long : ouvre une interaction contextuelle, sans bloquer l’animation idle.

## Règles

- utiliser une hitbox cohérente avec la cellule courante ;
- donner un feedback immédiat, puis lancer l’animation ;
- éviter de relancer la même réaction à chaque événement de déplacement ;
- interrompre uniquement un état de priorité inférieure ;
- prévoir vibration et effets visuels désactivables ;
- respecter `reducedMotion` et les lecteurs d’écran.

Les regards utilisent les 16 poses des rangées 13 et 14. La deadzone centrale retombe sur `idle`.
