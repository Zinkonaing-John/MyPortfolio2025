export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: { name: string; color: string }[];
  demoLink: string;
  codeLink: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
  responsibilities?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FooterSection {
  title: string;
  links: { name: string; href: string }[];
}
