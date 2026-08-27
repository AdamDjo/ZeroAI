import { Heart, Home, MessageCircle, Send, ShoppingBag, UserRound } from 'lucide-react';
import { useState } from 'react';
import {
  ZERO_BABY_HAPPY_URL,
  ZERO_BABY_IDLE_URL,
  ZERO_BABY_PETTING_URL,
  ZERO_MASTER_URL,
} from '@/assets/zero-assets';

type PhoneVariant = 'hero' | 'stage1' | 'stage2' | 'stage3';

interface PhoneMockupProps {
  className?: string;
  variant?: PhoneVariant;
}

const PHONE_CONTENT: Record<PhoneVariant, { day: string; hearts: number; question: string }> = {
  hero: { day: 'Jour 12', hearts: 24, question: 'Quelle est ta couleur préférée ?' },
  stage1: { day: 'Jour 1', hearts: 0, question: 'Tu es mon humain ?' },
  stage2: { day: 'Jour 3', hearts: 6, question: 'Quelle est ta musique préférée ?' },
  stage3: { day: 'Jour 30', hearts: 48, question: 'On a tant grandi ensemble !' },
};

export function PhoneMockup({ className = '', variant = 'hero' }: PhoneMockupProps) {
  const content = PHONE_CONTENT[variant];
  const isBaby = variant === 'stage1';
  const initialCharacterUrl = variant === 'stage1'
    ? ZERO_BABY_IDLE_URL
    : ZERO_MASTER_URL;
  const [characterUrl, setCharacterUrl] = useState(initialCharacterUrl);

  function showPettingReaction() {
    if (isBaby) setCharacterUrl(ZERO_BABY_PETTING_URL);
  }

  function showHappyReaction() {
    if (isBaby) setCharacterUrl(ZERO_BABY_HAPPY_URL);
  }

  return (
    <div className={`phone-shell ${className}`}>
      <div className={`phone-screen phone-screen-${variant}`}>
        <div className="phone-island" aria-hidden="true" />
        <div className="phone-status">
          <span>9:41</span>
          <span aria-label="Batterie pleine">●●●</span>
        </div>
        <div className="phone-header">
          <strong>{content.day}</strong>
          <span className="phone-hearts">
            <Heart aria-hidden="true" fill="currentColor" size={13} />
            {content.hearts}
          </span>
        </div>
        <div className="phone-question">{content.question}</div>
        <div className="phone-character-wrap">
          <button
            aria-label={isBaby ? 'Caresser Zéro' : 'Zéro dans son application'}
            className="phone-character-button"
            disabled={!isBaby}
            onPointerDown={showPettingReaction}
            onPointerLeave={showHappyReaction}
            onPointerUp={showHappyReaction}
            type="button"
          >
            <img
              alt=""
              className="phone-character pixel-crisp"
              decoding="async"
              loading={variant === 'hero' ? 'eager' : 'lazy'}
              src={characterUrl}
            />
          </button>
          {variant === 'stage3' ? <span className="phone-crown" aria-hidden="true">♛</span> : null}
        </div>
        <div className="phone-input">
          <span>Écris ta réponse…</span>
          <Send aria-hidden="true" size={13} />
        </div>
        <div className="phone-tabs" aria-hidden="true">
          <Home size={15} />
          <MessageCircle size={15} />
          <ShoppingBag size={15} />
          <UserRound size={15} />
        </div>
      </div>
    </div>
  );
}
