import type { ContactMethod } from "@/types/content";

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "deaane.milne@email.com",
    href: "mailto:deaane.milne@email.com",
    icon: "mail",
    helper: "Best way to reach me.",
  },
  {
    label: "Mobile",
    value: "+64 21 345 6789",
    href: "tel:+64213456789",
    icon: "phone",
    helper: "Reach out within NZ business hours.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deaane-milne",
    href: "https://www.linkedin.com/in/deaane-milne-admin/",
    icon: "linkedin",
    helper: "Connect for professional updates and networking.",
  },
];
