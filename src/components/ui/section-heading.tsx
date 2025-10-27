"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className={cn("mx-auto max-w-3xl text-center", className)}
    >
      {eyebrow ? (
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400/90">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
