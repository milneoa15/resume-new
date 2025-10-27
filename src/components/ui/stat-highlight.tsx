"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/types/content";

type StatHighlightProps = {
  stat: Stat;
  index: number;
};

export function StatHighlight({ stat, index }: StatHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }}
      className="rounded-3xl border border-indigo-200/60 bg-white/80 px-6 py-5 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/70"
    >
      <div className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300">
        {stat.value}
      </div>
      <div className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {stat.label}
      </div>
      {stat.description ? (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.description}</p>
      ) : null}
    </motion.div>
  );
}
