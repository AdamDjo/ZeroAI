---
title: Arborescence Repo
type: spec
tags: [pipeline, structure]
statut: actif
maj: 2026-08-20
---

# Arborescence Repo

```text
zero/
├── apps/
│   ├── mobile/
│   └── landing/
│
├── backend/
│
├── art-source/
│
├── assets/
│   └── zero/
│
├── design/
│   ├── reference/
│   └── prompts/
│
├── tools/
│   └── asset_factory/
│
├── tests/
│
└── docs/
```

## Zones sensibles

| Dossier | Règle |
|---|---|
| `design/reference/` | contient le master + son checksum — [[Regle-Master-Immuable]] |
| `design/prompts/` | prompts versionnés, jamais dans le code |
| `assets/generated/` | tous les essais — l'app ne charge JAMAIS d'ici |
| `assets/production/` | uniquement les assets acceptés |
| `tools/asset_factory/` | détail : [[Asset-Factory-Structure]] |

Séparation generated/production : [[Generated-Vs-Production]].

## Documents à conserver dans le repo

```text
ZERO_PRODUCT_ENGINEERING_BLUEPRINT.md
ZERO_AI_ASSET_FACTORY_MASTER_PLAN.md
design/ZERO_STYLE_BIBLE.md
design/zero_palette.json
design/reference/ZERO_MASTER_V1.png
```

Ce vault vit dans `docs/vault/`.

---
Source : §10, §198
