---
title: Cosmétiques
type: spec
tags: [assets, cosmetiques, boutique]
statut: actif
maj: 2026-08-20
---

# Cosmétiques

Phase 8. **Ne pas créer les vêtements complexes au départ.**

## Premier pack boutique — 14 items

| Slot | Items |
|------|-------|
| Head | `cap_black` · `beanie_lime` · `explorer_hat` · `pixel_crown` |
| Face | `round_glasses` · `pixel_glasses` · `visor` |
| Neck | `scarf` · `medal` |
| Back | `explorer_bag` · `cape` |
| Effects | `data_spark` · `memory_spark` |
| Full outfit | `hoodie_black` |

## Pourquoi les chapeaux d'abord

Ils s'attachent trivialement au point `head` ([[Anchors]]) et **ne
demandent pas de redessiner le corps entier**. Meilleur ratio
valeur/effort du pack.

## Règle du prompt accessoire

```text
Create ONLY the requested accessory.
- transparent background
- designed for Chimi's head anchor
- no character body
- no redesign
- limited official palette
- no anti-aliasing
- simple silhouette
```

L'accessoire est généré **seul**, jamais sur le personnage : le master
n'est pas modifié ([[Regle-Master-Immuable]]).

## Preview

L'Asset Factory produit automatiquement `cap_black_preview.png` montrant
`Chimi + cap` — **sans modifier le master**. Voir [[Previews]].

## Manifest item

```json
{
  "id": "HEAD_CAP_BLACK_001",
  "type": "head",
  "asset": "cosmetics/head/cap_black_001.png",
  "anchor": "head",
  "rarity": "common",
  "stageCompatibility": ["baby", "youth", "adult"]
}
```

`stageCompatibility` référence [[Evolution-Stages]].

## Piège — les full-body outfits

Un hoodie ne peut pas toujours suivre un seul anchor. Il faut alors une
variante **par animation** :

```text
hoodie_idle · hoodie_walk · hoodie_sleep
```

D'où la règle : **très peu de full-body outfits au MVP** (un seul dans le
pack). Voir [[Layers]].

---
Source : §59, §60, §61, §62, §63, §64, §66
