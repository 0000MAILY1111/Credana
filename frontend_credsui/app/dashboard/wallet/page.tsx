import type { Metadata } from "next";
import Link from "next/link";
import { homeContent } from "@/domain/content/home";
import { WalletConnectButtons } from "@/presentation/components/wallet/WalletConnectButtons";

export const metadata: Metadata = {
  title: "Wallet",
};

const badges = [
  "Smart Contract Specialist",
  "Advanced Data Models",
  "Cryptography Fundamentals",
  "AI Ethics & Governance",
];

export default function WalletDashboardPage() {
  return (
    <div className="min-h-screen bg-[#060b14] text-zinc-100">
      <header className="border-b border-white/10 bg-[#060b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-cyan-400">
              {homeContent.ecosystem}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <Link href="/dashboard" className="hover:text-zinc-100">
                Dashboard
              </Link>
              <Link href="/dashboard/wallet" className="border-b-2 border-cyan-400 pb-1 text-zinc-100">
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

      <main className="mx-auto grid max-w-[1400px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_320px]">
        <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
          <h1 className="text-4xl font-semibold tracking-tight">Wallet Profile</h1>
          <p className="mt-2 text-zinc-400">
            Vista de credenciales conectadas para {homeContent.brand} · {homeContent.ecosystem}.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {badges.map((badge) => (
              <article key={badge} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-sm text-zinc-300">{badge}</p>
                <p className="mt-2 text-xs text-cyan-300">VERIFIED ON SUI</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
          <h2 className="text-xl font-semibold">SUI Wallet</h2>
          <p className="mt-3 text-sm text-zinc-400">Total balance</p>
          <p className="mt-1 text-5xl font-semibold text-cyan-300">1,248.50</p>
          <p className="mt-2 text-sm text-zinc-400">≈ $1,520.12 USD</p>
        </aside>
      </main>
    </div>
  );
}
