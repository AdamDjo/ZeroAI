import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ZERO_STREETWEAR_URL } from '@/assets/zero-assets';
import { CUSTOMIZATION_ITEMS } from '@/data/landing-content';
import { PixelIcon } from './ui/PixelIcon';

interface CustomizationSectionProps {
  onShopClick: () => void;
}

const ACCESSORIES = [
  { icon: 'glasses', label: 'Lunettes' },
  { icon: 'shirt', label: 'Sweat' },
  { icon: 'bag', label: 'Sac' },
  { icon: 'sparkle', label: 'Aura' },
] as const;

export function CustomizationSection({ onShopClick }: CustomizationSectionProps) {
  const [selectedAccessory, setSelectedAccessory] = useState<(typeof ACCESSORIES)[number]['label']>(
    ACCESSORIES[0].label,
  );

  return (
    <section className="section-space scroll-mt-24" id="boutique">
      <div className="page-shell customization-layout">
        <div>
          <p className="eyebrow">Personnalise ton compagnon</p>
          <h2 className="section-title">Un univers à créer, ensemble.</h2>
          <p className="section-copy">
            Nourris-le, habille-le, collectionne des objets et découvre toutes ses personnalités.
          </p>
          <ul className="mt-7 grid gap-4">
            {CUSTOMIZATION_ITEMS.map(({ pixelIcon, title }) => (
              <li className="flex items-center gap-3 font-semibold" key={title}>
                <span className="promise-icon"><PixelIcon name={pixelIcon} /></span>
                {title}
              </li>
            ))}
          </ul>
          <button className="button-primary mt-8" onClick={onShopClick} type="button">
            Voir la boutique
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="customization-stage">
          <div className="accessory-list" aria-label="Aperçu des accessoires">
            {ACCESSORIES.map(({ icon, label }) => (
              <button
                aria-pressed={selectedAccessory === label}
                className="accessory-button"
                key={label}
                onClick={() => setSelectedAccessory(label)}
                type="button"
              >
                <PixelIcon className="accessory-pixel-icon" name={icon} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="customization-character">
            <span className="customization-label">{selectedAccessory} sélectionné</span>
            <img
              alt="Zéro en tenue streetwear noire et vert lime"
              className="customization-zero-art"
              decoding="async"
              loading="lazy"
              src={ZERO_STREETWEAR_URL}
            />
          </div>
          <p className="customization-note">Des milliers de combinaisons possibles&nbsp;!</p>
        </div>
      </div>
    </section>
  );
}
