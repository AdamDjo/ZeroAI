---
title: Quand Utiliser Quoi
type: reference
tags: [produit, outils, cout]
statut: actif
maj: 2026-08-20
---

# Quand Utiliser Quoi

## PixelLab — NE PAS appeler pour

bouton · carte UI · icône simple · texte · bordure · fond uni · badge

**Ces éléments sont codés.** Même règle sur la landing : voir
[[Assets-Landing]].

## PixelLab — appeler pour

personnage · pose · animation · accessoire · décor pixel complexe ·
évolution · item de collection

## LLM — nécessaire pour

dialogue · mémoire · raisonnement · question · personnalité

## LLM — PAS nécessaire pour

idle · blink · walk · particles · shop rendering · clothing ·
animation timing

Ces comportements tournent **localement** dans le [[Behavior-Engine]].
Le LLM n'est jamais appelé pour un mouvement aléatoire.

## Objectif de coût

Limiter les coûts en : réutilisant · packant · générant seulement le
nécessaire · évitant les milliers de combinaisons pré-rendues.

Voir [[Perimetre-MVP]] pour le signal d'alerte sur la sur-génération.

---
Source : §191, §192, §193, §194, §195, §49
