import Link from "next/link";
import { homeContent } from "@/domain/content/home";

export function HeroSection() {
  const { hero } = homeContent;
  return (
    <section
      className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.25),transparent)]"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400/90">
          Blockchain SUI
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#cta"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 text-sm font-semibold text-[#030508] shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            {hero.primaryCta}
          </Link>
          <Link
            href="#solucion"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
