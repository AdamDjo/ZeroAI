---
title: Protocole LLM → Animation
type: protocole
tags: [engine, llm, contrat, critique]
statut: actif
maj: 2026-08-20
---

# Protocole LLM → Animation

Phase 20. Le backend retourne des **événements structurés**.

## Contrat

```json
{
  "message": "Je vais m'en souvenir !",
  "emotion": "happy",
  "animation": "learning",
  "memoryCreated": true
}
```

## Mapping côté app

```text
happy     →  happy
learning  →  eat_data / learning
curious   →  thinking
tired     →  sleep
```

La table de correspondance vit dans l'app, pas dans le LLM.

## Règle absolue

Le LLM ne doit **jamais** retourner :

```text
frame 1
frame 2
frame 3
```

> Il choisit un **état sémantique**, pas l'animation détaillée.

## Pourquoi

- le LLM ne connaît ni le frame budget ni les sheets ([[Sprite-Sheets]])
- une animation renommée ou re-timée casserait tous les prompts
- l'app doit rester jouable hors ligne pour les états courants
  ([[Behavior-Engine]])

La frontière est nette : **le LLM décide de l'intention, l'engine décide
des pixels.**

## Ce qui ne passe jamais par le LLM

```text
idle · blink · walk
```

Voir [[Behavior-Engine]] et [[Principe-AI-First]].

## Cas signature — eat_data

```text
MANGUE → pixels → tail orb → glow → Chimi happy → Memory created
```

Assets requis :

```text
zero_baby_eat_data
effect_data_particle
effect_memory_created
```

Voir [[Animations-MVP]].

---
Source : §127, §128, §129, §130, §131, §132, §133
