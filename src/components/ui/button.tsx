"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<"primary" | "secondary" | "ghost", string> = {
  primary:
    "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-amber-500/30 hover:from-orange-400 hover:via-amber-400 hover:to-yellow-400 focus-visible:ring-amber-300",
  secondary:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:ring-white/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100",
  ghost:
    "text-amber-500 hover:bg-amber-500/10 focus-visible:ring-amber-300 dark:text-amber-300 dark:hover:bg-amber-300/10",
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
