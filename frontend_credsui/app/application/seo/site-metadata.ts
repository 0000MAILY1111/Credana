import type { Metadata } from "next";
import { homeContent } from "@/app/domain/content/home";

export const defaultSiteMetadata: Metadata = {
  title: {
    default: `${homeContent.brand} — Credenciales académicas verificables en SUI`,
    template: `%s | ${homeContent.brand}`,
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
    title: `${homeContent.brand} — Credenciales verificables`,
    description: homeContent.tagline,
    type: "website",
    locale: "es_ES",
  },
};
