"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-6 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80">
      <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
        <span className="rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-3 py-1 text-xs uppercase text-white">
          Oliver Milne
        </span>
      </Link>
      <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 transition",
              pathname === link.href
                ? "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-200"
                : "hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-200",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-600 dark:text-slate-200 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {isOpen ? (
        <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-2 rounded-3xl border border-white/30 bg-white/90 p-4 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/90 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-200"
                  : "hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-200",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
