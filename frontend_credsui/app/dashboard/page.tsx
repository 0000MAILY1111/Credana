import { ActivityFeed } from "./components/ActivityFeed";
import { CredentialEndpointsTable } from "./components/CredentialEndpointsTable";
import { DashboardPageHeader } from "./components/DashboardPageHeader";
import { KpiStatsRow } from "./components/KpiStatsRow";
import { SystemHealth } from "./components/SystemHealth";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <DashboardPageHeader />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_minmax(280px,320px)] xl:gap-8">
        <div className="min-w-0 space-y-6">
          <KpiStatsRow />
          <CredentialEndpointsTable />
        </div>
        <div className="min-w-0 space-y-6">
          <ActivityFeed />
          <SystemHealth />
        </div>
      </div>
    </div>
  );
}
