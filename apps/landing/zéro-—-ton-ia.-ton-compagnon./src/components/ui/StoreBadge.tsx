interface StoreBadgeProps {
  onClick: () => void;
  platform: 'apple' | 'google';
}

export function StoreBadge({ onClick, platform }: StoreBadgeProps) {
  const isApple = platform === 'apple';
  const smallText = isApple ? 'Télécharger dans' : 'Disponible sur';
  const storeName = isApple ? 'l’App Store' : 'Google Play';

  return (
    <button
      aria-label={`${smallText} ${storeName}`}
      className="store-badge"
      onClick={onClick}
      type="button"
    >
      {isApple ? (
        <svg aria-hidden="true" className="store-badge-icon" viewBox="0 0 24 28">
          <path d="M18.8 14.8c0-3.7 3-5.5 3.1-5.6a6.7 6.7 0 0 0-5.3-2.9c-2.2-.2-4.4 1.3-5.3 1.3-.9 0-2.8-1.2-4.6-1.2-2.4 0-4.7 1.4-6 3.6-2.6 4.5-.7 11.2 1.8 14.8 1.2 1.8 2.7 3.8 4.6 3.7 1.8-.1 2.5-1.2 4.8-1.2 2.2 0 2.9 1.2 4.8 1.1 2-.1 3.3-1.8 4.5-3.6 1.4-2 2-4 2-4.1-.1 0-4.4-1.7-4.4-5.9ZM15.1 4c1-1.2 1.7-2.9 1.5-4-1.5.1-3.2 1-4.3 2.2-1 1.1-1.8 2.8-1.6 4 1.6.1 3.3-.9 4.4-2.2Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="store-badge-icon" viewBox="0 0 28 30">
          <path d="m2 2 15 13L2 28z" fill="#49c9f5" />
          <path d="m17 15 4-4 5 3c1 .6 1 1.4 0 2l-5 3z" fill="#ffd44c" />
          <path d="M2 2c.5-.4 1.1-.3 1.7.1L21 11l-4 4z" fill="#59d37d" />
          <path d="M2 28c.5.4 1.1.3 1.7-.1L21 19l-4-4z" fill="#f75d6c" />
        </svg>
      )}
      <span>
        <small>{smallText}</small>
        <strong>{storeName}</strong>
      </span>
    </button>
  );
}
