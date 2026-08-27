interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''}`}>
      <svg aria-hidden="true" className="brand-logo-svg" viewBox="0 0 190 58">
        <g className="brand-logo-crown">
          <path d="M151 10h29v5h-29zM154 6h5v5h-5zM163 2h5v9h-5zM173 6h5v5h-5z" />
          <path d="M153 8h5l8 5 8-5h5l-3 9h-20z" />
        </g>
        <path d="M2 23h39v8L20 49h21v8H2v-8l21-18H2z" />
        <path d="M47 23h35v8H59v5h19v8H59v5h23v8H47z" />
        <path d="M88 23h28c10 0 16 5 16 14 0 6-3 10-8 12l10 8h-16l-8-7h-10v7H88zm12 8v11h15c4 0 6-2 6-6 0-3-2-5-6-5z" />
        <path d="M143 28l6-5h30l7 6v22l-7 6h-30l-6-6z" />
        <path className="brand-logo-face" d="M154 34h5v10h-5zm13 0h5v10h-5zm-7 12h6v4h-6z" />
      </svg>
      {!compact ? <span className="brand-logo-tagline">Ton IA. Ton compagnon.</span> : null}
    </span>
  );
}
