---
title: Protocole Agent
type: protocole
tags: [index, agent, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Protocole Agent

## Lecture minimale

```text
1. ETAT-ACTUEL
2. le MOC de la tâche
3. une à trois pages directement utiles
4. agir et valider
```

Ne pas charger tout le vault ou le master plan historique.

## Avant une génération de mascotte

1. lire [[Identite-Personnage]] et la demande actuelle ;
2. utiliser le skill officiel `hatch-pet` ;
3. traiter les anciennes images comme références optionnelles ;
4. créer une base canonique pour le candidat ;
5. valider la contact sheet et les GIFs.

L'agent peut proposer ou générer une nouvelle créature. Il doit préserver la
cohérence à l'intérieur du run, sans imposer la silhouette, la palette ou le
style d'un ancien candidat.

## Principe de modification

Réparer une ligne si le candidat fonctionne globalement. Changer franchement
de direction si le concept général est faible. Conserver les résultats et leur
QA pour rendre les décisions réversibles.

## Convention de frontmatter

```yaml
type: concept | spec | procedure | issues | moc | decision | protocole
tags: [...]
statut: actif | brouillon | differe | archive | a-trancher
maj: YYYY-MM-DD
```
