---
title: Développement adaptatif
type: regle
tags: [process, iteration, hatch-pet, qualite]
statut: actif
maj: 2026-08-24
---

# Développement adaptatif

## Principe

Le projet avance par résultats visibles, pas par un ordre d'issues immuable.
La créature et ses animations peuvent être revues tant que la direction finale
n'est pas convaincante.

`hatch-pet` fournit la méthode commune. Chaque itération peut adapter la
créature, le style et les états.

## Boucle par défaut

```text
choisir une hypothèse visuelle
→ générer un candidat testable avec hatch-pet
→ regarder la planche et les mouvements
→ corriger le point le plus faible
→ intégrer quand le candidat est assez convaincant
→ continuer à polir dans le contexte réel
```

## Situation actuelle

| Étape | Résultat | État |
|---|---|---|
| Pipeline | génération et QA `hatch-pet` | validé |
| Candidat V2 | sheet complète de neuf états | disponible, à revoir |
| Direction finale | créature et style retenus | ouverte |
| Contrat d'app | manifest adaptable | à faire après choix utile |
| Intégration | personnage animé dans l'app | à faire |
| Polissage | corrections ciblées en contexte | continu |

## Règles simples

- Aucun candidat n'est sacré.
- La V1 n'est pas une dépendance.
- La V2 peut être gardée, modifiée ou remplacée.
- Une nouvelle créature peut repartir du même workflow `hatch-pet`.
- On corrige la plus petite zone possible quand le concept général fonctionne.
- On change franchement de direction quand le concept général ne fonctionne pas.
- Les validations techniques restent automatiques à chaque livraison.
- Le rendu final compte plus que le respect d'un ancien plan.

## Dépendances réelles

On construit uniquement ce qui est nécessaire à la prochaine preuve. Un
lecteur est nécessaire pour tester dans l'app ; un catalogue complet, une
boutique ou une architecture complexe ne le sont pas.

Les familles d'issues servent à organiser le travail, pas à imposer son ordre :
[[Issues-PIPE]], [[Issues-ART]], [[Issues-ENGINE]], [[Issues-SHOP]],
[[Issues-WEB]] et [[Issues-BREED]].
