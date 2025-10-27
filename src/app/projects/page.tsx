import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/project-grid";

export const metadata: Metadata = {
  title: "Projects | Oliver Milne",
  description:
    "Featured projects showcasing AI chatbot development, embedded systems optimization, and modern full-stack web applications using MCP, TypeScript, and Next.js.",
};

export default function ProjectsPage() {
  return <ProjectGrid />;
}
