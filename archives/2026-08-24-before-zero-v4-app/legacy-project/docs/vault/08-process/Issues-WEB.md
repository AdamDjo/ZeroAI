---
title: Issues WEB
type: issues
tags: [process, issues, web]
statut: actif
maj: 2026-08-20
---

# Famille WEB — landing page

20 issues, la plus grosse famille.

## Infrastructure

| ID | Titre |
|----|-------|
| WEB-001 | Next setup |
| WEB-002 | Reference image |
| WEB-003 | Inspect reference dimensions |
| WEB-004 | Overlay |
| WEB-005 | Playwright visual testing |
| WEB-006 | Tokens |

## Sections

| ID | Titre |
|----|-------|
| WEB-007 | Navbar |
| WEB-008 | Hero geometry |
| WEB-009 | Hero typography |
| WEB-010 | Hero assets |
| WEB-011 | Feature strip |
| WEB-012 | How It Works |
| WEB-013 | Evolution |
| WEB-014 | Customization |
| WEB-015 | Testimonials |
| WEB-016 | CTA |
| WEB-017 | Footer |

## Finition

| ID | Titre |
|----|-------|
| WEB-018 | Motion |
| WEB-019 | Responsive |
| WEB-020 | Visual CI |

## Règles de la famille

- **WEB-001 → WEB-006 avant toute section.** Coder une section sans
  overlay ni test visuel, c'est coder à l'aveugle.
- Le hero est découpé en trois issues (géométrie, typo, assets) parce
  qu'il concentre l'essentiel de l'écart visuel.
- `WEB-019` arrive **après** toutes les sections : le responsive se fait
  une fois la référence atteinte au viewport source.

## Dépendance asset

`WEB-010` et `WEB-013` utilisent les assets du candidat sélectionné. Les
portraits d'évolution peuvent être ajoutés plus tard sans bloquer une première
version de la landing.

## Nœuds de référence

[[Landing-Pixel-Perfect]] · [[Assets-Landing]] · [[MOC-Web]]

## Point d'arbitrage

Position de cette famille dans l'ordre global :
[[DEC-002-Ordre-Web-Vs-Shop]].

---
Source : §156, §89-§105
