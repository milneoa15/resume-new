import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oliver Milne | Software Engineer & AI Developer",
  description:
    "Software Engineer and AI Developer specializing in modern web platforms, intelligent automation, and embedded networking systems. 2.5+ years building resilient solutions at Allied Telesis.",
  keywords: [
    "Software Engineer",
    "AI Developer",
    "Full Stack Developer",
    "MCP",
    "Model Context Protocol",
    "Next.js",
    "TypeScript",
    "Embedded Systems",
    "CCNA",
    "Oliver Milne",
  ],
  authors: [{ name: "Oliver Milne" }],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://olivermilne.dev",
    title: "Oliver Milne | Software Engineer & AI Developer",
    description:
      "Software Engineer and AI Developer specializing in modern web platforms, intelligent automation, and embedded networking systems.",
    siteName: "Oliver Milne Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Milne | Software Engineer & AI Developer",
    description:
      "Software Engineer and AI Developer specializing in modern web platforms, intelligent automation, and embedded networking systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 antialiased dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-900`}
      >
        <ScrollProgressBar />
        <Header />
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
