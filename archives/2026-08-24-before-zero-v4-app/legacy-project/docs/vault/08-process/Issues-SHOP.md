---
title: Issues SHOP
type: issues
tags: [process, issues, shop]
statut: actif
maj: 2026-08-20
---

# Famille SHOP — cosmétiques

9 issues.

| ID | Titre |
|----|-------|
| SHOP-001 | Item schema |
| SHOP-002 | First 4 head items |
| SHOP-003 | Face items |
| SHOP-004 | Neck items |
| SHOP-005 | Back items |
| SHOP-006 | Effects |
| SHOP-007 | Full outfit prototype |
| SHOP-008 | Preview |
| SHOP-009 | Equip / unequip |

## Ordre imposé par le contenu

Les **head items** viennent en premier : ils s'accrochent au seul anchor
`head` et ne demandent pas de redessiner le corps. Le full outfit
(`SHOP-007`) est un **prototype**, volontairement unique au MVP.

Voir [[Cosmetiques]].

## Dépendances

```text
ENGINE-008 (anchors)  →  requis
ENGINE-009 (layers)   →  requis
ENGINE-010 (equipment) → requis par SHOP-009
```

Voir [[Issues-ENGINE]].

## Nœuds de référence

[[Cosmetiques]] · [[Anchors]] · [[Layers]] · [[Previews]]

## Point d'arbitrage

L'ordre SHOP vs WEB est contesté entre §158 et §163/§197 :
voir [[DEC-002-Ordre-Web-Vs-Shop]].

---
Source : §155
