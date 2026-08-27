---
title: QA checklists
type: source-verite
tags: [qa, validation, assets]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/04-validation/QA-Checklists.md
---

# QA checklists

## Identité

- [ ] visor noir lisible dans chaque pose ;
- [ ] yeux lime cohérents ;
- [ ] cœur IA visible quand l’angle le permet ;
- [ ] orbe de queue présente et liée à une seule queue ;
- [ ] corps crème et silhouette du stade respectés.

## Anatomie

- [ ] quatre membres anatomiques exactement ;
- [ ] une patte peut être naturellement cachée par le ventre ou une autre patte ; ne pas exiger quatre pattes visibles ;
- [ ] une patte levée remplace la patte au repos correspondante ;
- [ ] aucune patte, oreille, queue ou orbe dupliquée ;
- [ ] pas de coupure sur les bords de cellule ;
- [ ] baseline stable et absence de jitter non intentionnel.

## Atlas

- [ ] dimensions 1536 × 3120 ;
- [ ] cellules 192 × 208 ;
- [ ] 97 cellules utilisées ;
- [ ] cellules hors contrat transparentes ;
- [ ] rangées et durées conformes au manifest ;
- [ ] boucle sans saut pour les états bouclés ;
- [ ] transparence et RGB caché nettoyés.

## Regards et rendu

- [ ] 16 directions distinctes et ordonnées dans le sens horaire ;
- [ ] fallback `idle` dans la deadzone ;
- [ ] nearest-neighbor sans flou ;
- [ ] contact sheet et rapport JSON conservés dans `qa/`.

Un package échoue dès qu’une erreur anatomique, une signature manquante ou une cellule illégale est détectée. Une préférence visuelle non structurelle peut être conservée si elle est explicitement approuvée et enregistrée dans `qa/` ; elle ne doit jamais être présentée comme un test automatique réussi.
