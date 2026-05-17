import type { SkillCategory } from "@/types/content";

// Skill groups rendered as reusable tag lists in the Skills section.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UX/UI Thinking"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs", "Validation", "Error Handling"],
  },
  {
    title: "Databases",
    items: ["SQL", "PostgreSQL", "MongoDB", "Mongoose", "Data Modeling"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Branches", "Pull Requests", "VS Code", "Debugging", "Documentation"],
  },
  {
    title: "Testing & Deployment",
    items: ["Jest", "Vitest", "Pytest Basics", "Testable Code", "DevOps Basics", "Deployment Setup"],
  },
];
