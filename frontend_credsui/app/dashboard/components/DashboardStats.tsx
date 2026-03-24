type DashboardStatsProps = {
  total: number;
  onChain: number;
};

export function DashboardStats({ total, onChain }: DashboardStatsProps) {
  const pending = total - onChain;

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
        <p className="text-sm text-zinc-400">Total de credenciales</p>
        <p className="mt-2 text-3xl font-semibold text-zinc-100">{total}</p>
      </article>
      <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
        <p className="text-sm text-zinc-400">On-chain</p>
        <p className="mt-2 text-3xl font-semibold text-cyan-400">{onChain}</p>
      </article>
      <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
        <p className="text-sm text-zinc-400">Pendientes de publicar</p>
        <p className="mt-2 text-3xl font-semibold text-amber-300">{pending}</p>
      </article>
    </section>
  );
}
