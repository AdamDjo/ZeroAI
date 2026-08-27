import { PawPrint } from 'lucide-react';
import { ZERO_PEEKING_CTA_URL } from '@/assets/zero-assets';

interface FinalCTAProps {
  onAdoptClick: () => void;
}

export function FinalCTA({ onAdoptClick }: FinalCTAProps) {
  return (
    <section className="page-shell pb-8 pt-6">
      <div className="final-cta">
        <div className="final-cta-copy">
          <h2>Prêt à commencer votre aventure&nbsp;?</h2>
          <p>Adoptez Zéro aujourd'hui et créez un lien unique qui durera.</p>
          <button className="button-primary mt-6" onClick={onAdoptClick} type="button">
            Adopter Zéro
            <PawPrint aria-hidden="true" size={18} />
          </button>
          <div className="cta-scan" aria-label="QR code de préinscription">
            <span className="qr-pattern" aria-hidden="true" />
            <strong>Scanne-moi&nbsp;!</strong>
          </div>
        </div>
        <div className="final-cta-character">
          <div className="speech-bubble">J'ai hâte de te rencontrer&nbsp;!</div>
          <img
            alt="Zéro qui dépasse joyeusement du bandeau"
            className="final-cta-zero-art"
            decoding="async"
            loading="lazy"
            src={ZERO_PEEKING_CTA_URL}
          />
        </div>
      </div>
    </section>
  );
}
