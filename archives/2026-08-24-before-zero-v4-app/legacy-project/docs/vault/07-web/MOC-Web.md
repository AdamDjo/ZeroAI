---
title: MOC Web
type: moc
tags: [moc, web, landing]
statut: actif
maj: 2026-08-20
---

# MOC — Web

La landing page et sa fidélité visuelle.

## Nœuds

- [[Landing-Pixel-Perfect]] — méthode et outillage
- [[Assets-Landing]] — ce qui est image, ce qui est code

## Règle d'entrée

La landing utilise le candidat sélectionné au moment de sa production. Si la
créature change ensuite, ses assets peuvent être remplacés sans reconstruire
toute la page.

## Prérequis

La landing dépend d'assets validés en amont :

```text
candidat sélectionné  →  hero disponible  →  première landing testable
```

Voir [[Evolution-Stages]] et l'arbitrage en cours
[[DEC-002-Ordre-Web-Vs-Shop]].

## Stack

Next.js + Playwright pour la régression visuelle ([[Stack-Outils]]).

## Règle d'implémentation

> **Ne jamais coder toute la landing d'un coup.**

Section par section, chacune vérifiée à l'overlay.

---
Source : §78-§88, §106-§109
