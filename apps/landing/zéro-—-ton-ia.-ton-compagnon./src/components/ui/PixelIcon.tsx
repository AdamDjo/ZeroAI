export type PixelIconName =
  | 'chat'
  | 'heart'
  | 'star'
  | 'lock'
  | 'growth'
  | 'brain'
  | 'shirt'
  | 'sparkle';

interface PixelIconProps {
  className?: string;
  name: PixelIconName;
}

const PATHS: Record<PixelIconName, string> = {
  brain: 'M7 12V9h3V6h4v3h2V6h4v3h3v3h2v6h-2v3h-4v3H9v-3H6v-3H4v-6h3Zm4-1v8h2v-3h3v3h2v-8h-2v3h-3v-3h-2Z',
  chat: 'M4 6h24v17H14l-6 5v-5H4V6Zm6 7h3v3h-3v-3Zm6 0h3v3h-3v-3Zm6 0h3v3h-3v-3Z',
  growth: 'M4 25h5v-7h5v-5h5V8h5V3h5v8h-3V8l-5 5-4-2-8 8v6h20v4H4v-4Z',
  heart: 'M16 28 4 17V9l4-4h6l2 3 2-3h6l4 4v8L16 28Z',
  lock: 'M8 14h2V9l6-6 6 6v5h2l3 3v12H5V17l3-3Zm6 0h4v-4l-2-2-2 2v4Zm0 6v5h4v-5h-4Z',
  shirt: 'M4 9 11 4h10l7 5-4 7-4-2v15H12V14l-4 2-4-7Zm10-1 2 3 2-3h-4Z',
  sparkle: 'M16 2h3v8h-3V2Zm0 20h3v8h-3v-8ZM2 15h8v3H2v-3Zm22 0h8v3h-8v-3Zm9-9h3v4h-3V6Zm0 15h3v4h-3v-4Z',
  star: 'm16 3 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z',
};

export function PixelIcon({ className = '', name }: PixelIconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 36 32">
      <path d={PATHS[name]} />
    </svg>
  );
}
