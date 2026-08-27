import { Menu, PawPrint, X } from 'lucide-react';
import { useState } from 'react';
import { NAVIGATION_ITEMS } from '@/data/landing-content';
import { BrandLogo } from './ui/BrandLogo';

interface NavbarProps {
  onAdoptClick: () => void;
}

export function Navbar({ onAdoptClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleAdoptClick() {
    closeMenu();
    onAdoptClick();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-page/90 backdrop-blur-lg">
      <div className="page-shell flex h-20 items-center justify-between gap-8">
        <a aria-label="Zéro — accueil" className="brand-mark" href="#top">
          <BrandLogo />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="button-primary desktop-cta" onClick={onAdoptClick} type="button">
          Adopter Zéro
          <PawPrint aria-hidden="true" size={18} />
        </button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="icon-button mobile-menu-button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-line bg-page px-6 py-5 md:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a className="mobile-nav-link" href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <button className="button-primary mt-3 justify-center" onClick={handleAdoptClick} type="button">
              Adopter Zéro
              <PawPrint aria-hidden="true" size={18} />
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
