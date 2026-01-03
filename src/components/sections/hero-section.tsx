"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "@/data/hero";
import { ButtonLink } from "@/components/ui/button";
import { StatHighlight } from "@/components/ui/stat-highlight";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-200/80 px-6 py-16 shadow-2xl shadow-slate-200/50 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(161,188,152,0.15),_transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl text-center text-slate-700">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-600"
        >
          Administrative Excellence
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-balance text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl"
        >
          {heroContent.name}
          <span className="block text-lg font-light text-slate-600 sm:text-xl lg:text-2xl">
            {heroContent.title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-pretty text-base text-slate-600 sm:text-lg"
        >
          {heroContent.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {heroContent.actions.map((action) => (
            <ButtonLink
              key={action.href}
              href={action.href}
              variant={action.variant === "secondary" ? "secondary" : "primary"}
              className={action.variant === "secondary" ? "bg-white/80 text-slate-700 border-slate-200" : "bg-slate-600 text-white"}
            >
              <span className="flex items-center gap-2">
                {action.label}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </ButtonLink>
          ))}
        </motion.div>
      </div>
      <div className="relative mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {heroContent.stats.map((stat, index) => (
          <StatHighlight key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}
