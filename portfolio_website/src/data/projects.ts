import type { Project } from "@/types/content";

// Project cards shown in the Projects section.
export const projects: Project[] = [
  {
    title: "MERN Chat App",
    description:
      "Real-time chat application built in a collaborative team environment. It supports authenticated users, WebSocket messaging with Socket.IO, JWT-protected routes, RESTful user and message APIs, input validation, centralized error handling, MongoDB data modeling, and backend tests.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Jest", "Vitest"],
    repoUrl: "https://github.com/maxmoeller-147/MERN-Project",
  },
  {
    title: "Artistic Portfolio",
    description:
      "Personal portfolio site built as a fast, maintainable single-page experience. It uses reusable Astro components, shared content data, responsive CSS, and a structured design system to present projects, skills, experience, and contact details.",
    stack: ["Astro", "TypeScript", "CSS", "Responsive Design"],
    repoUrl: "https://github.com/maxmoeller-147/Artistic_Portfolio",
  },
  {
    title: "Comics API Server",
    description:
      "RESTful API for a comics store with endpoints for comics, artists, writers, customers, orders, and publishers. The project applies Flask routing, PostgreSQL persistence, Docker-based setup, testing, and cloud deployment fundamentals.",
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "REST API"],
    liveUrl: "https://api-server-comics.onrender.com/comics/",
    repoUrl: "https://github.com/maxmoeller-147/API_Server_Comics",
  },
];
