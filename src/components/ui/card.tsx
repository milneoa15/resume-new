import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-300/40 hover:shadow-indigo-500/20 dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-slate-900/40",
        className,
      )}
      {...props}
    />
  );
}
