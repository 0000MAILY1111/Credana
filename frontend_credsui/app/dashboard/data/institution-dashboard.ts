/**
 * Datos de demostración para el dashboard institucional (Credana).
 * Sustituir por API / lectura on-chain cuando exista integración.
 */

export type EndpointStatus = "active" | "draft" | "archived";

export interface CredentialEndpoint {
  id: string;
  badgeName: string;
  category: string;
  issued: number;
  status: EndpointStatus;
}

export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  subtitle: string;
}

export interface ActivityItem {
  id: string;
  kind: "mint" | "batch" | "user";
  title: string;
  timeAgo: string;
  meta?: string;
  initials?: string;
}

export const institutionKpis: KpiMetric[] = [
  {
    id: "badges",
    title: "Total Badges Issued",
    value: "1,284",
    subtitle: "+12% from last term",
  },
  {
    id: "students",
    title: "Active Students",
    value: "842",
    subtitle: "Live directory tracking",
  },
  {
    id: "storage",
    title: "Storage Used (SUI)",
    value: "4.2 GB",
    subtitle: "100% Immutable nodes",
  },
];

export const credentialEndpoints: CredentialEndpoint[] = [
  {
    id: "ep-1",
    badgeName: "Blockchain Fundamentals",
    category: "Computer Science",
    issued: 412,
    status: "active",
  },
  {
    id: "ep-2",
    badgeName: "UI/UX Advanced Systems",
    category: "Design",
    issued: 0,
    status: "draft",
  },
  {
    id: "ep-3",
    badgeName: "Data Science Ethics",
    category: "Data Science",
    issued: 215,
    status: "active",
  },
  {
    id: "ep-4",
    badgeName: "Legacy Web Archiving",
    category: "Engineering",
    issued: 84,
    status: "archived",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "act-1",
    kind: "user",
    title: "Alex Rivera received Cloud Architecture",
    timeAgo: "2 mins ago",
    meta: "0x8a…2e1",
    initials: "AR",
  },
  {
    id: "act-2",
    kind: "user",
    title: "Sarah Chen received Full-Stack SUI",
    timeAgo: "15 mins ago",
    meta: "0x3f…9c2",
    initials: "SC",
  },
  {
    id: "act-3",
    kind: "batch",
    title: "Batch Mint initiated for 32 Students",
    timeAgo: "1 hour ago",
    meta: "Pending",
    initials: "32",
  },
];

export const systemHealth = {
  network: "SUI MAINNET",
  validatorLatencyMs: 12,
  latencyBarPercent: 78,
  blockHeight: "49,201,311",
  footer: "All systems operational.",
} as const;
