"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { homeContent } from "@/domain/content/home";
import { WalletConnectButtons } from "@/presentation/components/wallet/WalletConnectButtons";

type DashboardTab = "issuance" | "credentials" | "directory" | "settings";

type BadgeCard = {
  title: string;
  issuer: string;
  dateLabel: string;
  verifiedLabel: string;
  accent: string;
};

export function DashboardClient() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("credentials");

  const badges = useMemo<BadgeCard[]>(
    () => [
      {
        title: "Smart Contract Specialist",
        issuer: "Issued by Stanford Blockchain Lab",
        dateLabel: "MAY 2023",
        verifiedLabel: "VERIFIED ON SUI",
        accent: "#22d3ee",
      },
      {
        title: "Advanced Data Models",
        issuer: "Issued by MIT OpenCourseWare",
        dateLabel: "JAN 2024",
        verifiedLabel: "VERIFIED ON SUI",
        accent: "#fb923c",
      },
      {
        title: "Cryptography Fundamentals",
        issuer: "Issued by Google Cloud Security",
        dateLabel: "AUG 2023",
        verifiedLabel: "VERIFIED ON SUI",
        accent: "#34d399",
      },
      {
        title: "AI Ethics & Governance",
        issuer: "Issued by Oxford University Press",
        dateLabel: "OCT 2023",
        verifiedLabel: "VERIFIED ON SUI",
        accent: "#a78bfa",
      },
    ],
    []
  );

  const recentActivity = useMemo(
    () => [
      "Alex Rivera received Cloud Architecture",
      "Sarah Chen received Full-Stack SUI",
      "Batch Mint initiated for 32 students",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#060b14] text-zinc-100">
      <header className="border-b border-white/10 bg-[#060b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-cyan-400">
              {homeContent.ecosystem}
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <Link
                href="/dashboard"
                className={`pb-1 ${activeTab === "credentials" ? "border-b-2 border-cyan-400 text-zinc-100" : "hover:text-zinc-100"}`}
              >
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

          <div className="flex items-center gap-4">
            <div className="hidden w-[280px] items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-300 md:flex">
              <input
                className="w-full bg-transparent outline-none placeholder:text-zinc-500"
                placeholder="Search credentials..."
              />
            </div>
            <WalletConnectButtons />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-[260px_1fr] gap-6 px-4 py-6 sm:px-6">
        <aside className="rounded-2xl border border-white/10 bg-[#0b1220] p-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">{homeContent.brand} · SUI Mainnet</p>

          <div className="mt-6 space-y-2">
            <button
              type="button"
              onClick={() => setActiveTab("issuance")}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeTab === "issuance" ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              Issuance
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("credentials")}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeTab === "credentials" ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              Credentials
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("directory")}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeTab === "directory" ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              Directory
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeTab === "settings" ? "bg-cyan-500/15 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              Settings
            </button>
          </div>

          <button className="mt-8 w-full rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold tracking-wide text-[#041019]">
            MINT NEW BADGE
          </button>
        </aside>

        <main className="space-y-6">
          {activeTab === "credentials" ? (
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Earned Badges</h2>
                    <p className="mt-1 text-xs text-zinc-400">(12)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <select className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-300">
                      <option>FILTER BY ISSUER</option>
                    </select>
                    <button className="rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">
                      EXPORT
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {badges.map((b) => (
                    <article
                      key={b.title}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <div
                        className="absolute -top-20 left-0 h-24 w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-60"
                        style={{ transform: "rotate(6deg)" }}
                      />

                      <div className="relative">
                        <div
                          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] font-medium text-zinc-200"
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: b.accent }}
                          />
                          {b.verifiedLabel}
                        </div>

                        <h3 className="text-base font-semibold">{b.title}</h3>
                        <p className="mt-2 text-xs text-zinc-400">{b.issuer}</p>
                        <p className="mt-3 text-[11px] text-zinc-500">{b.dateLabel}</p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-zinc-400 transition group-hover:text-cyan-300">→</span>
                          <button className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-zinc-300 transition hover:bg-white/5">
                            View
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <aside className="space-y-4">
                <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">SUIWallet</h3>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                      ACTIVE
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-zinc-400">TOTAL BALANCE</p>
                  <p className="mt-1 text-4xl font-semibold text-cyan-300">1,248.50 SUI</p>
                  <p className="mt-2 text-sm text-zinc-400">≈ $1,520.12 USD</p>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-md bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/[0.06]">
                      RECEIVE
                    </button>
                    <button className="flex-1 rounded-md bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/[0.06]">
                      SWAP
                    </button>
                  </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Badge Activity</h3>
                    <Link href="#" className="text-xs text-cyan-300 hover:underline">
                      VIEW ALL
                    </Link>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                    {recentActivity.map((item) => (
                      <li key={item} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          ) : (
            <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-8">
              <h2 className="text-3xl font-semibold">
                {activeTab === "issuance" ? "Issuance" : activeTab === "directory" ? "Directory" : "Settings"}
              </h2>
              <p className="mt-3 text-zinc-400">
                Esta sección está lista para conectarse a tu lógica on-chain. Por ahora mostramos la vista
                completa para <span className="text-zinc-100 font-semibold">Credentials</span>.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

