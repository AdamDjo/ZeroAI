import { ZERO_MASTER_URL } from '@/assets/zero-assets';

interface ZeroCharacterProps {
  alt?: string;
  className?: string;
  eager?: boolean;
}

export function ZeroCharacter({
  alt = 'Zéro, le compagnon IA en pixel art',
  className = '',
  eager = false,
}: ZeroCharacterProps) {
  return (
    <img
      alt={alt}
      className={`pixel-crisp select-none object-contain ${className}`}
      decoding="async"
      draggable={false}
      fetchPriority={eager ? 'high' : 'auto'}
      loading={eager ? 'eager' : 'lazy'}
      src={ZERO_MASTER_URL}
    />
  );
}
