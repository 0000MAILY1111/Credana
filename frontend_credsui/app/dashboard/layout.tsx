import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Tus credenciales académicas verificables en SUI.",
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return children;
}
