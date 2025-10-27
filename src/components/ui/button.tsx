"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<"primary" | "secondary" | "ghost", string> = {
  primary:
    "bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/30 hover:from-sky-400 hover:via-indigo-400 hover:to-purple-400 focus-visible:ring-indigo-300",
  secondary:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:ring-white/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100",
  ghost:
    "text-indigo-500 hover:bg-indigo-500/10 focus-visible:ring-indigo-300 dark:text-indigo-300 dark:hover:bg-indigo-300/10",
};

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return <button ref={ref} className={cn(baseClasses, variants[variant], className)} {...props} />;
});

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { href, className, variant = "primary", ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    />
  );
});

export { Button, ButtonLink };
