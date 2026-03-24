import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  CircleDot,
  Info,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { BlockchainMeshGraphic } from "./BlockchainMeshGraphic";
import { CopyIdButton } from "./CopyIdButton";

const accent = "#00d2ff";
const surface = "#141414";

const demo = {
  credentialId:
    "0x44d8a2f1e9c7b3d5a1f0e8c6b4a2d0f8e6c4b2a0d8f6e4c2b0a8f6e4d2c1b0a9f1a2",
  credentialIdShort: "0x44d…f1a2",
  txHash:
    "0x72a5f1e9c8b4d3a2f1e0c9b8a7d6f5e4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9",
  badgeName: "Advanced Blockchain Architecture",
  studentName: "Julian Sterling",
  institution: "Credana Academy",
  mintDate: "OCT 24, 2023 • 14:22 UTC",
} as const;

export function VerificationScreen() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 antialiased">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
          style={{ color: accent }}
        >
          Credana
        </Link>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>Blockchain Secured</span>
          <ShieldCheck className="size-5" style={{ color: accent }} aria-hidden />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Protocol status
        </p>
        <p className="mt-2 flex items-center justify-center gap-2 text-sm text-zinc-400">
          <span
            className="inline-block size-2 animate-pulse rounded-full"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 12px ${accent}`,
            }}
            aria-hidden
          />
          Verifying Credential...
        </p>

        <div
          className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-zinc-800/80 p-8 md:p-10"
          style={{
            backgroundColor: surface,
            boxShadow: `0 0 120px -30px ${accent}55`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px circle at 50% -120px, rgba(0, 210, 255, 0.14), transparent 55%)",
            }}
          />
          <div className="relative flex flex-col items-center text-center">
            <div
              className="flex size-24 items-center justify-center rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-500/15 to-cyan-500/5"
              style={{ color: accent }}
            >
              <BadgeCheck className="size-14" strokeWidth={1.15} aria-hidden />
            </div>
            <h1
              className="mt-5 text-4xl font-extrabold uppercase tracking-[0.12em] md:text-5xl"
              style={{ color: accent }}
            >
              Verified
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
              This academic record has been cryptographically validated against
              the SUI Mainnet ledger.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:justify-start">
                <CircleDot className="size-4 shrink-0" style={{ color: accent }} />
                Authenticity confirmed by Sui
              </div>

              <div className="flex items-center justify-center gap-2 text-xs sm:justify-end">
                <span className="font-mono text-zinc-400">
                  ID: {demo.credentialIdShort}
                </span>
                <CopyIdButton
                  value={demo.credentialId}
                  label="Copy credential ID"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section
            className="rounded-2xl border border-zinc-800/80 p-6"
            style={{ backgroundColor: surface }}
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Credential details
            </h2>

            <p className="mt-6 text-xl font-semibold leading-snug tracking-tight text-zinc-50">
              {demo.badgeName}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Student name
                </p>
                <p className="mt-3 text-base font-semibold text-zinc-50">
                  {demo.studentName}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Issuing institution
                </p>
                <p className="mt-3 text-base font-semibold text-zinc-50">
                  {demo.institution}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-xl border border-zinc-800/60 bg-zinc-950/50 px-4 py-3 text-xs text-zinc-500">
              <div className="flex min-w-0 items-center gap-2">
                <Calendar className="size-4 shrink-0 text-zinc-500" aria-hidden />
                <span className="truncate font-semibold uppercase tracking-[0.22em]">
                  Mint date{" "}
                  <span className="font-semibold text-zinc-400">{demo.mintDate}</span>
                </span>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-zinc-500" aria-hidden />
            </div>
          </section>

          <section
            className="rounded-2xl border border-zinc-800/80 p-6"
            style={{ backgroundColor: surface }}
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Blockchain proof
            </h2>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Transaction hash
              </p>
              <div className="mt-3 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
                <p
                  className="break-all font-mono text-xs leading-relaxed"
                  style={{ color: accent }}
                >
                  {demo.txHash}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-zinc-500">Network</span>
                <span className="font-medium text-zinc-200">SUI Mainnet</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-zinc-500">Status</span>
                <span className="font-medium" style={{ color: accent }}>
                  Finalized
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-zinc-500">Consensus</span>
                <span className="font-medium text-zinc-200">
                  Narwhal &amp; Bullshark
                </span>
              </div>
            </div>

            <BlockchainMeshGraphic />
          </section>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-950 transition hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            <Info className="size-4" />
            Learn how verification works
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950/40 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-200 transition hover:border-zinc-500"
          >
            <Mail className="size-4" />
            Contact issuer
          </a>
        </div>
      </main>

      <footer className="mx-auto max-w-5xl border-t border-zinc-800/80 px-6 py-8">
        <div className="flex flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Credana © {new Date().getFullYear()} Institutional Protocol</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-[#00d2ff]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#00d2ff]">
              Developer Docs
            </a>
            <a href="#" className="transition hover:text-[#00d2ff]">
              Network Status
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
