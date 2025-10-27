import type { Certification, SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C", "Lua", "Bash", "HTML", "CSS", "XML", "JSON"],
  },
  {
    title: "Frameworks & Platforms",
    items: ["Node.js", "Express.js", "Angular.JS", "REST APIs", "Next.js", "MCP", "LLMs"],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub Copilot", "Visual Studio Code", "Jenkins", "Jira", "Linux", "Docker"],
  },
  {
    title: "Systems & Methodologies",
    items: ["Linux Kernel", "Networking", "Network Switches", "Agile Methodologies", "Problem Solving"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2023",
  },
];
