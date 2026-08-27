---
title: Git Strategy
type: spec
tags: [pipeline, git]
statut: actif
maj: 2026-08-20
---

# Git Strategy

## Branches proposées par le master plan

```text
main
develop
art/zero-master
art/zero-idle
feature/zero-engine
feature/zero-equipment
feature/web-hero
```

## Règles projet (prioritaires)

> [!important] Ces règles priment sur les exemples ci-dessus.
> - Jamais de commit direct sur `main` ou `develop`
> - Toujours créer **l'issue avant la branche**
> - Nommage préfixé par le numéro d'issue :
>   `feature/<n>-<description>`, `fix/<n>-<description>`
> - PR fermant l'issue via `Closes #<n>`

### Destination des PR

| Branche | Cible |
|---|---|
| `feature/*` | `develop` |
| `fix/*` | `develop` |
| `release/*` | `main` |
| `hotfix/*` | `main` ET `develop` |

### Format de commit

```text
type(scope): résumé court

Explication détaillée si nécessaire (quoi + pourquoi).
```

Types : `feat` · `fix` · `chore` · `docs` · `refactor` · `test`

> [!note] Réconciliation
> Les branches `art/*` du master plan n'existent pas dans la stratégie
> projet. Les traiter comme des `feature/<n>-art-*` rattachées à une issue
> ART. Voir [[Issues-ART]].

## Git LFS

Si les sources graphiques deviennent lourdes, utiliser Git LFS.
**Pas obligatoire immédiatement.**

Candidats naturels : `art-source/`, `assets/generated/`.

---
Source : §110, §111 + règles projet
