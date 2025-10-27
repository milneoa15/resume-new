import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Experience | Oliver Milne",
  description:
    "Professional experience at Allied Telesis building mission-critical networking software and conversational AI. 2.5+ years of hands-on development.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
