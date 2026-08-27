---
title: Architecture Globale
type: concept
tags: [produit, architecture]
statut: actif
maj: 2026-08-20
---

# Architecture Globale

```mermaid
flowchart TD

USER[Human Creative Director]
AGENT[Codex / Claude / Gemini]
MCP[PixelLab MCP]
API[PixelLab API]
FACTORY[Asset Factory]
VALIDATOR[Automated Validators]
MASTER[MASTER + Style Bible]
PRODUCTION[Production Assets]
FLAME[Flame Engine]
FLUTTER[Flutter App]
WEB[Landing]

USER --> AGENT
MASTER --> AGENT
AGENT --> MCP
AGENT --> API
MCP --> FACTORY
API --> FACTORY
FACTORY --> VALIDATOR
VALIDATOR -->|Accepted| PRODUCTION
VALIDATOR -->|Rejected| AGENT
PRODUCTION --> FLAME
FLAME --> FLUTTER
PRODUCTION --> WEB
```

## Lecture

La boucle critique est `FACTORY → VALIDATOR → AGENT` : un asset rejeté
retourne à l'agent avec le feedback, jamais directement en production.
Voir [[Retry-Et-Escalade]].

`MASTER` alimente l'agent mais n'est jamais modifié par lui :
[[Regle-Master-Immuable]].

Nœuds liés : [[Pipeline-Generation]], [[Validators]], [[Cycle-Vie-Asset]]

---
Source : §196
