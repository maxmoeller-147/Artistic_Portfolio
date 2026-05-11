import type { SkillCategory } from "../types/content";

// Skill groups rendered as reusable tag lists in the Skills section.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Astro"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "CSS Variables", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];
