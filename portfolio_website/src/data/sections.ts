export const sectionContent = {
  hero: {
    id: "top",
    actions: {
      projects: {
        href: "#projects",
        label: "My Projects",
      },
      contact: {
        href: "#contact",
        label: "Contact Me",
      },
    },
  },
  about: {
    id: "about",
    label: "About Me",
    title: "Practical, curious, and ready to build",
  },
  projects: {
    id: "projects",
    label: "Projects",
    title: "Things I've built and worked on",
  },
  skills: {
    id: "skills",
    label: "Skills",
    title: "Tools and technologies I use",
  },
  experience: {
    id: "experience",
    label: "Experience",
    title: "What I've been working on",
  },
  contact: {
    id: "contact",
    label: "Contact",
    title: "Let's build something together",
    intro:
      "I'm currently looking for junior full-stack opportunities where I can ship user-focused features, learn quickly, and contribute consistently. Reach out if you'd like to talk about a role, collaboration, or project.",
  },
} as const;
