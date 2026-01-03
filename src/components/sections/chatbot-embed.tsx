"use client";

import { createElement, useEffect, useState, type HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type GradioAppProps = HTMLAttributes<HTMLElement> & { src?: string; theme_mode?: "light" | "dark" };

const GradioApp = (props: GradioAppProps) => createElement("gradio-app", props);

const GRADIO_SCRIPT_ID = "hf-gradio-embed-script";
const GRADIO_SCRIPT_SRC = "/vendor/gradio/gradio.js";
const FALLBACK_CHATBOT_SRC = "https://olanmi-resume-email-gpt.hf.space";

const DEFAULT_TITLE = "Quick Questions?";
const DEFAULT_DESCRIPTION =
  "This interactive tool can answer common questions about experience, skills, and qualifications. Powered by an AI assistant trained on resume information and deployed on Hugging Face Spaces.";

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
    <Card className="rounded-[2.5rem] border border-amber-100/70 bg-slate-200/80 p-0    ">
      <div className="grid gap-10 px-8 py-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeading eyebrow="AI Chatbot" title={title} description={description} />
          <ul className="space-y-3 text-sm text-slate-600 ">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Get instant answers about professional background and expertise.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Learn about administrative experience and office management capabilities.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Share context about your inquiry before sending a message.
            </li>
          </ul>
        </div>
        <div className="relative rounded-[1.75rem] border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-amber-500/10  ">
          {!resolvedSrc ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-sm text-slate-500 ">
              <p className="font-semibold text-slate-700 ">Chatbot URL missing</p>
              <p className="mt-2 max-w-sm">
                Set <code className="rounded bg-slate-100 px-1 ">NEXT_PUBLIC_HF_CHATBOT_URL</code> to your Hugging Face Space URL to enable the live chatbot embed.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {status !== "ready" ? (
                <div className="flex flex-col gap-2 rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-6 text-center text-sm font-medium text-amber-600   ">
                  Initializing chatbot...
                  <span className="text-xs font-normal text-slate-500 ">Powered by Gradio on Hugging Face Spaces</span>
                </div>
              ) : null}
              {mode === "gradio" ? (
                <GradioApp src={resolvedSrc} theme_mode="light" className="block h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_120px_-60px_rgba(79,70,229,0.4)]  " />
              ) : (
                <iframe
                  src={resolvedSrc}
                  title="Deaane Milne AI Assistant"
                  className="block h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-inner  "
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
