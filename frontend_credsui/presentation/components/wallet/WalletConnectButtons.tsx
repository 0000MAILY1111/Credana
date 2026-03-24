"use client";

import {
  useWallets,
  useConnectWallet,
  useDisconnectWallet,
  useCurrentAccount,
} from "@mysten/dapp-kit";
import { useState, useEffect, useCallback } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface PhantomProvider {
  isPhantom: boolean;
  publicKey: { toString(): string } | null;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
}

interface EthProvider {
  isMetaMask?: boolean;
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
}

declare global {
  interface Window {
    phantom?: { solana?: PhantomProvider };
    solana?: PhantomProvider;
    ethereum?: EthProvider;
  }
}

function getPhantom(): PhantomProvider | null {
  if (typeof window === "undefined") return null;
  const p = window.phantom?.solana ?? window.solana;
  return p?.isPhantom ? p : null;
}

function getMetaMask(): EthProvider | null {
  if (typeof window === "undefined") return null;
  return window.ethereum?.isMetaMask ? window.ethereum : null;
}

function truncate(addr: string, n = 4) {
  return `${addr.slice(0, n)}…${addr.slice(-n)}`;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconWallet() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.293 2.293a1 1 0 011.414 0L8 6.586l4.293-4.293a1 1 0 111.414 1.414L9.414 8l4.293 4.293a1 1 0 01-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 01-1.414-1.414L6.586 8 2.293 3.707a1 1 0 010-1.414z" />
    </svg>
  );
}

function IconSui() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.5 4.5 3.6L12 11 7.5 9.1 12 5.5zm-5 4.9 5 2v5.1l-5-4V10.4zm10 0v3.1l-5 4v-5.1l5-2z" />
    </svg>
  );
}

function IconPhantom() {
  return (
    <svg width="20" height="20" viewBox="0 0 128 128" fill="currentColor">
      <path d="M110.584 47.166C110.584 25.168 92.836 7.42 70.838 7.42H18.002v20.028h52.836c10.898 0 19.736 8.838 19.736 19.736S81.736 67.92 70.838 67.92H54.002v20.028H70.838c22 0 39.746-17.748 39.746-39.746v-.036zM54.002 88.58H18.002v20.028h36v-20.028z" />
    </svg>
  );
}

function IconMetaMask() {
  return (
    <svg width="20" height="20" viewBox="0 0 35 33" fill="none">
      <path d="M32.958 1L19.57 10.718l2.454-5.716L32.958 1z" fill="#E17726" stroke="#E17726" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.042 1l13.274 9.809-2.33-5.807L2.042 1z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.226 23.533l-3.562 5.455 7.622 2.098 2.19-7.444-6.25-.11z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M.545 23.642l2.178 7.444 7.61-2.098-3.55-5.455-6.238.11z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.977 14.456l-2.13 3.22 7.588.344-.254-8.16-5.204 4.596z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.023 14.456l-5.27-4.686-.173 8.25 7.576-.344-2.133-3.22z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.333 28.988l4.565-2.22-3.94-3.07-.625 5.29z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.102 26.768l4.553 2.22-.613-5.29-3.94 3.07z" fill="#E27625" stroke="#E27625" strokeWidth=".25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Wallet Option Row ─────────────────────────────────────────────────────────

function WalletRow({
  icon,
  name,
  badge,
  accent,
  onClick,
  disabled,
}: {
  icon: React.ReactNode;
  name: string;
  badge: string;
  accent: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "12px",
        padding: "12px 14px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.03)",
        cursor: disabled ? "wait" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background 0.15s, border-color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = `${accent}18`;
        (e.currentTarget as HTMLButtonElement).style.borderColor = `${accent}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      <span
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: `${accent}22`,
          color: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span style={{ flex: 1, textAlign: "left", fontSize: "14px", fontWeight: 500, color: "#f1f5f9" }}>
        {name}
      </span>
      <span style={{ fontSize: "11px", color: "#64748b" }}>{badge}</span>
    </button>
  );
}

// ── Connected Pill ────────────────────────────────────────────────────────────

function ConnectedPill({
  address,
  accent,
  onDisconnect,
  title,
}: {
  address: string;
  accent: string;
  onDisconnect: () => void;
  title: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onDisconnect}
      title={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 12px",
        borderRadius: "9999px",
        border: `1px solid ${hovered ? "rgba(239,68,68,0.4)" : `${accent}44`}`,
        background: hovered ? "rgba(239,68,68,0.1)" : `${accent}1a`,
        color: hovered ? "#f87171" : accent,
        fontSize: "12px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: hovered ? "#f87171" : accent,
          flexShrink: 0,
        }}
      />
      {hovered ? "Desconectar" : truncate(address)}
    </button>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function WalletConnectButtons() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [phantomAddr, setPhantomAddr] = useState<string | null>(null);
  const [phantomBusy, setPhantomBusy] = useState(false);
  const [phantomOk, setPhantomOk] = useState(false);
  const [mmAddr, setMmAddr] = useState<string | null>(null);
  const [mmBusy, setMmBusy] = useState(false);
  const [mmOk, setMmOk] = useState(false);

  const wallets = useWallets();
  const { mutate: suiConnect, isPending: suiBusy } = useConnectWallet();
  const { mutate: suiDisconnect } = useDisconnectWallet();
  const suiAccount = useCurrentAccount();

  useEffect(() => {
    setMounted(true);
    const phantom = getPhantom();
    setPhantomOk(!!phantom);
    if (phantom?.publicKey) setPhantomAddr(phantom.publicKey.toString());
    const mm = getMetaMask();
    setMmOk(!!mm);
    if (mm) {
      mm.request({ method: "eth_accounts" })
        .then((r) => {
          const list = r as string[];
          if (list.length) setMmAddr(list[0]);
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const connectSui = useCallback(
    (w: ReturnType<typeof useWallets>[0]) => {
      suiConnect({ wallet: w }, { onSuccess: () => setOpen(false) });
    },
    [suiConnect]
  );

  const connectPhantom = useCallback(async () => {
    const p = getPhantom();
    if (!p) { window.open("https://phantom.app/", "_blank"); return; }
    setPhantomBusy(true);
    try {
      const r = await p.connect();
      setPhantomAddr(r.publicKey.toString());
      setOpen(false);
    } catch { /* user cancelled */ }
    finally { setPhantomBusy(false); }
  }, []);

  const disconnectPhantom = useCallback(async () => {
    try { await getPhantom()?.disconnect(); } finally { setPhantomAddr(null); }
  }, []);

  const connectMM = useCallback(async () => {
    const mm = getMetaMask();
    if (!mm) { window.open("https://metamask.io/download/", "_blank"); return; }
    setMmBusy(true);
    try {
      const r = await mm.request({ method: "eth_requestAccounts" }) as string[];
      if (r.length) { setMmAddr(r[0]); setOpen(false); }
    } catch { /* user cancelled */ }
    finally { setMmBusy(false); }
  }, []);

  const disconnectMM = useCallback(() => setMmAddr(null), []);

  const anyConnected = !!suiAccount || !!phantomAddr || !!mmAddr;

  // ── Estado conectado ─────────────────────────────────────────────────────────
  if (mounted && anyConnected) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {suiAccount && (
          <ConnectedPill
            address={suiAccount.address}
            accent="#22d3ee"
            onDisconnect={() => suiDisconnect()}
            title="Desconectar Sui Wallet"
          />
        )}
        {phantomAddr && (
          <ConnectedPill
            address={phantomAddr}
            accent="#a78bfa"
            onDisconnect={disconnectPhantom}
            title="Desconectar Phantom"
          />
        )}
        {mmAddr && (
          <ConnectedPill
            address={mmAddr}
            accent="#fb923c"
            onDisconnect={disconnectMM}
            title="Desconectar MetaMask"
          />
        )}
      </div>
    );
  }

  // ── Botón principal ──────────────────────────────────────────────────────────
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 18px",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
          color: "#020617",
          fontSize: "14px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(6,182,212,0.35)",
          transition: "filter 0.15s, transform 0.1s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)")}
        onMouseDown={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(0.96)")}
        onMouseUp={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")}
      >
        <IconWallet />
        Conectar Wallet
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wm-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Panel */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "360px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#0c1220",
              boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <h2 id="wm-title" style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#f8fafc" }}>
                  Conectar Wallet
                </h2>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>
                  Elegí tu billetera para continuar
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  border: "none",
                  background: "transparent",
                  color: "#64748b",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#64748b";
                }}
              >
                <IconClose />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>

              {/* SUI */}
              <p style={{ margin: "0 0 6px 2px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569" }}>
                SUI Network
              </p>
              {wallets.length > 0 ? (
                wallets.map((w) => (
                  <WalletRow
                    key={w.name}
                    icon={<IconSui />}
                    name={w.name}
                    badge={suiBusy ? "Conectando…" : "→"}
                    accent="#22d3ee"
                    onClick={() => connectSui(w)}
                    disabled={suiBusy}
                  />
                ))
              ) : (
                <WalletRow
                  icon={<IconSui />}
                  name="Sui Wallet"
                  badge="Instalar →"
                  accent="#22d3ee"
                  onClick={() => window.open("https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil", "_blank")}
                />
              )}

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "8px 0" }}>
                <span style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#334155" }}>
                  Otras redes
                </span>
                <span style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
              </div>

              {/* Phantom */}
              <WalletRow
                icon={<IconPhantom />}
                name="Phantom"
                badge={phantomBusy ? "Conectando…" : mounted && !phantomOk ? "Instalar →" : "→"}
                accent="#a78bfa"
                onClick={connectPhantom}
                disabled={phantomBusy}
              />

              {/* MetaMask */}
              <WalletRow
                icon={<IconMetaMask />}
                name="MetaMask"
                badge={mmBusy ? "Conectando…" : mounted && !mmOk ? "Instalar →" : "→"}
                accent="#fb923c"
                onClick={connectMM}
                disabled={mmBusy}
              />
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 20px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ margin: 0, textAlign: "center", fontSize: "11px", lineHeight: 1.6, color: "#475569" }}>
                Al conectar aceptás los <span style={{ color: "#64748b" }}>términos de uso</span> de CredSUI.
                Tu llave privada nunca sale de tu dispositivo.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { WalletConnectButtons as SuiWalletButton };
export { WalletConnectButtons as PhantomWalletButton };
>>>>>>> Incoming (Background Agent changes)
