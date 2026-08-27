---
title: Behavior engine
type: source-verite
tags: [engine, behavior, ai, animation]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/06-engine/Behavior-Engine.md
---

# Behavior engine

Le comportement vivant vient d’une machine d’états locale, pas d’une animation aléatoire permanente.

## Entrées

- activité de l’utilisateur ;
- énergie, humeur et faim de données ;
- heure et durée depuis la dernière interaction ;
- événement produit ;
- position du toucher ou du pointeur ;
- préférence `reducedMotion`.

## Priorités

1. état critique ou système ;
2. réaction directe de l’utilisateur ;
3. action métier ;
4. humeur contextuelle ;
5. micro-animation idle.

## Mapping initial

| Contexte | Animation |
|---|---|
| repos | `idle` |
| attente | `waiting` |
| déplacement | `running`, `running-left`, `running-right` |
| succès social | `happy` ou `waving` |
| caresse | `petting-reaction` |
| apprentissage | `eating-data` |
| sommeil | `sleeping` |
| erreur | `failed` |
| inspection | `review` |

Les transitions utilisent des règles pondérées et un délai minimum pour éviter le clignotement d’état. Le skill `game-ai` sert de référence d’implémentation.
