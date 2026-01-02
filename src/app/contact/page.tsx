import type { Metadata } from "next";
import { ContactPanel } from "@/components/sections/contact-panel";

export const metadata: Metadata = {
  title: "Contact | Deaane Milne",
  description:
    "Get in touch with Deaane Milne for administrative opportunities, consulting, and professional networking. Connect via email, LinkedIn, or phone.",
};

export default function ContactPage() {
  return <ContactPanel />;
}
