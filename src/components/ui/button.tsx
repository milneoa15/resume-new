"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<"primary" | "secondary" | "ghost", string> = {
  primary:
    "bg-slate-600 text-white shadow-md shadow-slate-200/50 hover:bg-slate-700 focus-visible:ring-slate-300",
  secondary:
    "border border-slate-200 bg-white/50 text-slate-700 backdrop-blur hover:bg-white/80 focus-visible:ring-slate-200",
  ghost:
    "text-slate-600 hover:bg-slate-600/10 focus-visible:ring-slate-300  ",
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
