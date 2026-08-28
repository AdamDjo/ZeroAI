export type SocialIconName = 'instagram' | 'tiktok' | 'x' | 'youtube';

interface SocialIconProps {
  name: SocialIconName;
}

export function SocialIcon({ name }: SocialIconProps) {
  if (name === 'instagram') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-fill" cx="17.4" cy="6.7" r="1" />
      </svg>
    );
  }

  if (name === 'tiktok') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14.1 4v10.3a4.35 4.35 0 1 1-3.7-4.3v3.15a1.35 1.35 0 1 0 .7 1.18V4h3Zm0 0c.35 2.15 1.72 3.46 3.9 3.85v3.05a8.1 8.1 0 0 1-3.9-1.45" />
      </svg>
    );
  }

  if (name === 'x') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 4.5h4.1l10 15H15l-10-15Zm1.7 15L17.8 4.5H20L8.9 19.5H6.7Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M21 8.15a3.15 3.15 0 0 0-2.2-2.23C16.86 5.4 12 5.4 12 5.4s-4.86 0-6.8.52A3.15 3.15 0 0 0 3 8.15 33 33 0 0 0 2.6 12 33 33 0 0 0 3 15.85a3.15 3.15 0 0 0 2.2 2.23c1.94.52 6.8.52 6.8.52s4.86 0 6.8-.52a3.15 3.15 0 0 0 2.2-2.23A33 33 0 0 0 21.4 12a33 33 0 0 0-.4-3.85Z" />
      <path className="social-icon-play" d="m10 15.1 5.2-3.1L10 8.9v6.2Z" />
    </svg>
  );
}
