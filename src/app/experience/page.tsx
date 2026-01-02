import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Experience | Deaane Milne",
  description:
    "Professional experience in administrative roles at ScreenSouth NZ and Christchurch City Council. 10+ years of office management and organizational excellence.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
