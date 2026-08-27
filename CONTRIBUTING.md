# Contribuer à ZeroAI

## Workflow Git

1. Créer une issue GitHub avec le contexte, les critères d’acceptation et le plan de test.
2. Depuis `develop`, créer une branche préfixée par le numéro de l’issue :
   - `feature/<n>-<description>` ;
   - `fix/<n>-<description>` ;
   - `hotfix/<n>-<description>` depuis `main` ;
   - `release/<semver>` depuis `develop`.
3. Utiliser des commits au format `type(scope): résumé court`.
4. Pousser la branche et ouvrir une PR vers `develop`, ou vers `main` pour une release ou un hotfix.
5. Ajouter `Closes #<n>` au corps de la PR.
6. Vérifier les labels de type, domaine, priorité et phase, le milestone, l’assignation et le Project.
7. Attendre la CI, puis laisser Adem effectuer le merge manuellement.

Les commits directs sur `main` et `develop`, les merges automatisés et les signatures `Co-Authored-By` ajoutées par un agent sont interdits.

## Vérifications avant PR

- lancer les tests, le lint et le typecheck disponibles dans la zone modifiée ;
- exécuter `git diff --check` ;
- valider les JSON touchés ;
- confirmer qu’aucun secret ou fichier local n’est suivi ;
- documenter précisément les vérifications manuelles dans la PR.

## Assets

Les applications ne doivent dépendre que des packages finaux validés. Les workbenches, essais rejetés et archives restent des références hors runtime.
