import { FEATURES } from '@/data/landing-content';
import { PixelIcon } from './ui/PixelIcon';

export function FeatureStrip() {
  return (
    <section className="page-shell scroll-mt-24 pb-10" id="fonctionnalites">
      <h2 className="sr-only">Pourquoi Zéro est différent</h2>
      <div className="feature-strip">
        {FEATURES.map(({ description, pixelIcon, title }) => (
          <article className="feature-strip-item" key={title}>
            <span className="feature-icon">
              <PixelIcon name={pixelIcon} />
            </span>
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          </article>
        ))}
        <span className="scroll-anchor" id="securite" />
      </div>
    </section>
  );
}
