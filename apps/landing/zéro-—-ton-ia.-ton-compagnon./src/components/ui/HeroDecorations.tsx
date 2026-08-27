import { Heart } from 'lucide-react';
import { PixelIcon } from './PixelIcon';

export function HeroDecorations() {
  return (
    <div aria-hidden="true" className="hero-decorations">
      <span className="hero-sparkle hero-sparkle-one"><PixelIcon name="sparkle" /></span>
      <span className="hero-sparkle hero-sparkle-two"><PixelIcon name="sparkle" /></span>
      <span className="hero-sparkle hero-sparkle-three"><PixelIcon name="sparkle" /></span>
      <span className="hero-sparkle hero-sparkle-four"><PixelIcon name="sparkle" /></span>
      <span className="hero-heart-card"><Heart fill="currentColor" size={21} /></span>
      <span className="hero-pixel-plus hero-pixel-plus-one">+</span>
      <span className="hero-pixel-plus hero-pixel-plus-two">+</span>
    </div>
  );
}
