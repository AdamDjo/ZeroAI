import { useEffect, useState } from 'react';
import { ZERO_HERO_SCENE_V2_URL } from '@/assets/zero-assets';
import { HERO_PROMISES } from '@/data/landing-content';
import { PhoneMockup } from './PhoneMockup';
import { HeroDecorations } from './ui/HeroDecorations';
import { PixelIcon } from './ui/PixelIcon';
import { StoreBadge } from './ui/StoreBadge';

interface HeroProps {
  onAdoptClick: () => void;
  onDemoClick: () => void;
}

export function Hero({ onAdoptClick, onDemoClick }: HeroProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = ['Tu es mon humain ?', 'Tu aimes quoi, toi ?', 'On grandit ensemble ?'];

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setQuestionIndex((currentIndex) => (currentIndex + 1) % questions.length);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [questions.length]);

  return (
    <section className="page-shell hero-grid scroll-mt-24" id="top">
      <div className="hero-copy">
        <h1 className="hero-title">
          Il ne sait rien
          <br />
          du monde.
          <span>Tu lui apprends.</span>
        </h1>
        <p className="hero-description">
          Zéro est un petit chat IA. Il te pose des questions, il apprend de toi, il grandit… et
          devient ton meilleur ami.
        </p>

        <ul className="mt-6 grid gap-3" aria-label="Les promesses de Zéro">
          {HERO_PROMISES.map(({ pixelIcon, title }) => (
            <li className="flex items-center gap-3 text-sm font-semibold sm:text-base" key={title}>
              <span className="promise-icon">
                <PixelIcon name={pixelIcon} />
              </span>
              {title}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="button-primary" onClick={onAdoptClick} type="button">
            Adopter Zéro
            <PixelIcon className="button-pixel-icon" name="paw" />
          </button>
          <button className="button-secondary" onClick={onDemoClick} type="button">
            Voir la démo
            <PixelIcon className="button-pixel-icon button-play-icon" name="play" />
          </button>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold text-muted">Bientôt disponible sur</p>
          <div className="flex flex-wrap gap-2" aria-label="Plateformes prévues">
            <StoreBadge onClick={onAdoptClick} platform="apple" />
            <StoreBadge onClick={onAdoptClick} platform="google" />
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Aperçu de Zéro et de son application">
        <img
          alt="Zéro sur son îlot, entouré d'un petit jardin pixel-art"
          className="hero-scene-art pixel-crisp"
          decoding="async"
          fetchPriority="high"
          src={ZERO_HERO_SCENE_V2_URL}
        />
        <div className="hero-question speech-bubble speech-bubble-animated" key={questionIndex}>
          {questions[questionIndex]}
        </div>
        <HeroDecorations />

        <PhoneMockup className="hero-phone" variant="hero" />
        <div className="hero-note">
          <p>Un lien unique<br />à créer ensemble</p>
          <svg aria-hidden="true" viewBox="0 0 64 62">
            <path d="M51 3c2 25-9 40-34 45" />
            <path d="m24 40-9 8 11 5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
