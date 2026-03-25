import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/presentation/components";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-12 sm:px-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Dashboard
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Espacio para credenciales y estado de la cuenta. Podés volver al
            inicio cuando quieras.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
        >
          ← Volver al inicio
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
