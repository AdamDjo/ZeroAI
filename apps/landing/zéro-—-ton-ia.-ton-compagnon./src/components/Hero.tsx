import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ZERO_HERO_ISLAND_URL } from '@/assets/zero-assets';
import { HERO_PROMISES } from '@/data/landing-content';
import { PhoneMockup } from './PhoneMockup';
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
            <StoreBadge platform="apple" />
            <StoreBadge platform="google" />
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Aperçu de Zéro et de son application">
        <div className="zero-stage">
          <div className="speech-bubble speech-bubble-animated" key={questionIndex}>
            {questions[questionIndex]}
          </div>
          <img
            alt="Zéro assis sur son petit îlot végétal"
            className="hero-zero-art"
            decoding="async"
            fetchPriority="high"
            src={ZERO_HERO_ISLAND_URL}
          />
          <span className="heart-bubble" aria-hidden="true"><Heart fill="currentColor" size={20} /></span>
        </div>

        <PhoneMockup className="hero-phone" variant="hero" />
        <p className="hero-note">Un lien unique à créer ensemble</p>
      </div>
    </section>
  );
}
