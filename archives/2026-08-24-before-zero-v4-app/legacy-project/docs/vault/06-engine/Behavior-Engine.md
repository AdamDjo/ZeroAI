---
title: Behavior Engine
type: spec
tags: [engine, comportement, critique]
statut: actif
maj: 2026-08-20
---

# Behavior Engine

Phase 5. **Le moteur doit fonctionner localement. Le LLM n'est pas appelé
pour les mouvements aléatoires.**

Le moteur suit le modèle en couches de [[Living-Mascot-System]]. Le roll
ci-dessous ne remplace pas la respiration de base : il planifie uniquement
les micro-actions autonomes.

## Idle behavior — le roll

Toutes les quelques secondes, un tirage pondéré :

```json
{
  "nothing": 0.45,
  "blink": 0.18,
  "lookLeft": 0.08,
  "lookRight": 0.08,
  "earTwitch": 0.07,
  "tail": 0.06,
  "stretch": 0.04,
  "specialIdle": 0.03,
  "rare": 0.01
}
```

`nothing` à 0.45 est délibéré : un personnage qui bouge en permanence
paraît nerveux, pas vivant.

Les actions `lookLeft`, `lookRight`, `earTwitch` et `tail` utilisent les
clips courts de [[Living-Mascot-System]]. `stretch`, `specialIdle` et `rare`
restent désactivés tant que leurs clips n'existent pas en production.

## Jitter temporel

```text
JAMAIS   every 5 sec
TOUJOURS random 2.5–8.5 sec
```

> Le cerveau humain repère les répétitions très rapidement.

C'est la règle la plus facile à violer par inadvertance et la plus visible
à l'usage.

Le moteur conserve aussi les 5 dernières actions, applique les cooldowns et
évite la synchronisation blink/oreille/queue définis dans
[[Living-Mascot-System]].

## Personnalité → mouvement

```text
curiosity > 0.8   →  look · inspect · move · touch
energy    < 0.3   →  sit · stretch · sleep
```

L'état vit dans `zero_state.dart` ([[Flame-Architecture]]).

## Pourquoi local

Un roll toutes les ~5 s appelant un LLM, c'est un coût permanent, une
latence visible et une dépendance réseau pour respirer. Voir
[[Protocole-LLM-Animation]] et [[Principe-AI-First]].

## DoD

```text
[ ] pas d'appel LLM pour idle/blink/walk
[ ] intervalles aléatoires, jamais fixes
[ ] historique anti-répétition et cooldowns actifs
[ ] retour à idle avec une phase settle
[ ] micro-actions non synchronisées
```

Voir [[Definition-Of-Done]].

---
Source : §49, §50, §51, §52
