import type { LucideIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export function KpiCard({ title, value, subtitle, icon: Icon }: KpiCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#161b22] p-5 shadow-sm">
      <Icon
        className="absolute right-4 top-4 h-10 w-10 text-zinc-700"
        strokeWidth={1.25}
        aria-hidden
      />
      <p className="text-sm font-medium text-zinc-400">{title}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50">
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
    </article>
  );
}
