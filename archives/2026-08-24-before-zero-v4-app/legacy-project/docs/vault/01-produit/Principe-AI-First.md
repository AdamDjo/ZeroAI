---
title: Principe AI-First
type: concept
tags: [produit, pipeline]
statut: actif
maj: 2026-08-20
---

# Principe AI-First

On ne travaille pas comme une équipe graphique traditionnelle. On construit
un **pipeline AI-first**.

## La chaîne

```text
TOI (direction créative)
 ↓
CODEX / CLAUDE / GEMINI
 ↓
PIXELLAB MCP / API
 ↓
ASSETS GÉNÉRÉS
 ↓
VALIDATION AUTOMATIQUE
 ↓
ACCEPT / REJECT
 ↓
SPRITE SHEETS
 ↓
FLAME → FLUTTER → APP MOBILE
```

## Ce que tu ne dois plus faire

- dessiner pixel par pixel
- animer manuellement chaque frame
- ranger les fichiers à la main
- créer les sprite sheets à la main
- renommer les fichiers
- vérifier chaque dimension
- intégrer chaque asset manuellement

## Ton rôle réel

1. choisir
2. valider
3. dire ce que tu veux modifier
4. décider de la direction créative

## Le workflow idéal

Tu dois pouvoir écrire :

> Le mouvement de la queue est trop rapide.

Et l'agent doit enchaîner seul :

```text
find current animation → create issue → regenerate → validate
→ preview → ask approval
```

Sans jamais te demander de retoucher des pixels.

## Ce que l'IA peut faire à ta place

génération · variantes · animations · organisation · validation technique ·
intégration · tests · screenshots · comparaison · manifests · export

## Ce qu'elle ne doit pas décider seule

identité finale · silhouette finale · personnalité de marque · changement
majeur · monétisation agressive · direction créative

Cadre contraignant : [[Gouvernance-Visuelle]].

---
Source : §0, §77, §203, §204, §205, §206, §207
