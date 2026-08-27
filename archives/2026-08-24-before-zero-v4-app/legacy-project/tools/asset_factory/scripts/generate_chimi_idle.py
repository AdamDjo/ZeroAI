"""Point d'arrêt pour l'ancien générateur rectangulaire d'idle.

La génération a été remplacée par la skill ``hatch-chimi`` : chaque frame est
maintenant une pose complète contrôlée avant assemblage.
"""


def main() -> None:
    raise SystemExit(
        "ARRET : ce générateur déplaçait un rectangle de pixels et pouvait couper Chimi. "
        "Utiliser tools/skills/hatch-chimi/scripts/hatch_chimi.py scaffold."
    )


if __name__ == "__main__":
    main()
