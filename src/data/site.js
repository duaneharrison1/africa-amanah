// Central content config — edit text/links here in one place.

export const contact = {
  phone: '+852 9747 1992',
  email: 'ishandarbari@hotmail.com',
};

// External donation link (GoFundMe)
export const donateUrl =
  'https://www.gofundme.com/f/build-water-wells-bore-ground';

// Main navigation. Items with `children` render as a dropdown.
export const nav = [
  { label: 'Our Mission', href: '/our-mission/' },
  { label: 'Where Is The Gambia', href: '/where-is-the-gambia/' },
  { label: 'Go Fund Me', href: donateUrl, external: true },
  { label: 'About Us', href: '/about-us/' },
  {
    label: 'Our Team',
    href: '/our-team/',
    children: [
      { label: 'Chairman – Alhaji', href: '/our-team/chairman-alhaji/' },
      { label: 'Vice Chairman – Zafar', href: '/our-team/vice-chairman-zafar/' },
      { label: 'International Director – Raj', href: '/our-team/international-director-raj/' },
      { label: 'Project Manager – Hadim', href: '/our-team/project-manager-hadim/' },
    ],
  },
  {
    label: 'Case Study',
    href: '/case-study/',
    children: [
      { label: 'Charity Report 2025', href: '/charity-report-2025/' },
      { label: 'Charity Report 2024', href: '/charity-report-2024/' },
    ],
  },
  { label: 'Gallery', href: '/gallery/' },
];

// Team members (shared between Our Team + About pages)
export const team = [
  {
    name: 'Alhaji Dembo Badjie',
    role: 'Chairman',
    href: '/our-team/chairman-alhaji/',
    photo: 'https://africaamanah.com/wp-content/uploads/2025/06/image-1.png',
  },
  {
    name: 'Zafar Iqbal',
    role: 'Vice Chairman',
    href: '/our-team/vice-chairman-zafar/',
    photo: 'https://africaamanah.com/wp-content/uploads/2025/06/Frame-1707483754.png',
  },
  {
    name: 'Raj Darbari-Linares',
    role: 'International Director',
    href: '/our-team/international-director-raj/',
    photo: 'https://africaamanah.com/wp-content/uploads/2025/06/telegram-cloud-photo-size-5-6332104648982381937-y.png',
  },
  {
    name: 'Hadim Ceesay',
    role: 'Project Manager',
    href: '/our-team/project-manager-hadim/',
    photo: 'https://africaamanah.com/wp-content/uploads/2025/06/Frame-1707483754-1.png',
  },
];

// Asset base on the existing WordPress media library (placeholder host).
// When original assets are moved into /public, swap this to ''.
export const ASSET = 'https://africaamanah.com/wp-content/uploads';
