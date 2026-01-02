import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  name: "Deaane Milne",
  title: "Administrative Professional",
  mission:
    "Deliver efficient administrative support and organizational excellence to drive business success.",
  summary:
    "With nearly a decade of dedicated administrative experience at ScreenSouth NZ, I specialise in streamlining operations, managing complex scheduling, and providing comprehensive support to teams and leadership. Known for attention to detail, proactive problem-solving, and maintaining smooth office operations.",
  stats: [
    { label: "Professional Experience", value: "10+ years" },
    { label: "Current Role", value: "Admin • ScreenSouth NZ, Christchurch" },
  ],
  actions: [
    { label: "Explore Experience", href: "/experience", variant: "primary" },
    { label: "Get In Touch", href: "/contact", variant: "secondary" },
  ],
};
