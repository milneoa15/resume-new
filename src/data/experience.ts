import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Allied Telesis",
    role: "Full-stack Developer",
    start: "Jul 2025",
    end: "Present",
    location: "Christchurch, NZ (Hybrid)",
    description:
      "Developing and enhancing the web application Vista Manager, primarily working with Angular for frontend development. Collaborating in an agile environment, applying modern web development practices.",
    achievements: [
      "Building and improving a chatbot integrated with an MCP server and client to enable intelligent interactions and automation using AI tools and large language models.",
      "Ensuring seamless communication between the chatbot and backend services to deliver efficient and user-friendly AI-driven features within the Vista Manager platform.",
      "Working with TypeScript, RESTful API integration, and reactive programming in a fast-paced development setting.",
    ],
    technologies: ["Angular", "TypeScript", "REST APIs", "MCP", "Git", "Jira"],
  },
  {
    company: "Allied Telesis",
    role: "Software Engineer",
    start: "Feb 2023",
    end: "Jul 2025",
    location: "Christchurch, NZ",
    description:
      "Designed and developed software solutions for advanced network switches and routers. Worked efficiently both independently and as a team to brainstorm complex solutions to networking and programming problems.",
    achievements: [
      "Utilized C as primary language, as well as XML, JSON, Lua, and Bash for various development tasks.",
      "Expertly used development tools such as Git, Jira, and Gerrit to work efficiently in a fast-paced agile development environment.",
      "Passed the CCNA certification which provided knowledge of networking concepts to better create solutions.",
    ],
    technologies: ["C", "Bash", "Python", "Lua", "XML", "JSON", "Git", "Jira", "Jenkins", "Linux"],
  },
];
