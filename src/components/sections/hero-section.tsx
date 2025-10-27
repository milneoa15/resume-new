"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "@/data/hero";
import { ButtonLink } from "@/components/ui/button";
import { StatHighlight } from "@/components/ui/stat-highlight";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-16 shadow-2xl shadow-indigo-500/30 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_55%)]" />
        <motion.div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
          animate={{ y: [0, 40, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-6rem] right-[-8rem] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em]"
        >
          AI-Driven Engineering
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          {heroContent.name}
          <span className="block text-lg font-light text-indigo-200 sm:text-xl lg:text-2xl">
            {heroContent.title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-pretty text-base text-slate-200 sm:text-lg"
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
              className={action.variant === "secondary" ? "border-white/40" : undefined}
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
