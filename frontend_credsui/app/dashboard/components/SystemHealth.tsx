import { Activity } from "lucide-react";
import { systemHealth } from "@/app/dashboard/data/institution-dashboard";

export function SystemHealth() {
  return (
    <section className="rounded-2xl border border-zinc-800/80 bg-[#161b22] p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-sm bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.45)]" />
        <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
          System Health
        </h2>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-500">Blockchain</span>
          <span className="font-medium text-cyan-400">{systemHealth.network}</span>
        </div>
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-500">Validator Latency</span>
            <span className="tabular-nums text-zinc-200">
              {systemHealth.validatorLatencyMs}ms
            </span>
          </div>
          <div
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800"
            role="progressbar"
            aria-valuenow={systemHealth.latencyBarPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
              style={{ width: `${systemHealth.latencyBarPercent}%` }}
            />
          </div>
        </div>
      </div>
      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
        <Activity className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500/80" />
        <span>
          {systemHealth.footer} Block height:{" "}
          <span className="font-mono text-zinc-400">{systemHealth.blockHeight}</span>
        </span>
      </p>
    </section>
  );
}
