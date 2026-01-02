import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-sm text-slate-600 shadow-inner shadow-amber-500/5 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-300">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-300">Deaane Milne</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Administrative Professional
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/experience" className="transition hover:text-amber-500 dark:hover:text-amber-300">
            Experience
          </Link>
          <Link href="/skills" className="transition hover:text-amber-500 dark:hover:text-amber-300">
            Skills
          </Link>
          <Link href="/contact" className="transition hover:text-amber-500 dark:hover:text-amber-300">
            Contact
          </Link>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} olanmi. Built with Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}
