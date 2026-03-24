import Link from "next/link";
import { homeContent } from "@/app/domain/content/home";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        {homeContent.brand}
      </p>
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-5xl">
        {homeContent.hero.headline}
      </h1>
      <p className="max-w-2xl text-base text-zinc-300 md:text-lg">
        {homeContent.hero.subheadline}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/dashboard"
          className="rounded-md bg-cyan-500 px-5 py-2.5 font-medium text-zinc-950 transition hover:bg-cyan-400"
        >
          Ir al dashboard
        </Link>
        <a
          href="#como-funciona"
          className="rounded-md border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 transition hover:border-zinc-500"
        >
          {homeContent.hero.secondaryCta}
        </a>
      </div>
    </main>
  );
}
