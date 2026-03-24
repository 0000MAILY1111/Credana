import { Award, Filter, Download } from "lucide-react";
import Link from "next/link";
import {
  credentialEndpoints,
  type EndpointStatus,
} from "@/app/dashboard/data/institution-dashboard";

const statusStyles: Record<
  EndpointStatus,
  { label: string; dot: string; text: string }
> = {
  active: {
    label: "ACTIVE",
    dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]",
    text: "text-cyan-400",
  },
  draft: {
    label: "DRAFT",
    dot: "bg-zinc-500",
    text: "text-zinc-400",
  },
  archived: {
    label: "ARCHIVED",
    dot: "bg-red-500",
    text: "text-red-400",
  },
};

export function CredentialEndpointsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#161b22] shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 px-5 py-4">
        <h2 className="text-lg font-semibold text-zinc-100">
          Credential Endpoints
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-600"
          >
            <Filter className="h-4 w-4" aria-hidden />
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-600"
          >
            <Download className="h-4 w-4" aria-hidden />
            Export
          </button>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-800/80 text-zinc-500">
            <tr>
              <th className="px-5 py-3 font-medium">Badge Name</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Issued</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-zinc-200">
            {credentialEndpoints.map((row) => {
              const s = statusStyles[row.status];
              return (
                <tr
                  key={row.id}
                  className="border-t border-zinc-800/60 transition hover:bg-zinc-900/40"
                >
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2">
                      <Award
                        className="h-4 w-4 shrink-0 text-cyan-500/90"
                        aria-hidden
                      />
                      {row.badgeName}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-zinc-400">{row.category}</td>
                  <td className="px-5 py-4 tabular-nums">{row.issued}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${s.text}`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${s.dot}`}
                        aria-hidden
                      />
                      {s.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <footer className="border-t border-zinc-800/80 px-5 py-4 text-center">
        <Link
          href="#"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          VIEW ALL ENDPOINTS
        </Link>
      </footer>
    </section>
  );
}
