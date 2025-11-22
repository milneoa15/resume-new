"use client";

import { createElement, useEffect, useState, type HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type GradioAppProps = HTMLAttributes<HTMLElement> & { src?: string };

const GradioApp = (props: GradioAppProps) => createElement("gradio-app", props);

const GRADIO_SCRIPT_ID = "hf-gradio-embed-script";
const GRADIO_SCRIPT_SRC = "/vendor/gradio/gradio.js";
const FALLBACK_CHATBOT_SRC = "https://olanmi-resume-email-gpt.hf.space";

const DEFAULT_TITLE = "Chat with my AI copilot";
const DEFAULT_DESCRIPTION =
  "Ask about my experience, projects, or how I can help your team. The bot is powered by an OpenAI-assisted workflow I deployed on Hugging Face Spaces.";

export type ChatbotEmbedProps = {
  src?: string;
  title?: string;
  description?: string;
};

export function ChatbotEmbed({
  src: overrideSrc,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: ChatbotEmbedProps) {
  const resolvedSrc = (overrideSrc ?? process.env.NEXT_PUBLIC_HF_CHATBOT_URL ?? FALLBACK_CHATBOT_SRC).trim();
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(resolvedSrc ? "loading" : "idle");
  const [mode, setMode] = useState<"gradio" | "iframe">("gradio");

  useEffect(() => {
    if (!resolvedSrc) {
      setStatus("idle");
      return;
    }

    if (mode === "iframe") {
      setStatus("ready");
      return;
    }

    const existingScript = document.getElementById(GRADIO_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript?.dataset.loaded === "true") {
      setStatus("ready");
      return;
    }

    setStatus("loading");

    const script = existingScript ?? document.createElement("script");
    script.id = GRADIO_SCRIPT_ID;
    script.src = GRADIO_SCRIPT_SRC;
    script.type = "module";
    script.async = true;

    const handleLoad = () => {
      script.dataset.loaded = "true";
      setStatus("ready");
    };

    const handleError = () => {
      console.error("Failed to load Gradio embed script");
      setMode("iframe");
      setStatus("ready");
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    if (!existingScript) {
      document.body.appendChild(script);
    } else if (existingScript.dataset.loaded === "true") {
      handleLoad();
    }

    const timeout = window.setTimeout(() => {
      if (document.getElementById(GRADIO_SCRIPT_ID)?.dataset.loaded !== "true") {
        setMode("iframe");
        setStatus("ready");
      }
    }, 5000);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
      window.clearTimeout(timeout);
    };
  }, [resolvedSrc, mode]);

  return (
    <Card className="rounded-[2.5rem] border border-indigo-100/70 bg-gradient-to-br from-white via-white to-indigo-50 p-0 dark:border-slate-700/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      <div className="grid gap-10 px-8 py-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeading eyebrow="AI Chatbot" title={title} description={description} />
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Get instant answers about my technical background and current availability.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Explore how I combine Hugging Face Spaces, Gradio, and OpenAI APIs in production.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Share the context of your project before dropping a message in the form.
            </li>
          </ul>
        </div>
        <div className="relative rounded-[1.75rem] border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-indigo-500/10 dark:border-slate-700 dark:bg-slate-900/70">
          {!resolvedSrc ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-sm text-slate-500 dark:text-slate-400">
              <p className="font-semibold text-slate-700 dark:text-slate-100">Chatbot URL missing</p>
              <p className="mt-2 max-w-sm">
                Set <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">NEXT_PUBLIC_HF_CHATBOT_URL</code> to your Hugging Face Space URL to enable the live chatbot embed.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {status !== "ready" ? (
                <div className="flex flex-col gap-2 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 px-4 py-6 text-center text-sm font-medium text-indigo-600 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">
                  Initializing chatbot...
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Powered by Gradio on Hugging Face Spaces</span>
                </div>
              ) : null}
              {mode === "gradio" ? (
                <GradioApp src={resolvedSrc} className="block h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_120px_-60px_rgba(79,70,229,0.4)] dark:border-slate-700 dark:bg-slate-900" />
              ) : (
                <iframe
                  src={resolvedSrc}
                  title="Oliver Milne AI Chatbot"
                  className="block h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-inner dark:border-slate-700 dark:bg-slate-900"
                  allow="clipboard-write;microphone;camera"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
