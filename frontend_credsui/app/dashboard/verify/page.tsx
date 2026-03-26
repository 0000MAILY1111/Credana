import type { Metadata } from "next";
import Link from "next/link";
import { homeContent } from "@/domain/content/home";
import { WalletConnectButtons } from "@/presentation/components/wallet/WalletConnectButtons";

export const metadata: Metadata = {
  title: "Verify",
};

export default function VerifyPage() {
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
              <Link href="/dashboard/wallet" className="hover:text-zinc-100">
                Wallet
              </Link>
              <Link href="/dashboard/verify" className="border-b-2 border-cyan-400 pb-1 text-zinc-100">
                Verify
              </Link>
            </nav>
          </div>
          <WalletConnectButtons />
        </div>
      </header>

      <main className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
          <h1 className="text-4xl font-semibold tracking-tight">Credential Verify</h1>
          <p className="mt-2 text-zinc-400">
            Pegá un identificador de credencial para validarla en SUI.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Ej: 0x8a...2e1"
              className="h-11 flex-1 rounded-lg border border-white/10 bg-[#060b14] px-3 text-sm outline-none ring-cyan-400/40 placeholder:text-zinc-500 focus:ring"
            />
            <button className="h-11 rounded-lg bg-cyan-500 px-6 text-sm font-semibold text-[#041019]">
              Verificar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
