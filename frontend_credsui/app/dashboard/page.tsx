import type { Metadata } from "next";
import Link from "next/link";
import { homeContent } from "@/domain/content/home";
import { WalletConnectButtons } from "@/presentation/components/wallet/WalletConnectButtons";

export const metadata: Metadata = {
  title: "Dashboard de institución",
};

const stats = [
  { label: "TOTAL BADGES ISSUED", value: "1,284", note: "+12% from last term" },
  { label: "ACTIVE STUDENTS", value: "842", note: "Live directory tracking" },
  { label: "STORAGE USED (SUI)", value: "4.2 GB", note: "100% immutable nodes" },
];

const endpoints = [
  { badge: "Blockchain Fundamentals", category: "Computer Science", issued: 412, status: "ACTIVE" },
  { badge: "UI/UX Advanced Systems", category: "Design", issued: 0, status: "DRAFT" },
  { badge: "Data Science Ethics", category: "Data Science", issued: 215, status: "ACTIVE" },
  { badge: "Legacy Web Archiving", category: "Engineering", issued: 84, status: "ARCHIVED" },
];

const activity = [
  "Alex Rivera received Cloud Architecture",
  "Sarah Chen received Full-Stack SUI",
  "Batch Mint initiated for 32 students",
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#060b14] text-zinc-100">
      <header className="border-b border-white/10 bg-[#060b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-cyan-400">
              {homeContent.ecosystem}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <Link href="/dashboard" className="border-b-2 border-cyan-400 pb-1 text-zinc-100">
                Dashboard
              </Link>
              <Link href="/dashboard/wallet" className="hover:text-zinc-100">
                Wallet
              </Link>
              <Link href="/dashboard/verify" className="hover:text-zinc-100">
                Verify
              </Link>
            </nav>
          </div>
          <WalletConnectButtons />
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr_280px]">
        <aside className="rounded-2xl border border-white/10 bg-[#0b1220] p-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            {homeContent.ecosystem} · SUI Mainnet
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="rounded-lg bg-cyan-500/15 px-3 py-2 text-cyan-300">Issuance</div>
            <div className="rounded-lg px-3 py-2 text-zinc-300">Credentials</div>
            <div className="rounded-lg px-3 py-2 text-zinc-300">Directory</div>
            <div className="rounded-lg px-3 py-2 text-zinc-300">Settings</div>
          </div>
          <button className="mt-8 w-full rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold tracking-wide text-[#041019]">
            MINT NEW BADGE
          </button>
        </aside>

        <main className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Institution Dashboard</p>
            <h1 className="mt-1 text-5xl font-semibold tracking-tight text-zinc-100">
              Academic Control Center
            </h1>
          </div>

          <section className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                <p className="text-xs tracking-[0.18em] text-zinc-400">{item.label}</p>
                <p className="mt-3 text-5xl font-semibold text-cyan-300">{item.value}</p>
                <p className="mt-3 text-sm text-zinc-400">{item.note}</p>
              </article>
            ))}
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b1220]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="text-2xl font-semibold">Credential Endpoints</h2>
              <div className="flex gap-2">
                <button className="rounded-md border border-white/10 px-3 py-1 text-xs text-zinc-300">FILTER</button>
                <button className="rounded-md border border-white/10 px-3 py-1 text-xs text-zinc-300">EXPORT</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="text-xs text-zinc-400">
                  <tr>
                    <th className="px-5 py-3">BADGE NAME</th>
                    <th className="px-5 py-3">CATEGORY</th>
                    <th className="px-5 py-3">ISSUED</th>
                    <th className="px-5 py-3">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoints.map((row) => (
                    <tr key={row.badge} className="border-t border-white/5">
                      <td className="px-5 py-4 text-zinc-200">{row.badge}</td>
                      <td className="px-5 py-4 text-zinc-400">{row.category}</td>
                      <td className="px-5 py-4">{row.issued}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-300">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {activity.map((item) => (
                <li key={item} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
            <h3 className="text-sm uppercase tracking-widest text-zinc-400">System Health</h3>
            <p className="mt-4 text-zinc-300">Blockchain: SUI MAINNET</p>
            <p className="mt-2 text-zinc-300">Validator latency: 12ms</p>
            <div className="mt-4 h-2 rounded-full bg-zinc-800">
              <div className="h-2 w-[88%] rounded-full bg-cyan-400" />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
