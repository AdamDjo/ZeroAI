import type { ReactNode } from 'react';

export type PixelIconName =
  | 'bag'
  | 'brain'
  | 'chat'
  | 'glasses'
  | 'growth'
  | 'heart'
  | 'lock'
  | 'paw'
  | 'play'
  | 'shirt'
  | 'sparkle'
  | 'star';

interface PixelIconProps {
  className?: string;
  name: PixelIconName;
}

const ICON_CONTENT: Record<PixelIconName, ReactNode> = {
  bag: (
    <>
      <path d="M8 11h20v18H8z" fill="#c5965c" stroke="currentColor" strokeWidth="2" />
      <path d="M13 11V7h10v4M12 16h4v4h-4zm8 0h4v4h-4z" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  brain: (
    <>
      <path d="M7 10h4V7h6v3h3V7h6v4h3v13h-4v4H11v-3H7z" fill="#fff9d8" stroke="currentColor" strokeWidth="2" />
      <path d="M13 14h3v3h-3zm7 0h3v3h-3zm-5 7h7v3h-7z" fill="#9dcc3a" />
    </>
  ),
  chat: (
    <>
      <path d="M6 6h24v17H17l-7 6v-6H6z" fill="#fffbe3" stroke="currentColor" strokeWidth="2" />
      <path d="M11 13h3v3h-3zm6 0h3v3h-3zm6 0h3v3h-3z" fill="#94c52d" />
    </>
  ),
  glasses: (
    <>
      <path d="M5 12h11v10H7L5 18zm15 0h11l-2 10h-9z" fill="#d9eb72" stroke="currentColor" strokeWidth="2" />
      <path d="M16 15h4M4 10h5m18 0h5" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  growth: (
    <>
      <path d="M5 27h26" stroke="currentColor" strokeWidth="2" />
      <path d="m7 23 7-8 5 4 10-12" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M22 7h7v7" fill="#b9df52" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  heart: <path d="M18 29 5 17V9l4-4h6l3 4 3-4h6l4 4v8z" fill="#ff766b" stroke="currentColor" strokeWidth="2" />,
  lock: (
    <>
      <path d="M9 15h19v16H9z" fill="#c8ed68" stroke="currentColor" strokeWidth="2" />
      <path d="M13 15V9l5-5 5 5v6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 21h5v6h-5z" fill="currentColor" />
    </>
  ),
  paw: (
    <>
      <path d="M11 19h14l4 7-4 5H11l-4-5z" fill="currentColor" />
      <path d="M7 10h6v8H7zm9-5h6v10h-6zm9 5h6v8h-6z" fill="currentColor" />
    </>
  ),
  play: <path d="M9 5v26l22-13z" fill="#b2d94d" stroke="currentColor" strokeWidth="2" />,
  shirt: (
    <path d="m5 10 8-6h10l8 6-5 8-4-3v16H14V15l-4 3z" fill="#1b2022" stroke="currentColor" strokeWidth="2" />
  ),
  sparkle: (
    <>
      <path d="M18 3v8m0 14v8M3 18h8m14 0h8" stroke="currentColor" strokeWidth="3" />
      <path d="m18 9 3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#c7ea68" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  star: <path d="m18 3 4 10 11 1-8 7 3 10-10-5-10 5 3-10-8-7 11-1z" fill="#ffe28b" stroke="currentColor" strokeWidth="2" />,
};

export function PixelIcon({ className = '', name }: PixelIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      shapeRendering="crispEdges"
      viewBox="0 0 36 36"
    >
      <g strokeLinejoin="miter">{ICON_CONTENT[name]}</g>
    </svg>
  );
}
