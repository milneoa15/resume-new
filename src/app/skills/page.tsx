import type { Metadata } from "next";
import { SkillsMatrix } from "@/components/sections/skills-matrix";

export const metadata: Metadata = {
  title: "Skills | Deaane Milne",
  description:
    "Administrative expertise spanning office management, scheduling, Microsoft Office, QuickBooks, financial administration, and professional competencies.",
};

export default function SkillsPage() {
  return <SkillsMatrix />;
}
