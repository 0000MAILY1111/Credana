import type { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard de institución",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
