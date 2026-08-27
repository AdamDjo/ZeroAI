interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''}`}>
      <svg aria-hidden="true" className="brand-logo-svg" viewBox="0 0 174 56">
        <g className="brand-logo-crown">
          <path d="M38 13h30v5H38zM41 8h5v5h-5zM50 4h5v9h-5zM60 8h5v5h-5z" />
          <path d="M40 10h5l8 5 8-5h5l-3 9H43z" />
        </g>
        <path d="M2 23h38v8L19 48h21v8H2v-8l21-17H2z" />
        <path d="M46 23h34v8H58v4h18v8H58v5h22v8H46z" />
        <path d="M86 23h27c10 0 16 5 16 14 0 6-3 10-8 12l9 7h-15l-8-6h-9v6H86zm12 8v11h14c4 0 6-2 6-6 0-3-2-5-6-5z" />
        <path fillRule="evenodd" d="M136 23h36v33h-36zm12 8v17h12V31z" />
      </svg>
      {!compact ? <span className="brand-logo-tagline">Ton IA. Ton compagnon.</span> : null}
    </span>
  );
}
