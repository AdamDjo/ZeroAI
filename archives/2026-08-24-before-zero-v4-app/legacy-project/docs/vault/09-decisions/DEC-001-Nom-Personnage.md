---
title: DEC-001 — Nom du personnage
type: decision
tags: [decision, identite, naming]
statut: tranche
maj: 2026-08-20
---

# DEC-001 — Nom du personnage

## Décision

> [!important] Le personnage s'appelle **Chimi**.
> Tranché le 2026-08-20. Le nom « Zéro » du plan source est abandonné.

## Pourquoi Chimi

```text
« chi » (小) = petit, en japonais  +  sonorité féline
```

| Critère | Vérifié |
|---|---|
| cohérent avec MewMewAI | sonorité douce, registre félin |
| prononçable FR et EN | identique dans les deux |
| court | 2 syllabes, 5 lettres |
| pas d'accent dans l'identifiant | `chimi_` s'écrit tel quel |
| **créneau AI companion libre** | **oui — critère décisif** |

Même métrique que « Zéro » : les CTA et le logo des maquettes se
retouchent **sans casser les mises en page**.

## Vérification de disponibilité

Faite le 2026-08-20.

### Créneau AI companion — libre

Aucune app compagnon IA ni pet virtuel ne porte ce nom. Les acteurs du
secteur sont Emy, Pengu, Nuzzle, Convai Desktop Pet.

### Marques existantes — hors périmètre

| Marque | Domaine | Risque |
|---|---|---|
| Chimi AB (SE) | lunetterie, prêt-à-porter — US 5887627 | faible : univers sans recoupement |
| CHIMI'S | restaurant (AZ, 1978) | nul |
| CHIMI CHIMI | alimentaire (2025) | nul |

~51 marques contenant « CHIMI » aux US, majoritairement alimentaire.
Le nom n'est **pas exclusif**, mais aucune collision fonctionnelle.

### Réserve assumée

Association possible avec *chimichanga* pour un public anglophone.
Jugée neutre, voire sympathique.

## Noms écartés

| Nom | Motif |
|---|---|
| **Miru** | ❌ **collision directe** — un compagnon IA open-source du même nom existe déjà, avec mémoire long terme et desktop pet. Même concept, même positionnement. |
| **Nono** | ⚠️ « no-no » = *interdit* en anglais ; marque grand public no!no! (épilation) très visible |
| Miko, Nova, Neko, Echo | trop utilisés |
| Kibi, Pixi, Nyx, Mimi, Sora | écartés au premier tour |

> [!note] Leçon
> Le critère qui tranche n'est pas l'esthétique du nom mais
> **l'occupation du créneau**. Miru sonnait mieux et racontait mieux —
> il était pris par un concurrent direct.

## Portée du changement

### Fait — texte du vault

Toutes les occurrences narratives remplacées. Les identifiants
techniques sont **inchangés** :

```text
ZERO_MASTER_V1       inchangé
zero_baby_idle_v01   inchangé
PIPE-001, ART-005…   inchangés
```

### À faire — les deux maquettes

```text
MewMew.png    titre, « Silhouette finale de », concept clé, personnalité
Landing.png   logo, header, 3 CTA « Adopter », témoignages, CTA final, footer
```

Voir [[Maquettes-Reference]].

### Optionnel — identifiants techniques

Renommer `ZERO_*` → `CHIMI_*` est un chantier **séparé**, à décider une
seule fois et **avant `ART-003`** (normalisation du master). Après, le
coût monte fortement ([[Conventions-Nommage]], [[Versioning-Character]]).

Ne pas le faire est un choix valide : ce sont des identifiants internes,
jamais vus par l'utilisateur.

### Recommandé — avant publication

Dépôt de marque en classes 9 et 42 (logiciel) si le projet va en
production. Chimi AB est en lunetterie, donc les classes visées sont
libres — mais à confirmer par un conseil en PI.

## Impact

- [[Identite-Personnage]]
- [[Maquettes-Reference]]
- [[Assets-Landing]] (hero, CTA)
- [[Style-Bible]]

---
Source : décision projet du 2026-08-20 (le plan source dit « Zéro » partout)
