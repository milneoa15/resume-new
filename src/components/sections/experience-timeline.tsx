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
      <Card className="relative overflow-visible border-none bg-slate-200/80 p-8 text-left shadow-2xl shadow-amber-500/10 ring-1 ring-amber-100/60  ">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 ">
          <BriefcaseBusiness className="h-4 w-4" />
          {item.start} — {item.end}
        </div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-xl font-semibold text-slate-900 ">{item.role}</h3>
          <span className="rounded-full border border-amber-200/70 bg-amber-200/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-700   ">
            {item.company}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-600 ">{item.location}</p>
        <p className="mt-4 text-base text-slate-700 ">{item.description}</p>
        <ul className="mt-6 grid gap-3 text-sm text-slate-600 ">
          {item.achievements.map((achievement) => (
            <li key={achievement} className="rounded-2xl bg-white/80 p-4 shadow-sm ">
              {achievement}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500 shadow-sm   "
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
          title="A decade of administrative excellence and operational leadership"
          description="With 10+ years in administrative roles at ScreenSouth NZ and prior experience at Christchurch City Council, I bring proven expertise in office management, client relations, and streamlined operations."
        />
      ) : null}
      <ol
        className={`relative ${showHeading ? "mt-14" : "mt-8"} space-y-10 border-l border-dashed border-amber-200/70 pl-8  md:space-y-12`}
      >
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
        ))}
      </ol>
    </section>
  );
}
