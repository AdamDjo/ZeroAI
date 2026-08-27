---
title: Objectifs Preuve
type: concept
tags: [produit, jalons]
statut: actif
maj: 2026-08-20
---

# Objectifs Preuve

Cinq jalons. Chacun prouve qu'un pipeline entier fonctionne. Ne pas passer
au suivant avant d'avoir validé le précédent.

## 1 — Le personnage vit dans un écran vide

Il respire, cligne, te regarde, réagit au toucher, réfléchit.
Si tu ressens quelque chose : **le cœur du produit est là**.

Dépend de : [[Animations-MVP]], [[Flame-Architecture]], [[Behavior-Engine]]

## 2 — La casquette

Lui mettre une casquette **sans modifier les sprites du corps**.
Si ça marche : **le pipeline boutique est prouvé**.

Dépend de : [[Anchors]], [[Layers]], [[Cosmetiques]]

## 3 — Le pont IA → personnage

Envoyer `emotion = curious` depuis une fausse réponse backend.
S'il joue `thinking` : **le pont IA → personnage est prouvé**.

Dépend de : [[Protocole-LLM-Animation]]

## 4 — La landing hero pixel-perfect

Construire le hero avec le master. Si le screenshot diff est propre :
**le pipeline marketing est prouvé**.

Dépend de : [[Landing-Pixel-Perfect]]

## 5 — Scale content

Seulement maintenant : produire en volume.

---
Source : §180, §181, §182, §183, §184
