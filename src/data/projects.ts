import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    name: "Personal Resume Website",
    description:
      "A modern, responsive portfolio website built with Next.js showcasing professional experience, skills, and projects.",
    highlights: [
      "Built with Next.js, TypeScript, and Tailwind CSS for optimal performance.",
      "Implements modern web development best practices and responsive design.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    status: "In Production",
    links: [{ label: "You’re viewing this live site", href: "#", disabled: true }],
  },
];
