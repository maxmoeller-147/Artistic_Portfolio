export type Links = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  socials: Links[];
};