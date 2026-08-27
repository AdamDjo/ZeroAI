import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/landing-content';
import { ZeroCharacter } from './ui/ZeroCharacter';

export function Testimonials() {
  return (
    <section className="section-space testimonials-section" aria-labelledby="testimonials-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Une communauté bienveillante</p>
          <h2 id="testimonials-title">Ils ont déjà adopté Zéro</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">{testimonial.name[0]}</span>
                <strong>{testimonial.name}</strong>
              </div>
              <div className="mt-3 flex gap-0.5 text-star" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star aria-hidden="true" fill="currentColor" key={index} size={14} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                «&nbsp;{testimonial.quote}&nbsp;»
              </blockquote>
              <div className="mt-4 flex items-end justify-end">
                <ZeroCharacter alt="" className="h-14 w-14" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
