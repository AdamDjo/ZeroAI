---
title: Issues ENGINE
type: issues
tags: [process, issues, engine]
statut: actif
maj: 2026-08-20
---

# Famille ENGINE — app Flutter / Flame

12 issues.

| ID | Titre |
|----|-------|
| ENGINE-001 | Flame setup |
| ENGINE-002 | ZeroComponent |
| ENGINE-003 | Animation controller |
| ENGINE-004 | State machine |
| ENGINE-005 | Tap interactions |
| ENGINE-006 | Behavior Engine |
| ENGINE-007 | Personality modifiers |
| ENGINE-008 | Anchor system |
| ENGINE-009 | Layer renderer |
| ENGINE-010 | Equipment |
| ENGINE-011 | Particles |
| ENGINE-012 | Backend animation protocol |

## Sous-groupes

```text
001-004  socle de rendu et d'état
005-007  vie et interaction
008-010  composition (anchors, layers, équipement)
011-012  effets et intégration backend
```

`008-010` sont les prérequis techniques de la boutique
([[Issues-SHOP]]) : un item ne peut pas être équipé sans anchor system ni
layer renderer.

## Nœuds de référence

[[Flame-Architecture]] · [[Behavior-Engine]] · [[Touch-Interactions]] ·
[[Anchors]] · [[Layers]] · [[Protocole-LLM-Animation]]

## Vérification clé

`ENGINE-006` doit tourner **sans appel LLM**. Voir [[Definition-Of-Done]].

---
Source : §154
