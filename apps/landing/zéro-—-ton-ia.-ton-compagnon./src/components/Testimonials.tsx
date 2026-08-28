import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { type CSSProperties, useEffect, useState } from 'react';
import { TESTIMONIALS } from '@/data/landing-content';
import { ZeroCharacter } from './ui/ZeroCharacter';

const TESTIMONIAL_COUNT = TESTIMONIALS.length;
const CAROUSEL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(TESTIMONIAL_COUNT);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const activeIndex = ((slideIndex - TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT + TESTIMONIAL_COUNT)
    % TESTIMONIAL_COUNT;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setSlideIndex((currentIndex) => currentIndex + 1);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleTransitionEnd = () => {
    if (slideIndex < TESTIMONIAL_COUNT || slideIndex >= TESTIMONIAL_COUNT * 2) {
      setShouldAnimate(false);
      setSlideIndex(TESTIMONIAL_COUNT + activeIndex);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setShouldAnimate(true));
      });
    }
  };

  return (
    <section className="section-space testimonials-section" aria-labelledby="testimonials-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Une communauté bienveillante</p>
          <h2 id="testimonials-title">Ils ont déjà adopté Zéro</h2>
        </div>
        <div className="testimonials-carousel">
          <button
            aria-label="Voir le témoignage précédent"
            className="carousel-arrow carousel-arrow-previous"
            onClick={() => setSlideIndex((currentIndex) => currentIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={21} strokeWidth={2.2} />
          </button>
          <div className="testimonials-viewport">
            <div
              className={`testimonials-track ${shouldAnimate ? '' : 'testimonials-track-jump'}`}
              onTransitionEnd={handleTransitionEnd}
              style={{ '--carousel-index': slideIndex } as CSSProperties}
            >
              {CAROUSEL_ITEMS.map((testimonial, index) => (
                <article
                  aria-hidden={index < TESTIMONIAL_COUNT || index >= TESTIMONIAL_COUNT * 2}
                  className="testimonial-card"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="testimonial-author">
                    <img
                      alt={`Portrait de ${testimonial.name}`}
                      className="testimonial-avatar"
                      decoding="async"
                      loading="lazy"
                      src={testimonial.avatarUrl}
                    />
                    <strong>{testimonial.name}</strong>
                  </div>
                  <div className="testimonial-rating" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star aria-hidden="true" fill="currentColor" key={starIndex} size={13} />
                    ))}
                  </div>
                  <blockquote>
                    «&nbsp;{testimonial.quote}&nbsp;»
                  </blockquote>
                  <div className="testimonial-zero" aria-hidden="true">
                    <ZeroCharacter alt="" />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            aria-label="Voir le témoignage suivant"
            className="carousel-arrow carousel-arrow-next"
            onClick={() => setSlideIndex((currentIndex) => currentIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={21} strokeWidth={2.2} />
          </button>
          <div className="carousel-dots" role="group" aria-label="Choisir un témoignage">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                aria-label={`Afficher le témoignage de ${testimonial.name}`}
                aria-pressed={activeIndex === index}
                className="carousel-dot"
                key={testimonial.name}
                onClick={() => setSlideIndex(TESTIMONIAL_COUNT + index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
