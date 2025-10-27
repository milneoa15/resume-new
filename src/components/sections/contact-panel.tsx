"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contactMethods } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const iconMap = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
} as const;

export function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl py-20">
      <SectionHeading
        eyebrow="Contact Me"
        title="Reach out about roles or collaborations"
        description="Reach out for full-time roles, contract partnerships, or any questions you have, I’m always happy to talk."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_0.95fr]">
        <div className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = iconMap[method.icon];
            return (
              <Card
                key={method.label}
                className="flex items-center justify-between gap-4 rounded-3xl border border-indigo-100/70 bg-white/80 p-6 text-left dark:border-slate-700/70 dark:bg-slate-900/70"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                    <Icon className="h-5 w-5 text-indigo-500 dark:text-indigo-300" />
                    {method.label}
                  </div>
                  <a
                    href={method.href}
                    className="mt-1 block text-base font-medium text-indigo-600 underline-offset-4 transition hover:underline dark:text-indigo-300"
                  >
                    {method.value}
                  </a>
                  {method.helper ? (
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{method.helper}</p>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[2.5rem] border border-indigo-100/70 bg-white p-8 shadow-xl shadow-indigo-500/10 dark:border-slate-700/70 dark:bg-slate-900/80"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em]">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Please share your name" })}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
              />
              {errors.name ? (
                <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em]">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Please provide a valid email" },
                })}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Tell me a bit about your idea or role" })}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white"
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
              ) : null}
            </div>
          </div>
          <div className="mt-6">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
              The form posts to a Vercel serverless function placeholder while integrations are finalised.
            </p>
            {status === "success" ? (
              <p className="mt-3 rounded-2xl bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                Thanks for reaching out! I&apos;ll get back to you shortly.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-3 rounded-2xl bg-rose-400/10 px-4 py-3 text-sm font-medium text-rose-600 dark:text-rose-300">
                Hmm, something went wrong. Could you send me an email directly instead?
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
