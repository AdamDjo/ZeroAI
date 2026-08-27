---
title: PixelLab MCP
type: procedure
tags: [pipeline, mcp, setup]
statut: actif
maj: 2026-08-20
---

# PixelLab MCP

## Configuration

PixelLab fournit un serveur MCP pour les assistants de développement.
À configurer dans : Claude Code · Codex CLI · Gemini CLI · Cursor.

## Secrets

> [!danger] Ne jamais committer les clés API.

Créer `.env.example` :

```text
PIXELLAB_API_KEY=
```

Le vrai `.env` reste ignoré par Git.

## Smoke test (PIPE-003)

Première tâche à demander à l'agent :

```text
Connect to PixelLab MCP.

Do not create production assets yet.

Generate one temporary 96x96 pixel-art cat test image
with transparent background.

Save it to:
tools/asset_factory/output/mcp_test.png

Then verify that:
- the file exists
- it is readable
- its dimensions are reported
- alpha channel is detected

Do not modify application code.
```

## Critères d'acceptation

```text
MCP accessible
asset created
asset downloaded
validator can read it
```

## Si les credentials manquent

> [!warning] Ne pas simuler une génération réussie.
> Construire le pipeline autour d'une **fixture de test locale** et
> signaler clairement que le smoke test MCP est en attente de credentials.

Voir [[Issues-PIPE]] pour l'enchaînement, [[Prompts-Bootstrap]] pour le
prompt de démarrage complet.

---
Source : §12, §13, §200
