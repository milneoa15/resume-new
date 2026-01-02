import type { Certification, SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Office Management",
    items: ["Scheduling & Calendar Management", "Budget Tracking", "Client Relations", "Vendor Management", "Event Coordination"],
  },
  {
    title: "Administrative Systems",
    items: ["Microsoft Word", "Microsoft Excel", "Microsoft Outlook", "QuickBooks", "Database Management", "Document Control"],
  },
  {
    title: "Financial & HR",
    items: ["Accounts Payable/Receivable", "Invoice Processing", "Payroll Coordination", "Expense Management", "HR Documentation", "Compliance"],
  },
  {
    title: "Professional Competencies",
    items: ["Communication", "Organization", "Attention to Detail", "Problem Solving", "Customer Service", "Time Management", "Team Collaboration"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Office Specialist",
    issuer: "Microsoft",
    year: "2018",
  },
];
