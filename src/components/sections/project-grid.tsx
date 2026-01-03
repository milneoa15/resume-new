"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectItem } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const statusVariant: Record<ProjectItem["status"], "success" | "info" | "neutral"> = {
  "In Production": "success",
  "In Progress": "info",
  "Case Study": "neutral",
  Concept: "info",
};

type ProjectGridProps = {
  showHeading?: boolean;
};

export function ProjectGrid({ showHeading = true }: ProjectGridProps = {}) {
  return (
    <section id="projects" className="mx-auto max-w-5xl py-20">
      {showHeading ? (
        <SectionHeading
          eyebrow="Personal Projects"
          title="Building and learning through side projects"
          description="Side projects where I explore new technologies, refine my skills, and bring ideas to life through hands-on development."
        />
      ) : null}
      <div className={`grid gap-8 sm:grid-cols-2 ${showHeading ? "mt-14" : "mt-10"}`}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="h-full border border-amber-100/80 bg-slate-200/80 p-8 text-left  ">
              <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 ">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600 ">{project.description}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 ">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-white/80 p-4 ">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500   "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.links && project.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const content = (
                      <>
                        {link.label}
                        {!link.disabled ? <ArrowUpRight className="h-4 w-4" /> : null}
                      </>
                    );

                    if (link.disabled) {
                      return (
                        <span
                          key={link.label}
                          aria-disabled="true"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-100/70 px-4 py-2 text-sm font-medium text-slate-400   "
                        >
                          {content}
                        </span>
                      );
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-400/20  "
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
              {project.note ? (
                <p className="mt-4 text-xs text-slate-500 ">
                  {project.note}
                </p>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
