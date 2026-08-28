import { ZERO_HEAD_LOGO_URL } from '@/assets/zero-assets';

interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''}`}>
      <span className="brand-wordmark">
        <svg aria-hidden="true" className="brand-logo-svg" viewBox="0 0 136 36">
          <g transform="translate(0 -22)">
            <path d="M2 23h39v8L20 49h21v8H2v-8l21-18H2z" />
            <path d="M47 23h35v8H59v5h19v8H59v5h23v8H47z" />
            <path d="M88 23h28c10 0 16 5 16 14 0 6-3 10-8 12l10 8h-16l-8-7h-10v7H88zm12 8v11h15c4 0 6-2 6-6 0-3-2-5-6-5z" />
          </g>
        </svg>
        <img
          alt=""
          aria-hidden="true"
          className="brand-logo-head pixel-crisp"
          decoding="sync"
          draggable={false}
          fetchPriority="high"
          src={ZERO_HEAD_LOGO_URL}
        />
      </span>
      {!compact ? <span className="brand-logo-tagline">Ton IA. Ton compagnon.</span> : null}
    </span>
  );
}
