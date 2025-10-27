export type Stat = {
  label: string;
  value: string;
  description?: string;
};

export type HeroContent = {
  name: string;
  title: string;
  mission: string;
  summary: string;
  stats: Stat[];
  actions: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: "In Production" | "In Progress" | "Case Study" | "Concept";
  links?: {
    label: string;
    href: string;
    disabled?: boolean;
  }[];
  note?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "linkedin" | "github";
  helper?: string;
};
