import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide";

const variants: Record<"success" | "info" | "neutral", string> = {
  success:
    "border-emerald-400/40 bg-emerald-400/10 text-emerald-500  ",
  info:
    "border-sky-400/40 bg-sky-400/10 text-sky-500  ",
  neutral:
    "border-slate-400/40 bg-slate-400/10 text-slate-600  ",
};

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: keyof typeof variants;
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return <span className={cn(baseClasses, variants[variant], className)} {...props} />;
}
