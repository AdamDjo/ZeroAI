import { Instagram, Youtube } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/data/landing-content';
import { BrandLogo } from './ui/BrandLogo';

export function Footer() {
  return (
    <footer className="page-shell pb-10 pt-12" id="faq">
      <div className="footer-grid">
        <div>
          <a aria-label="Zéro — accueil" className="brand-mark" href="#top">
            <BrandLogo compact />
          </a>
          <p className="mt-2 text-sm text-muted">Ton IA. Ton compagnon.</p>
        </div>
        <nav aria-label="Navigation de pied de page" className="footer-links">
          {NAVIGATION_ITEMS.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="footer-socials">
          <a aria-label="Instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
            <Instagram aria-hidden="true" size={19} />
          </a>
          <a aria-label="YouTube" href="https://youtube.com" rel="noreferrer" target="_blank">
            <Youtube aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
      <p className="mt-8 border-t border-line pt-6 text-xs text-muted">
        © 2026 Zéro. Tous droits réservés.
      </p>
    </footer>
  );
}
