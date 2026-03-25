import Link from "next/link";
import { homeContent } from "@/domain/content/home";
import { WalletConnectButtons } from "@/presentation/components/wallet/WalletConnectButtons";

const nav = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {homeContent.brand}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            className="flex items-center gap-1 text-sm text-zinc-400 sm:gap-6"
            aria-label="Principal"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <WalletConnectButtons />
        </div>
      </div>
    </header>
  );
}
