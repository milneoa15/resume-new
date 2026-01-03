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
  title: "Deaane Milne | Administrative Professional",
  description:
    "Administrative professional with 10+ years of experience at ScreenSouth NZ in Christchurch. Specializing in office management, scheduling, client relations, and organizational excellence.",
  keywords: [
    "Administrative Professional",
    "Office Management",
    "Scheduling",
    "Client Relations",
    "Christchurch",
    "ScreenSouth NZ",
    "Deaane Milne",
    "HR Administration",
  ],
  authors: [{ name: "Deaane Milne" }],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://deaanemilne.nz",
    title: "Deaane Milne | Administrative Professional",
    description:
      "Administrative professional with 10+ years of experience. Specializing in office management and organizational excellence.",
    siteName: "Deaane Milne Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaane Milne | Administrative Professional",
    description:
      "Administrative professional with 10+ years of experience specializing in office management and organizational excellence.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ScrollProgressBar />
        <Header />
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
