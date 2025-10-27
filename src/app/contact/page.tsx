import type { Metadata } from "next";
import { ContactPanel } from "@/components/sections/contact-panel";

export const metadata: Metadata = {
  title: "Contact | Oliver Milne",
  description:
    "Get in touch for AI-focused roles, product collaborations, and consulting opportunities. Connect via email, LinkedIn, GitHub, or phone.",
};

export default function ContactPage() {
  return <ContactPanel />;
}
