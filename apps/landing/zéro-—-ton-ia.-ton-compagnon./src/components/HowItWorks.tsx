import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { JOURNEY_STEPS } from '@/data/landing-content';
import { PhoneMockup } from './PhoneMockup';

interface HowItWorksProps {
  onDemoClick: () => void;
}

export function HowItWorks({ onDemoClick }: HowItWorksProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canAnimate = window.matchMedia(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
    ).matches;

    if (!section || !canAnimate) return undefined;

    const sectionElement = section;
    let cancelled = false;
    let cleanupMotion: (() => void) | undefined;

    async function initializeMotion() {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled) return;

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      const cards = sectionElement.querySelectorAll('.journey-card');
      const phones = sectionElement.querySelector('.journey-phones');
      const layout = sectionElement.querySelector('.journey-layout');
      const summary = sectionElement.querySelector('.journey-summary');

      if (!phones || !layout || !summary) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.fromTo(
          cards,
          { autoAlpha: 0.35, y: 44 },
          {
            autoAlpha: 1,
            ease: 'none',
            stagger: 0.15,
            scrollTrigger: {
              end: 'bottom 60%',
              scrub: 0.7,
              start: 'top 78%',
              trigger: phones,
            },
            y: 0,
          },
        );

        ScrollTrigger.create({
          end: 'bottom 68%',
          pin: summary,
          pinSpacing: false,
          start: 'top 24%',
          trigger: layout,
        });
      }, sectionElement);

      cleanupMotion = () => context.revert();
    }

    void initializeMotion();

    return () => {
      cancelled = true;
      cleanupMotion?.();
    };
  }, []);

  return (
    <section className="section-space scroll-mt-24" id="evolution" ref={sectionRef}>
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Comment ça marche&nbsp;?</p>
          <h2>Une expérience simple et magique.</h2>
          <p>En quelques étapes, ton compagnon commence son aventure à tes côtés.</p>
        </div>

        <div className="journey-layout">
          <div className="journey-summary">
            <ol className="grid gap-6">
              {JOURNEY_STEPS.map((step, index) => (
                <li className="journey-summary-item" key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <button className="button-primary mt-8" onClick={onDemoClick} type="button">
              Découvrir la démo
              <Play aria-hidden="true" fill="currentColor" size={15} />
            </button>
          </div>

          <div className="journey-phones">
            {JOURNEY_STEPS.map((step, index) => {
              const variant = `stage${index + 1}` as 'stage1' | 'stage2' | 'stage3';
              return (
                <div className="contents" key={step.title}>
                  <article className="journey-card">
                    <PhoneMockup variant={variant} />
                    <p className="journey-day">{step.day}</p>
                    <h3>{index + 1}. {step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                  {index < JOURNEY_STEPS.length - 1 ? (
                    <ArrowRight aria-hidden="true" className="journey-arrow" size={22} />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
