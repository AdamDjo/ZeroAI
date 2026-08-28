import { BrandLogo } from './ui/BrandLogo';
import { SocialIcon, type SocialIconName } from './ui/SocialIcon';

const FOOTER_GROUPS = [
  {
    label: 'Produit',
    links: [
      { href: '#fonctionnalites', label: 'Fonctionnalités' },
      { href: '#evolution', label: 'Évolution' },
      { href: '#boutique', label: 'Boutique' },
    ],
  },
  {
    label: 'Entreprise',
    links: [
      { href: '#top', label: 'À propos' },
      { href: '#testimonials-title', label: 'Communauté' },
      { href: '#faq', label: 'Carrières' },
    ],
  },
  {
    label: 'Support',
    links: [
      { href: '#faq', label: "Centre d'aide" },
      { href: '#faq', label: 'Contact' },
      { href: '#securite', label: 'Confidentialité' },
    ],
  },
] as const;

const SOCIAL_LINKS: readonly { href: string; label: string; name: SocialIconName }[] = [
  { href: 'https://instagram.com', label: 'Instagram', name: 'instagram' },
  { href: 'https://tiktok.com', label: 'TikTok', name: 'tiktok' },
  { href: 'https://x.com', label: 'X', name: 'x' },
  { href: 'https://youtube.com', label: 'YouTube', name: 'youtube' },
];

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
          {FOOTER_GROUPS.map((group) => (
            <div className="footer-link-group" key={group.label}>
              <strong>{group.label}</strong>
              {group.links.map((item) => (
                <a href={item.href} key={`${group.label}-${item.label}`}>{item.label}</a>
              ))}
            </div>
          ))}
        </nav>
        <div className="footer-social-block">
          <strong>Rejoins-nous</strong>
          <div className="footer-socials">
            {SOCIAL_LINKS.map((social) => (
              <a aria-label={social.label} href={social.href} key={social.name} rel="noreferrer" target="_blank">
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 border-t border-line pt-6 text-xs text-muted">
        © 2026 Zéro. Tous droits réservés.
      </p>
    </footer>
  );
}
