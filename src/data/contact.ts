import type { ContactMethod } from "@/types/content";

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "milneoa15@outlook.com",
    href: "mailto:milneoa15@outlook.com",
    icon: "mail",
    helper: "Best way to reach me.",
  },
  {
    label: "Mobile",
    value: "+64 27 949 8694",
    href: "tel:+64279498694",
    icon: "phone",
    helper: "Reach out within NZ business hours.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/oliver-milne",
    href: "https://www.linkedin.com/in/oliver-milne-5446b7325/",
    icon: "linkedin",
    helper: "Connect for professional updates and networking.",
  },
  {
    label: "GitHub",
    value: "github.com/milneoa15",
    href: "https://github.com/milneoa15",
    icon: "github",
    helper: "Explore public repositories.",
  },
];
