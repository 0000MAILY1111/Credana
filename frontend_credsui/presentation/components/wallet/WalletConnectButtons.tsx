"use client";

import {
  useWallets,
  useConnectWallet,
  useDisconnectWallet,
  useCurrentAccount,
} from "@mysten/dapp-kit";
import { useState, useEffect } from "react";

// ── Phantom / Solana types ────────────────────────────────────────────────────

interface PhantomSolanaProvider {
  isPhantom: boolean;
  publicKey: { toString(): string } | null;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
}

declare global {
  interface Window {
    phantom?: { solana?: PhantomSolanaProvider };
    solana?: PhantomSolanaProvider;
  }
}

function getPhantomProvider(): PhantomSolanaProvider | null {
  if (typeof window === "undefined") return null;
  const p = window.phantom?.solana;
  if (p?.isPhantom) return p;
  if (window.solana?.isPhantom) return window.solana;
  return null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function truncate(addr: string, chars = 4): string {
  return `${addr.slice(0, chars)}…${addr.slice(-chars)}`;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SuiIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.5 4.5 3.6L12 11 7.5 9.1 12 5.5zm-5 4.9 5 2v5.1l-5-4V10.4zm10 0v3.1l-5 4v-5.1l5-2z" />
    </svg>
  );
}

function PhantomIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 128 128"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M110.584 47.166C110.584 25.168 92.836 7.42 70.838 7.42H18.002v20.028h52.836c10.898 0 19.736 8.838 19.736 19.736S81.736 67.92 70.838 67.92H54.002v20.028H70.838c22 0 39.746-17.748 39.746-39.746v-.036zM54.002 88.58H18.002v20.028h36v-20.028z" />
    </svg>
  );
}

// ── Sui Wallet Button ─────────────────────────────────────────────────────────

export function SuiWalletButton() {
  const wallets = useWallets();
  const { mutate: connect, isPending } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();
  const account = useCurrentAccount();

  const suiWallet = wallets.find((w) =>
    w.name.toLowerCase().includes("sui")
  );

  if (account) {
    return (
      <button
        onClick={() => disconnect()}
        title="Haz clic para desconectar Sui Wallet"
        className="group flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse group-hover:bg-red-400 shrink-0" />
        <span className="group-hover:hidden">{truncate(account.address)}</span>
        <span className="hidden group-hover:inline">Desconectar</span>
      </button>
    );
  }

  if (!suiWallet) {
    return (
      <a
        href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
        target="_blank"
        rel="noopener noreferrer"
        title="Instalar Sui Wallet"
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
      >
        <SuiIcon />
        Sui Wallet
      </a>
    );
  }

  return (
    <button
      onClick={() => connect({ wallet: suiWallet })}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:border-cyan-500/40 hover:from-cyan-500/20 hover:to-teal-500/20 disabled:opacity-50"
    >
      <SuiIcon />
      {isPending ? "Conectando…" : "Sui Wallet"}
    </button>
  );
}

// ── Phantom Wallet Button ─────────────────────────────────────────────────────

export function PhantomWalletButton() {
  const [account, setAccount] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detectar si Phantom ya está conectado
    const provider = getPhantomProvider();
    if (provider?.publicKey) {
      setAccount(provider.publicKey.toString());
    }
  }, []);

  // Evita hydration mismatch — no renderizar hasta montar
  if (!mounted) return null;

  const provider = getPhantomProvider();

  const handleConnect = async () => {
    if (!provider) {
      window.open("https://phantom.app/", "_blank");
      return;
    }
    setIsPending(true);
    try {
      const resp = await provider.connect();
      setAccount(resp.publicKey.toString());
    } catch {
      // Usuario rechazó o cerró la ventana
    } finally {
      setIsPending(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (provider) await provider.disconnect();
    } finally {
      setAccount(null);
    }
  };

  if (account) {
    return (
      <button
        onClick={handleDisconnect}
        title="Haz clic para desconectar Phantom"
        className="group flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-all hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse group-hover:bg-red-400 shrink-0" />
        <span className="group-hover:hidden">{truncate(account)}</span>
        <span className="hidden group-hover:inline">Desconectar</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-violet-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-all hover:border-purple-500/40 hover:from-purple-500/20 hover:to-violet-500/20 disabled:opacity-50"
    >
      <PhantomIcon />
      {isPending ? "Conectando…" : provider ? "Phantom" : "Instalar Phantom"}
    </button>
  );
}

// ── Composite ─────────────────────────────────────────────────────────────────

export function WalletConnectButtons() {
  return (
    <div className="flex items-center gap-2">
      <SuiWalletButton />
      <PhantomWalletButton />
    </div>
  );
}
