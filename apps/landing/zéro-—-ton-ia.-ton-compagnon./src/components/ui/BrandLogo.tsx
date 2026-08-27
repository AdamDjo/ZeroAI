interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''}`}>
      <span className="brand-logo-crown" aria-hidden="true">
        <svg viewBox="0 0 36 24" role="img">
          <path d="M3 19h30M6 16 4 7l9 6L18 3l5 10 9-6-2 9H6Z" />
          <circle cx="4" cy="5" r="2" />
          <circle cx="18" cy="2" r="2" />
          <circle cx="32" cy="5" r="2" />
        </svg>
      </span>
      <span className="brand-logo-word">ZERO</span>
      {!compact ? <span className="brand-logo-tagline">Ton IA. Ton compagnon.</span> : null}
    </span>
  );
}
