import { SocialLink, FooterSection } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'ri-github-fill',
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: 'ri-linkedin-fill',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: 'ri-twitter-fill',
    url: 'https://twitter.com/yourusername',
  },
  {
    name: 'Email',
    icon: 'ri-mail-fill',
    url: 'mailto:your.email@example.com',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consulting', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'api', label: 'API' },
  { id: 'opensource', label: 'Open Source' },
];
