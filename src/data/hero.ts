import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  name: "Oliver Milne",
  title: "Software Engineer & AI Developer",
  mission:
    "Build innovative AI solutions that elevate user experiences and drive intelligent automation.",
  summary:
    "I specialise in bringing modern web platforms and intelligent automation to life. From full-stack development to shaping cutting-edge conversational AI tools, I craft resilient solutions that enhance both user and business outcomes.",
  stats: [
    { label: "Professional Experience", value: "2 years 8 months" },
    { label: "Education", value: "Bachelor of Computer Science • University of Canterbury" },
  ],
  actions: [
    { label: "Explore Experience", href: "/experience", variant: "primary" },
    { label: "View Projects", href: "/projects", variant: "secondary" },
  ],
};
