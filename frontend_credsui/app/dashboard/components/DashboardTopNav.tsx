"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, UserRound, Wallet } from "lucide-react";

const topLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/wallet", label: "Wallet" },
  { href: "/verify", label: "Verify" },
] as const;

export function DashboardTopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-zinc-800/80 bg-[#0a0b0d]/95 px-4 backdrop-blur-md md:gap-6 md:px-6">
      <nav
        className="flex shrink-0 flex-wrap items-center gap-5 text-sm font-semibold md:gap-6"
        aria-label="Principal"
      >
        <Link
          href="/"
          className="hidden font-semibold text-cyan-400 sm:inline transition hover:text-cyan-300"
        >
          Credana
        </Link>
        {topLinks.map(({ href, label }) => {
          const active =
            href === "/dashboard/wallet"
              ? pathname.startsWith("/dashboard/wallet")
              : href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(href);

          return (
            <Link
              key={label}
              href={href}
              className={
                active
                  ? "border-b-2 border-cyan-400 pb-1 text-zinc-100"
                  : "border-b-2 border-transparent pb-1 text-zinc-500 transition hover:text-zinc-300"
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden min-w-0 flex-1 justify-center md:flex">
        <label className="relative w-full max-w-xl">
          <span className="sr-only">Buscar credenciales</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            className="w-full rounded-full border border-zinc-800/80 bg-[#161b22] py-2 pl-10 pr-4 text-sm text-zinc-100 outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:border-cyan-400/40 focus:ring-2"
            placeholder="Search credentials..."
            type="search"
            autoComplete="off"
          />
        </label>
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:border-cyan-400/55 sm:inline-flex"
        >
          <Wallet className="h-4 w-4 text-cyan-300" aria-hidden />
          <span className="font-mono">0x4F2…A9E1</span>
        </button>
        <button
          type="button"
          className="relative rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800/60 hover:text-zinc-200"
          aria-label="Notificaciones"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#0a0b0d]" />
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xs font-semibold text-cyan-400 transition hover:border-zinc-600"
          aria-label="Perfil"
        >
          <UserRound className="h-5 w-5 text-zinc-300" />
        </button>
      </div>
    </header>
  );
}
