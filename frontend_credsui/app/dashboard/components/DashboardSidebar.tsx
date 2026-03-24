import Link from "next/link";
import {
  Award,
  BookOpen,
  FileBadge2,
  HelpCircle,
  LayoutDashboard,
  Settings2,
  Users,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Issuance", icon: Award },
  { href: "/dashboard", label: "Credentials", icon: FileBadge2 },
  { href: "/dashboard", label: "Directory", icon: Users },
  { href: "/dashboard", label: "Settings", icon: Settings2 },
] as const;

export function DashboardSidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-zinc-800/80 bg-[#0d1218]">
      <div className="border-b border-zinc-800/80 px-5 py-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-cyan-400 transition hover:text-cyan-300"
        >
          Credana
        </Link>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-zinc-800/80 bg-[#161b22] px-3 py-2.5">
          <LayoutDashboard className="h-4 w-4 text-zinc-500" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-zinc-300">
              Credana
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                aria-hidden
              />
              SUI Mainnet
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Institución">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-3 pb-4">
        <button
          type="button"
          className="w-full rounded-xl bg-cyan-500 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-400"
        >
          MINT NEW BADGE
        </button>
      </div>

      <div className="mt-auto border-t border-zinc-800/80 px-3 py-4">
        <Link
          href="#"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          <HelpCircle className="h-4 w-4" aria-hidden />
          Support
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          <BookOpen className="h-4 w-4" aria-hidden />
          Docs
        </Link>
      </div>
    </aside>
  );
}
