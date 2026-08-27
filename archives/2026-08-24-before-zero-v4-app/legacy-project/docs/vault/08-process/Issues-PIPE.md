---
title: Issues PIPE
type: issues
tags: [process, issues, pipeline]
statut: actif
maj: 2026-08-20
---

# Famille PIPE — outillage

12 issues. C'est la **première** famille à traiter : rien d'autre ne peut
être validé sans elle.

| ID | Titre | Contenu |
|----|-------|---------|
| PIPE-001 | Repository asset factory | Créer dossiers |
| PIPE-002 | Environment | Ajouter `.env.example` |
| PIPE-003 | PixelLab MCP smoke test | Tester génération temporaire |
| PIPE-004 | Image metadata inspector | `width` `height` `alpha` `bbox` `colors` |
| PIPE-005 | Asset validator V1 | Dimensions + alpha + bbox |
| PIPE-006 | Palette validator | Comparer palette |
| PIPE-007 | Baseline validator | Comparer bottom pixels |
| PIPE-008 | Quality report | JSON |
| PIPE-009 | Retry orchestrator | réparation ciblée et feedback |
| PIPE-010 | Sprite sheet packer | Assembler frames |
| PIPE-011 | Manifest generator | Créer JSON |
| PIPE-012 | Preview generator | GIF / contact sheet |

## Nœuds de référence

- structure → [[Arborescence-Repo]], [[Asset-Factory-Structure]]
- MCP → [[PixelLab-MCP]]
- validateurs → [[Validators]], [[Seuils-Qualite]]
- retry → [[Retry-Et-Escalade]]
- packing → [[Sprite-Sheets]], [[Manifests]]
- previews → [[Previews]]

## Rappel sécurité

`.env.example` contient `PIXELLAB_API_KEY=` **vide**. Le `.env` réel reste
gitignoré : ne jamais committer les clés API.

## DoD

Voir [[Definition-Of-Done]] — section issue PIPE.

---
Source : §152
