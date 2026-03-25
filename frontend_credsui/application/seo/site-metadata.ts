import type { Metadata } from "next";
import { homeContent } from "@/domain/content/home";

export const defaultSiteMetadata: Metadata = {
  title: {
    default: `${homeContent.brand} · ${homeContent.ecosystem} — Credenciales académicas verificables en SUI`,
    template: `%s | ${homeContent.brand} · ${homeContent.ecosystem}`,
  },
  description: homeContent.tagline,
  keywords: [
    "SUI",
    "blockchain",
    "credenciales",
    "certificados",
    "verificación académica",
    "NFT educativo",
  ],
  openGraph: {
    title: `${homeContent.brand} · ${homeContent.ecosystem} — Credenciales verificables`,
    description: homeContent.tagline,
    type: "website",
    locale: "es_ES",
  },
};
