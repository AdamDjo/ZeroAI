---
title: MOC Engine
type: moc
tags: [moc, engine, flame, flutter]
statut: actif
maj: 2026-08-20
---

# MOC — Engine

Ce qui fait **vivre** les assets dans l'app. En amont : [[MOC-Assets]].

## Nœuds

- [[Flame-Architecture]] — structure du code
- [[Behavior-Engine]] — le cerveau local
- [[Living-Mascot-System]] — présence, timing et anti-répétition
- [[Touch-Interactions]] — réactions au toucher
- [[Protocole-LLM-Animation]] — quand (et quand ne pas) appeler le LLM

## Prototype minimal — phase 4

Avant d'ajouter des animations, un seul écran :

```text
┌──────────────────────┐
│                      │
│         ZÉRO         │
│                      │
│   [Happy] [Think]    │
│                      │
└──────────────────────┘
```

## Critères d'acceptation du prototype

```text
au lancement     →  idle
tap sur Chimi     →  happy
bouton Think     →  thinking
après animation  →  settle → idle
```

Le retour vers `idle` est la règle d'état par défaut, mais il passe toujours
par une transition `settle` perceptuellement continue.

## Règle cardinale

Le LLM n'est **jamais** appelé pour les mouvements aléatoires
([[Behavior-Engine]], [[Principe-AI-First]]).

---
Source : §45, §46, §47, §48, §49-§52
