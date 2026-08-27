import { ZERO_FOOTER_SCENE_V2_URL } from '@/assets/zero-assets';
import { PixelIcon } from './ui/PixelIcon';

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
            <PixelIcon className="button-pixel-icon" name="paw" />
          </button>
          <div className="cta-scan" aria-label="QR code de préinscription">
            <span className="qr-pattern" aria-hidden="true" />
            <strong>Scanne-moi&nbsp;!</strong>
          </div>
        </div>
        <img
          alt="Zéro qui dépasse joyeusement d'un jardin pixel-art"
          className="final-cta-scene pixel-crisp"
          decoding="async"
          loading="lazy"
          src={ZERO_FOOTER_SCENE_V2_URL}
        />
        <div className="final-cta-bubble speech-bubble">J'ai hâte<br />de te rencontrer&nbsp;!</div>
      </div>
    </section>
  );
}
