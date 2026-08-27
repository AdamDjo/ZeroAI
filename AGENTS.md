# Instructions projet — ZeroAI

Les règles globales d’Adem s’appliquent intégralement. Ce fichier ajoute les règles propres à ZeroAI.

## Phase active

- Le dépôt est en **phase 1 — Verrouiller le vivant visuel**.
- Ne pas introduire de framework applicatif tant que le runtime mobile n’est pas décidé explicitement.
- Le prochain jalon visuel est le master adolescent, puis son atlas complet.

## Sources de vérité

- État courant : `docs/vault/00-index/ETAT-ACTUEL.md`.
- Roadmap : `docs/vault/01-produit/ROADMAP.md`.
- Architecture : `docs/vault/01-produit/ARCHITECTURE-GLOBALE.md`.
- Package adulte : `assets/v4/final/`.
- Package bébé : `assets/evolution/baby/final/`.
- Référence landing : `design/mockups/zero-landing-reference.png`.

## Frontières du dépôt

- `apps/landing/`, `apps/mobile/` et `apps/backend/` sont les futures surfaces applicatives.
- `archives/` est conservé pour référence et récupération ; ne jamais en faire une dépendance runtime.
- Une application consomme uniquement des packages finaux versionnés, jamais un workbench ou un candidat rejeté.
- Ne pas modifier les fichiers archivés sauf demande explicite.

## Assets et manifests

- Préserver l’identité canonique, la palette, la baseline et le contrat d’atlas de Zéro.
- Toute modification d’un package final doit maintenir la cohérence entre atlas, manifests, QA et documentation.
- Les sorties brutes ou non validées restent hors Git lorsqu’elles correspondent aux chemins exclus par `.gitignore`.

## Validation minimale

- Exécuter `git diff --check` avant chaque livraison.
- Valider tous les JSON touchés.
- Vérifier qu’aucun secret, `.env`, `.DS_Store`, cache ou environnement local n’est suivi.
- Exécuter les tests, le lint et le typecheck propres à chaque application dès qu’ils existent.

## Métadonnées GitHub

- Utiliser les labels `type:*`, `domain:*`, `priority:*` et `phase:*` applicables.
- Le milestone actif est `Phase 1 — Verrouiller le vivant visuel`.
- Ajouter les issues et PRs au Project `Scrum Board`.
- Assigner les issues et PRs à `AdamDjo`.
- Les PRs de feature et de fix ciblent `develop` et contiennent `Closes #<n>`.
- Les PRs vers `develop` sont fusionnées en squash afin de conserver un historique linéaire.
- Les PRs de release ou hotfix vers `main` sont fusionnées par merge commit, sans squash, notamment via `/release`.
- La commande de merge reste exécutée exclusivement par Adem ; l’agent prépare et vérifie la PR puis s’arrête.
- Seul Adem fusionne les PRs.
