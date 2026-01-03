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
      className="rounded-3xl border border-slate-200 bg-white/80 px-6 py-5 shadow-lg shadow-slate-200/20 backdrop-blur  "
    >
      <div className="text-2xl font-semibold text-slate-700 ">
        {stat.value}
      </div>
      <div className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-500 ">
        {stat.label}
      </div>
      {stat.description ? (
        <p className="mt-2 text-sm text-slate-600 ">{stat.description}</p>
      ) : null}
    </motion.div>
  );
}
