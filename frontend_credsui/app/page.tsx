import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  LayoutDashboard,
  ScanLine,
  ShieldCheck,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";
import { homeContent } from "@/app/domain/content/home";

const featureIcons: Record<
  (typeof homeContent.features.items)[number]["id"],
  LucideIcon
> = {
  dashboard: LayoutDashboard,
  verify: ScanLine,
  wallet: Wallet,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-[#05080f]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-cyan-400 transition hover:text-cyan-300"
          >
            {homeContent.brand}
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm text-zinc-400 md:flex"
            aria-label="Secciones"
          >
            {homeContent.nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-zinc-100"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/verify"
              className="hidden rounded-md border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 sm:inline-block"
            >
              Verificar
            </Link>
            <Link
              href="/dashboard"
              className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-zinc-950 transition hover:bg-cyan-400"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-zinc-800/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(900px circle at 50% -20%, rgba(34, 211, 238, 0.12), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              {homeContent.brand}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl md:leading-tight">
              {homeContent.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              {homeContent.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 font-medium text-zinc-950 transition hover:bg-cyan-400"
              >
                {homeContent.hero.primaryCta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-600 bg-zinc-900/40 px-5 py-2.5 font-medium text-zinc-100 transition hover:border-cyan-500/50 hover:text-cyan-200"
              >
                Verificación demo
                <ScanLine className="size-4" aria-hidden />
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex items-center rounded-md border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 transition hover:border-zinc-500"
              >
                {homeContent.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800/60 bg-zinc-950/40">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
            {homeContent.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-800/80 bg-[#0a1018]/80 px-5 py-4"
              >
                <p className="text-2xl font-semibold text-cyan-400">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-zinc-200">{s.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{s.hint}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="para-quien"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Problema
            </h2>
            <p className="mt-2 text-2xl font-semibold text-zinc-100 md:text-3xl">
              {homeContent.problem.title}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {homeContent.problem.points.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <ShieldCheck className="size-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-100">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {p.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-800/60 bg-zinc-950/30">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Solución
              </h2>
              <p className="mt-2 text-2xl font-semibold text-zinc-100 md:text-3xl">
                {homeContent.solution.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {homeContent.solution.lead}
              </p>
              <ul className="mt-8 space-y-4">
                {homeContent.solution.points.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-zinc-300">
                    <Zap
                      className="mt-0.5 size-4 shrink-0 text-cyan-400"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-cyan-500/10 via-zinc-900/40 to-zinc-950 p-6 shadow-[0_0_60px_-20px_rgba(34,211,238,0.35)]">
              <div className="flex items-center gap-3 text-zinc-200">
                <BadgeCheck className="size-8 text-cyan-400" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Vista previa
                  </p>
                  <p className="font-medium">Resultado de verificación</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                La pantalla de{" "}
                <Link href="/verify" className="text-cyan-400 hover:underline">
                  /verify
                </Link>{" "}
                muestra estado del protocolo, datos del titular y prueba on-chain
                con hash y red SUI — ideal para demos y diseño del flujo público.
              </p>
              <Link
                href="/verify"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Abrir verificación demo
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        >
          <h2 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
            {homeContent.howItWorks.title}
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {homeContent.howItWorks.steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/25 p-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/90">
                  Paso {i + 1}
                </span>
                <h3 className="mt-3 font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="funcionalidades"
          className="border-t border-zinc-800/60 bg-zinc-950/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
              {homeContent.features.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">
              {homeContent.features.subtitle}
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {homeContent.features.items.map((item) => {
                const Icon = featureIcons[item.id];
                return (
                  <article
                    key={item.id}
                    className="flex flex-col rounded-2xl border border-zinc-800/80 bg-[#0a1018]/90 p-6"
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      {item.cta}
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
            {homeContent.audience.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeContent.audience.segments.map((seg, i) => {
              const icons = [Building2, UserRound, ShieldCheck] as const;
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <article
                  key={seg.title}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6"
                >
                  <Icon className="size-6 text-cyan-400" aria-hidden />
                  <h3 className="mt-4 font-semibold text-zinc-100">{seg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {seg.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-zinc-800/60 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/40 px-6 py-10 md:flex md:items-center md:justify-between md:gap-8 md:px-10">
              <div>
                <h2 className="text-xl font-semibold text-zinc-100 md:text-2xl">
                  {homeContent.closing.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-zinc-400 md:text-base">
                  {homeContent.closing.body}
                </p>
              </div>
              <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-cyan-400"
                >
                  {homeContent.closing.primaryCta}
                </Link>
                <Link
                  href="/verify"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500"
                >
                  {homeContent.closing.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{homeContent.footer.note}</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {homeContent.footer.links.map(({ href, label }) => (
              <Link
                key={href + label}
                href={href}
                className="transition hover:text-cyan-400"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
