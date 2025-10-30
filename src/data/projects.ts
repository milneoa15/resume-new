import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    name: "Personal Resume Website",
    description:
      "A modern, responsive portfolio website built with Next.js showcasing professional experience, skills, and projects.",
    highlights: [
      "Built with Next.js, TypeScript, and Tailwind CSS for optimal performance",
      "Implements modern web development best practices and responsive design",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    status: "In Production",
    links: [
      { label: "You’re viewing this live site", href: "#", disabled: true },
      { label: "GitHub Repo", href: "https://github.com/milneoa15/resume-new" },
    ],
  },
  {
    name: "YouTube Music Rating & Library Manager",
    description:
      "A full-stack web application for managing, rating, and organizing your YouTube Music library. Import playlists, rate songs, create custom themes, and export curated playlists back to YouTube Music with seamless integration.",
    highlights: [
      "Full YouTube Music integration with OAuth authentication for playlist import and export",
      "Comprehensive song library management with ratings, custom themes, and advanced filtering",
      "Real-time music player with queue management and YouTube IFrame API integration",
      "Supabase backend with PostgreSQL for data persistence and Row Level Security",
      "Serverless API architecture deployed on Vercel for scalable performance",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "YouTube Music API",
      "OAuth 2.0",
    ],
    status: "In Progress",
    links: [
      { label: "Sonic Vault", href: "https://ytmusic-rating-app.vercel.app" },
      { label: "GitHub Repo", href: "https://github.com/milneoa15/ytmusic-rating-app" },
    ],
    note: "Google OAuth currently works only for pre-registered accounts while development continues.",
  },
  {
    name: "Palette Peek",
    description:
      "A Chrome extension that extracts dominant colors from any webpage with a single click. Copy hex codes instantly and customize the palette size to fit your workflow.",
    highlights: [
      "Instant color extraction from any webpage with visual swatches and percentage breakdown",
      "One-click hex code copying directly to clipboard for rapid design workflow",
      "Customizable palette size (3-50 colors) with persistent settings via Chrome sync storage",
      "Built with vanilla JavaScript and Chrome Extension Manifest V3 for optimal performance",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Chrome Extension API (Manifest V3)",
      "Chrome Storage API",
      "Chrome Scripting API",
    ],
    status: "In Production",
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/palette-peek/jmgoliggkghalheoakfboofgfanbphdh" },
      { label: "GitHub Repo", href: "https://github.com/milneoa15/palette-peek" },
    ],
  },
];
