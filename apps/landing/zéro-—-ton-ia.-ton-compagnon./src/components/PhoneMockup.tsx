import { Heart, Home, MessageCircle, Send, ShoppingBag, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  ZERO_BABY_HAPPY_URL,
  ZERO_BABY_IDLE_URL,
  ZERO_BABY_PETTING_URL,
  ZERO_MASTER_URL,
} from '@/assets/zero-assets';

type PhoneVariant = 'hero' | 'stage1' | 'stage2' | 'stage3';
type SimulationPhase = 'question' | 'typing' | 'sent' | 'reply';

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

const USER_ANSWER = 'Le vert lime 💚';
const ZERO_REPLY = 'Moi aussi ! Ça me rappelle mes yeux ✨';

export function PhoneMockup({ className = '', variant = 'hero' }: PhoneMockupProps) {
  const content = PHONE_CONTENT[variant];
  const isBaby = variant === 'stage1';
  const initialCharacterUrl = isBaby ? ZERO_BABY_IDLE_URL : ZERO_MASTER_URL;
  const [characterUrl, setCharacterUrl] = useState(initialCharacterUrl);
  const [simulationCycle, setSimulationCycle] = useState(0);
  const [simulationPhase, setSimulationPhase] = useState<SimulationPhase>('question');
  const [typedAnswer, setTypedAnswer] = useState('');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (variant !== 'hero' || reducedMotion) return undefined;

    const timeoutIds: number[] = [];
    const schedule = (callback: () => void, delay: number) => {
      timeoutIds.push(window.setTimeout(callback, delay));
    };

    schedule(() => {
      setSimulationPhase('question');
      setTypedAnswer('');
    }, 0);
    schedule(() => setSimulationPhase('typing'), 1250);

    Array.from(USER_ANSWER).forEach((_, characterIndex) => {
      schedule(() => setTypedAnswer(USER_ANSWER.slice(0, characterIndex + 1)), 1550 + characterIndex * 72);
    });

    const typingDuration = 1550 + USER_ANSWER.length * 72;
    schedule(() => setSimulationPhase('sent'), typingDuration + 450);
    schedule(() => setSimulationPhase('reply'), typingDuration + 1550);
    schedule(() => setSimulationCycle((currentCycle) => currentCycle + 1), typingDuration + 5200);

    return () => timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [simulationCycle, variant]);

  function showPettingReaction() {
    if (isBaby) setCharacterUrl(ZERO_BABY_PETTING_URL);
  }

  function showHappyReaction() {
    if (isBaby) setCharacterUrl(ZERO_BABY_HAPPY_URL);
  }

  const isReplyVisible = variant === 'hero' && simulationPhase === 'reply';
  const isUserMessageVisible = variant === 'hero'
    && (simulationPhase === 'sent' || simulationPhase === 'reply');

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
          <span className="phone-hearts tabular-nums">
            <Heart aria-hidden="true" fill="currentColor" size={13} />
            {content.hearts + (isReplyVisible ? 1 : 0)}
          </span>
        </div>
        <div className="phone-conversation" aria-live={variant === 'hero' ? 'polite' : undefined}>
          <div className="phone-question">{content.question}</div>
          {isUserMessageVisible ? <p className="phone-message phone-message-user">{USER_ANSWER}</p> : null}
          {isReplyVisible ? <p className="phone-message phone-message-zero">{ZERO_REPLY}</p> : null}
        </div>
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
              className={`phone-character pixel-crisp ${isReplyVisible ? 'phone-character-reacting' : ''}`}
              decoding="async"
              loading={variant === 'hero' ? 'eager' : 'lazy'}
              src={characterUrl}
            />
          </button>
          {variant === 'stage3' ? <span className="phone-crown" aria-hidden="true">♛</span> : null}
        </div>
        <div className={`phone-input ${simulationPhase === 'typing' && variant === 'hero' ? 'phone-input-typing' : ''}`}>
          <span>
            {variant === 'hero' && typedAnswer ? typedAnswer : 'Écris ta réponse…'}
            {simulationPhase === 'typing' && variant === 'hero' ? <i className="typing-caret" aria-hidden="true" /> : null}
          </span>
          <span className={`phone-send ${simulationPhase === 'sent' && variant === 'hero' ? 'phone-send-active' : ''}`}>
            <Send aria-hidden="true" size={13} />
          </span>
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
