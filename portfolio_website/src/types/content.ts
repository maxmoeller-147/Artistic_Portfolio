export type Links = {
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
  socials: Links[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};