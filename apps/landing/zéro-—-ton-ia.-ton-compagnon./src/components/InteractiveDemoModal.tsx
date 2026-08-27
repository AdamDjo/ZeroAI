import { Heart, PawPrint, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { DialogShell } from './ui/DialogShell';
import { ZeroCharacter } from './ui/ZeroCharacter';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  sender: 'user' | 'zero';
  text: string;
}

const INITIAL_MESSAGES: readonly Message[] = [
  { id: 1, sender: 'zero', text: 'Coucou ! Tu es mon humain ?' },
  { id: 2, sender: 'zero', text: 'Dis-moi ce qui te rend heureux en ce moment.' },
];

export function InteractiveDemoModal({ isOpen, onClose }: InteractiveDemoModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<readonly Message[]>(INITIAL_MESSAGES);
  const [hearts, setHearts] = useState(24);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = inputValue.trim();

    if (!message) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: currentMessages.length + 1, sender: 'user', text: message },
      {
        id: currentMessages.length + 2,
        sender: 'zero',
        text: "Je le garde dans cette démo. J'adore apprendre à te connaître !",
      },
    ]);
    setHearts((currentHearts) => currentHearts + 1);
    setInputValue('');
  }

  return (
    <DialogShell isOpen={isOpen} labelId="demo-dialog-title" onClose={onClose}>
      <div className="dialog-heading">
        <span className="dialog-icon"><PawPrint aria-hidden="true" /></span>
        <div>
          <p className="eyebrow">Prototype local</p>
          <h2 id="demo-dialog-title">Parler avec Zéro</h2>
        </div>
        <span className="demo-hearts"><Heart aria-hidden="true" fill="currentColor" size={15} />{hearts}</span>
      </div>

      <div className="demo-character">
        <ZeroCharacter className="h-28 w-28" />
      </div>

      <div aria-live="polite" className="demo-messages">
        {messages.map((message) => (
          <p className={`demo-message demo-message-${message.sender}`} key={message.id}>
            {message.text}
          </p>
        ))}
      </div>

      <form className="demo-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="demo-message">Ton message pour Zéro</label>
        <input
          autoComplete="off"
          id="demo-message"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Écris un message à Zéro…"
          type="text"
          value={inputValue}
        />
        <button aria-label="Envoyer" className="icon-button icon-button-brand" type="submit">
          <Send aria-hidden="true" size={17} />
        </button>
      </form>
    </DialogShell>
  );
}
