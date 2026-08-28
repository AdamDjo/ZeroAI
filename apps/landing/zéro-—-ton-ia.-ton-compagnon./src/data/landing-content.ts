import type { PixelIconName } from '@/components/ui/PixelIcon';
import {
  CHLOE_AVATAR_URL,
  EMMA_AVATAR_URL,
  LUCAS_AVATAR_URL,
  MAXIME_AVATAR_URL,
} from '@/assets/zero-assets';

export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

export interface FeatureItem {
  description: string;
  pixelIcon: PixelIconName;
  title: string;
}

export interface TestimonialItem {
  avatarUrl: string;
  name: string;
  quote: string;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#evolution', label: 'Évolution' },
  { href: '#boutique', label: 'Boutique' },
  { href: '#securite', label: 'Sécurité' },
  { href: '#faq', label: 'FAQ' },
];

export const HERO_PROMISES: readonly FeatureItem[] = [
  { pixelIcon: 'chat', title: 'Il te pose des questions', description: '' },
  { pixelIcon: 'heart', title: 'Il apprend de toi', description: '' },
  { pixelIcon: 'star', title: 'Il grandit avec toi', description: '' },
  { pixelIcon: 'lock', title: 'Il garde vos souvenirs', description: '' },
];

export const FEATURES: readonly FeatureItem[] = [
  {
    pixelIcon: 'chat',
    title: 'Une IA différente',
    description: 'Il ne répond pas seulement, il te comprend vraiment.',
  },
  {
    pixelIcon: 'heart',
    title: 'Mémoire émotionnelle',
    description: 'Il se souvient de ce qui compte vraiment pour toi.',
  },
  {
    pixelIcon: 'growth',
    title: 'Évolution unique',
    description: 'Il évolue selon votre relation et vos moments partagés.',
  },
  {
    pixelIcon: 'lock',
    title: 'Confidentialité totale',
    description: "Tes données t'appartiennent. Tout est chiffré et privé.",
  },
];

export const JOURNEY_STEPS = [
  {
    day: 'Jour 1',
    description: 'Un petit chat, plein de curiosité, te rencontre.',
    pixelIcon: 'sparkle',
    title: 'Il apparaît',
  },
  {
    day: 'Jour 3',
    description: 'Il te pose des questions et découvre ton univers.',
    pixelIcon: 'chat',
    title: 'Il apprend',
  },
  {
    day: 'Jour 30',
    description: 'Il évolue, se personnalise et devient unique.',
    pixelIcon: 'growth',
    title: 'Il grandit',
  },
] as const;

export const CUSTOMIZATION_ITEMS: readonly FeatureItem[] = [
  { pixelIcon: 'brain', title: 'Nourris-le avec tes infos', description: '' },
  { pixelIcon: 'shirt', title: 'Habille-le avec style', description: '' },
  { pixelIcon: 'sparkle', title: 'Collectionne des objets', description: '' },
  { pixelIcon: 'star', title: 'Explore ses personnalités', description: '' },
];

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    avatarUrl: EMMA_AVATAR_URL,
    name: 'Emma',
    quote: 'Zéro se souvient même des petits détails que je lui ai racontés.',
  },
  {
    avatarUrl: LUCAS_AVATAR_URL,
    name: 'Lucas',
    quote: "Chaque jour, j'ai hâte de le voir. Il a vraiment sa propre personnalité.",
  },
  {
    avatarUrl: CHLOE_AVATAR_URL,
    name: 'Chloé',
    quote: "L'app est pleine de petites attentions qui rendent l'expérience magique.",
  },
  {
    avatarUrl: MAXIME_AVATAR_URL,
    name: 'Maxime',
    quote: "Je vois Zéro grandir avec moi, et c'est ce qui le rend vraiment unique.",
  },
];
