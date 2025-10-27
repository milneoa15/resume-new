import type { Metadata } from "next";
import { SkillsMatrix } from "@/components/sections/skills-matrix";

export const metadata: Metadata = {
  title: "Skills | Oliver Milne",
  description:
    "Technical expertise spanning C, JavaScript, TypeScript, Python, Angular, Node.js, MCP, LLMs, Git, Jenkins, Linux, and networking protocols. CCNA certified.",
};

export default function SkillsPage() {
  return <SkillsMatrix />;
}
