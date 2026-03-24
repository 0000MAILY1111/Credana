import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Share2,
} from "lucide-react";

type BadgeItem = {
  id: string;
  title: string;
  issuer: string;
  monthYear: string;
  accent: "cyan" | "orange";
};

const earnedBadges: BadgeItem[] = [
  {
    id: "b1",
    title: "Smart Contract Specialist",
    issuer: "Stanford University",
    monthYear: "MAY 2023",
    accent: "cyan",
  },
  {
    id: "b2",
    title: "DeFi Architecture",
    issuer: "Credana Labs",
    monthYear: "AUG 2023",
    accent: "orange",
  },
  {
    id: "b3",
    title: "Zero Knowledge Proofs",
    issuer: "MIT OpenCourse",
    monthYear: "NOV 2023",
    accent: "cyan",
  },
  {
    id: "b4",
    title: "Move Language Mastery",
    issuer: "Sui Foundation",
    monthYear: "JAN 2024",
    accent: "orange",
  },
] as const;

const badgeActivity = [
  {
    id: "a1",
    kind: "received" as const,
    title: "Badge Received",
    subtitle: "Stanford: Smart Contract S…",
    tx: "0x8f2…a91c",
    when: "2h ago",
    status: "Success",
  },
  {
    id: "a2",
    kind: "issued" as const,
    title: "Badge Issued",
    subtitle: "Credana Labs: DeFi Arch…",
    tx: "0x4a…2f3d",
    when: "1d ago",
    status: "Success",
  },
  {
    id: "a3",
    kind: "pending" as const,
    title: "Verification Pending",
    subtitle: "MIT: Zero Knowledge Pro…",
    tx: "0x1c…9bde",
    when: "3d ago",
    status: "Pending",
  },
] as const;

function BadgeAccentBar({ accent }: { accent: BadgeItem["accent"] }) {
  return (
    <div
      className={
        accent === "cyan"
          ? "h-1 w-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500"
          : "h-1 w-full bg-gradient-to-r from-orange-300 via-orange-200 to-orange-400"
      }
    />
  );
}

export function WalletOverviewPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-8">
        <div className="min-w-0 space-y-8">
          <section className="rounded-2xl border border-zinc-800/80 bg-[#161b22] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="relative shrink-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-cyan-500/15 via-zinc-900 to-zinc-950">
                  <div className="absolute inset-0 opacity-90 [background-image:radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.18),transparent_55%)]" />
                  <div className="relative flex h-full w-full items-end justify-center pb-3">
                    <div className="h-28 w-24 rounded-xl border border-zinc-800/70 bg-zinc-950/40 shadow-[0_20px_60px_-35px_rgba(34,211,238,0.55)]" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900 bg-cyan-400 text-zinc-950 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                  <BadgeCheck className="h-5 w-5" aria-hidden />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    Alex Chen
                  </h1>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    Class of 2024
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  Computer Science major at Stanford University. Focused on
                  distributed systems, zero-knowledge proofs, and on-chain
                  identity. Building verifiable academic records for the next
                  generation of learners.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_rgba(34,211,238,0.22)] transition hover:bg-cyan-300"
                  >
                    <Share2 className="h-4 w-4" aria-hidden />
                    VERIFIABLE LINK
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/30 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700"
                  >
                    SUI ID: achen.sui
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-lg font-semibold text-zinc-100">
                Earned Badges{" "}
                <span className="text-zinc-500">({earnedBadges.length})</span>
              </h2>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                FILTER BY ISSUER
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {earnedBadges.map((b) => (
                <article
                  key={b.id}
                  className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#161b22] shadow-sm transition hover:border-zinc-700/80"
                >
                  <BadgeAccentBar accent={b.accent} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/40">
                          <div
                            className={
                              b.accent === "cyan"
                                ? "h-5 w-5 rounded-md bg-cyan-400/25 ring-1 ring-cyan-400/30"
                                : "h-5 w-5 rounded-md bg-orange-300/20 ring-1 ring-orange-300/25"
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                        <span className="inline-flex items-center gap-2 text-cyan-300/90">
                          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.45)]" />
                          Verified on Sui
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-zinc-50">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500">
                      Issued by{" "}
                      <span className="text-zinc-300">{b.issuer}</span>
                    </p>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {b.monthYear}
                      </p>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-950/30 text-zinc-400 transition group-hover:border-zinc-700 group-hover:text-zinc-200">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="min-w-0 space-y-6">
          <section className="rounded-2xl border border-zinc-800/80 bg-[#161b22] p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-zinc-100">SUI Wallet</h2>
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                Active
              </span>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Total balance
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50">
              1,248.50 <span className="text-lg text-zinc-400">SUI</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">~ $1,520.12 USD</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/30 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700"
              >
                RECEIVE
              </button>
              <button
                type="button"
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/30 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700"
              >
                SWAP
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800/80 bg-[#161b22] p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-zinc-100">
                Badge Activity
              </h2>
              <button
                type="button"
                className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                VIEW ALL
              </button>
            </div>

            <ul className="mt-5 space-y-4">
              {badgeActivity.map((a) => {
                const isPending = a.kind === "pending";
                return (
                  <li
                    key={a.id}
                    className="flex gap-3 rounded-xl border border-zinc-800/60 bg-zinc-950/20 p-4"
                  >
                    <div
                      className={
                        isPending
                          ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-zinc-400"
                          : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300"
                      }
                      aria-hidden
                    >
                      {isPending ? (
                        <Clock3 className="h-5 w-5" />
                      ) : (
                        <Check className="h-5 w-5" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-zinc-100">
                        {a.title}
                      </p>
                      <p className="mt-1 truncate text-sm text-zinc-500">
                        {a.subtitle}
                      </p>
                      <p className="mt-2 font-mono text-xs text-zinc-500">
                        {a.tx}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
                        <span>{a.when}</span>
                        <span aria-hidden>·</span>
                        <span
                          className={
                            isPending ? "text-amber-300" : "text-emerald-300"
                          }
                        >
                          {a.status}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
