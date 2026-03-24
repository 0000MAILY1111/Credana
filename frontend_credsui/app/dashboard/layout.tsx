import type { Metadata } from "next";
import { DashboardShell } from "./components/DashboardShell";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Centro de control académico institucional — Credana.",
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <DashboardShell>{children}</DashboardShell>;
}
