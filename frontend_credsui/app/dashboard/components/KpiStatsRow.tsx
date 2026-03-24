import { Database, Shield, Users } from "lucide-react";
import { institutionKpis } from "@/app/dashboard/data/institution-dashboard";
import { KpiCard } from "./KpiCard";

const icons = [Shield, Users, Database] as const;

export function KpiStatsRow() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {institutionKpis.map((kpi, i) => (
        <KpiCard
          key={kpi.id}
          title={kpi.title}
          value={kpi.value}
          subtitle={kpi.subtitle}
          icon={icons[i] ?? Shield}
        />
      ))}
    </section>
  );
}
