// Shared content models keep section props and data files in sync.
export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  about: string;
  location: string;
  email: string;
  socials: LinkItem[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};
