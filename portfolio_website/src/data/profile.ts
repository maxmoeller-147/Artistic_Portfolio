import type { Profile } from "../types/content";

// Main personal profile used by hero, about, contact, and header components.
export const profile: Profile = {
  name: "Max Moeller",
  role: "Full Stack Web Developer",
  tagline: "dope",
  summary:
    "Hi, Im Max.",
  about: 
    "hola mundo como estas",
  location: "Sydney, Australia",
  email: "maximomoeller@gmail.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/maxmoeller-147",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/max-moeller-2b7282396/",
    },
  ],
};
