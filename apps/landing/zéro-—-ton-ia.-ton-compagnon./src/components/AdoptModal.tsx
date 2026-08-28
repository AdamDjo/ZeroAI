import { Check, PawPrint, Smartphone } from 'lucide-react';
import { DialogShell } from './ui/DialogShell';
import { ZeroCharacter } from './ui/ZeroCharacter';

interface AdoptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdoptModal({ isOpen, onClose }: AdoptModalProps) {
  return (
    <DialogShell isOpen={isOpen} labelId="adopt-dialog-title" onClose={onClose}>
      <div className="dialog-heading">
        <span className="dialog-icon"><PawPrint aria-hidden="true" /></span>
        <div>
          <p className="eyebrow">Liste d'attente</p>
          <h2 id="adopt-dialog-title">Adopter Zéro</h2>
        </div>
      </div>
      <p className="dialog-copy">
        L'application est encore en construction. La landing prépare l'aventure, sans promettre un
        téléchargement qui n'existe pas encore.
      </p>
      <div className="dialog-preview">
        <ZeroCharacter className="h-36 w-36" />
        <div>
          <strong>Bientôt sur mobile</strong>
          <p>iOS et Android seront annoncés après validation du runtime.</p>
        </div>
      </div>
      <button className="button-primary w-full justify-center" disabled type="button">
        <Smartphone aria-hidden="true" size={18} />
        Inscriptions bientôt ouvertes
      </button>
      <p className="dialog-footnote">
        <Check aria-hidden="true" size={15} /> Aucune donnée collectée à ce stade.
      </p>
    </DialogShell>
  );
}
