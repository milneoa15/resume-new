"use client";

import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { skillCategories, certifications } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type SkillsMatrixProps = {
  showHeading?: boolean;
};

export function SkillsMatrix({ showHeading = true }: SkillsMatrixProps = {}) {
  return (
    <section id="skills" className="mx-auto max-w-5xl py-20">
      {showHeading ? (
        <SectionHeading
          eyebrow="Expertise"
          title="A versatile toolkit spanning the full development stack"
          description="From low-level systems to modern web frameworks and AI tools, I bring diverse technical expertise to solve complex problems across multiple domains."
        />
      ) : null}
      <div className={`grid gap-6 md:grid-cols-2 ${showHeading ? "mt-14" : "mt-10"}`}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-md shadow-indigo-500/10 dark:border-slate-700/70 dark:bg-slate-900/70"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-indigo-500 dark:text-indigo-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: skillCategories.length * 0.05 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border border-amber-200/70 bg-white/80 p-6 shadow-md shadow-amber-500/10 dark:border-amber-700/70 dark:bg-slate-900/70"
        >
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-amber-500 dark:text-amber-300" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
          </div>
          <div className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl p-4"
              >
                <p className="text-sm font-medium text-slate-900 dark:text-white">{cert.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
