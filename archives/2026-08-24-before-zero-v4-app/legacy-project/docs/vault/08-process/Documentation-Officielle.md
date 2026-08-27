---
title: Documentation Officielle
type: reference
tags: [process, documentation, references]
statut: actif
maj: 2026-08-20
---

# Documentation officielle

> Toujours privilégier les sources officielles.

## Par outil

| Outil | Pages à consulter |
|-------|-------------------|
| PixelLab | documentation · Vibe Coding / MCP · API |
| Flame | Sprite Components · Images / Sprite Sheets · SpriteAnimationWidget · Particles |
| Pixelorama | Save and Export · Project · extension API si nécessaire |
| Playwright | Visual comparisons · Screenshots · Trace Viewer |

Voir [[Stack-Outils]] pour le rôle de chaque outil.

## Documents à conserver dans le repo

```text
ZERO_PRODUCT_ENGINEERING_BLUEPRINT.md
ZERO_AI_ASSET_FACTORY_MASTER_PLAN.md
design/ZERO_STYLE_BIBLE.md
design/zero_palette.json
design/reference/ZERO_MASTER_V1.png
```

Ces cinq fichiers sont les **sources de vérité** du repo. Le vault les
indexe et les explique, il ne les remplace pas — voir
[[Tracabilite-Source]].

## Première commande à un agent

```text
You are the implementation lead for Chimi.

Do not build the app.
Do not build the landing.
Do not generate production character art.

Implement only: PIPE-001 → PIPE-005

At the end return:
- summary
- files created
- commands
- test results
- blockers
- exact next issue
```

Puis, une fois PIPE-001→005 validées :

```text
Implement ART-001 only.
```

Et `ART-002 requires human approval` — **c'est volontaire**.

Voir [[Ordre-De-Developpement]] et [[Prompts-Bootstrap]].

## Note vault

Ce prompt d'origine demande de lire le master plan en entier. Avec le
vault, préférer [[Protocole-Agent]] : l'agent lit l'index et 1 à 3 nœuds,
pas les 50 Ko.

---
Source : §198, §199, §200, §201
