import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Un portfolio personal desarrollado como single-page application con foco en diseño limpio, escalabilidad y sistema de themes.",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/maxmoeller-147/Artistic_Portfolio",
  },
  {
    title: "Comics API Server",
    description:
      "API RESTful para gestionar una tienda de cómics, con endpoints para artistas, escritores, clientes, órdenes y editoriales.",
    stack: ["Python", "Flask", "PostgreSQL", "Docker"],
    liveUrl: "https://api-server-comics.onrender.com/comics/",
    repoUrl: "https://github.com/maxmoeller-147/API_Server_Comics",
  },
  {
    title: "Frontend Landing Page",
    description:
      "Hola como estas.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/maxmoeller-147/MERN-Project",
  },
];