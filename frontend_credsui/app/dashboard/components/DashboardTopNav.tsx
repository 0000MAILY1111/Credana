import Link from "next/link";
import { Bell, Wallet, UserRound } from "lucide-react";

const topLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "#", label: "Wallet" },
  { href: "#", label: "Verify" },
] as const;

export function DashboardTopNav() {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-zinc-800/80 bg-[#0a0f12]/95 px-4 backdrop-blur-md md:px-6">
      <nav
        className="flex flex-wrap items-center gap-6 text-sm font-medium"
        aria-label="Principal"
      >
        <Link
          href="/"
          className="hidden font-semibold text-cyan-400 sm:inline transition hover:text-cyan-300"
        >
          Credana
        </Link>
        {topLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={
              label === "Dashboard"
                ? "border-b-2 border-cyan-400 pb-0.5 text-zinc-100"
                : "text-zinc-500 transition hover:text-zinc-300"
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800/60 hover:text-zinc-200"
          aria-label="Conectar wallet"
        >
          <Wallet className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="relative rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800/60 hover:text-zinc-200"
          aria-label="Notificaciones"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#0a0f12]" />
        </button>
        <button
          type="button"
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xs font-semibold text-cyan-400 transition hover:border-zinc-600"
          aria-label="Perfil"
        >
          <UserRound className="h-5 w-5 text-zinc-300" />
        </button>
      </div>
    </header>
  );
}
