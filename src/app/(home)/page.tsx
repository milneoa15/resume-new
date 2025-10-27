import { ContactPanel } from "@/components/sections/contact-panel";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { SkillsMatrix } from "@/components/sections/skills-matrix";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ExperienceTimeline />
      <ProjectGrid />
      <SkillsMatrix />
      <ContactPanel />
    </div>
  );
}
