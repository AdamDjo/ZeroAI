---
title: Issues BREED
type: issues
tags: [process, issues, breeding, differe]
statut: differe
maj: 2026-08-20
---

# Famille BREED — reproduction

6 issues. **Plus tard** — explicitement hors MVP dans le plan source.

| ID | Titre |
|----|-------|
| BREED-001 | Trait schema |
| BREED-002 | Trait renderer |
| BREED-003 | Parent inheritance |
| BREED-004 | Mutations |
| BREED-005 | Child preview |
| BREED-006 | Child creation |

## Prérequis bloquants

```text
[ ] master stable
[ ] layers stables
[ ] accessories stables
[ ] plusieurs traits visuels disponibles
```

Le dernier point est le vrai verrou : sans plusieurs variantes de traits,
`BREED-003` n'a rien à faire hériter.

## Ne pas confondre

`BREED-002` (trait renderer) réutilise la composition de
[[Layers]] et [[Anchors]] — ce n'est pas un second moteur de rendu.

## Nœud de référence

[[Breeding]]

---
Source : §157, §73
