"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import type { ExperienceItem } from "@/types/content";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <Card className="relative overflow-visible border-none bg-white/80 p-8 text-left shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-100/60 dark:bg-slate-900/80 dark:ring-slate-700/80">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
          <BriefcaseBusiness className="h-4 w-4" />
          {item.start} — {item.end}
        </div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
          <span className="rounded-full border border-indigo-200/70 bg-indigo-200/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-700 dark:border-indigo-400/40 dark:bg-indigo-400/10 dark:text-indigo-200">
            {item.company}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.location}</p>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-200">{item.description}</p>
        <ul className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
          {item.achievements.map((achievement) => (
            <li key={achievement} className="rounded-2xl bg-white/60 p-4 shadow-sm dark:bg-slate-800/60">
              {achievement}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.li>
  );
}

type ExperienceTimelineProps = {
  showHeading?: boolean;
};

export function ExperienceTimeline({ showHeading = true }: ExperienceTimelineProps = {}) {
  return (
    <section id="experience" className="mx-auto max-w-5xl py-20">
      {showHeading ? (
        <SectionHeading
          eyebrow="Experience"
          title="From embedded systems to full-stack development and AI engineering"
          description="I started my career in embedded networking systems, but discovered my passion lies in building modern web applications and intelligent AI tools that transform how users interact with technology."
        />
      ) : null}
      <ol
        className={`relative ${showHeading ? "mt-14" : "mt-8"} space-y-10 border-l border-dashed border-indigo-200/70 pl-8 dark:border-indigo-500/30 md:space-y-12`}
      >
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
        ))}
      </ol>
    </section>
  );
}
