import type { Metadata } from "next";
import "./globals.css";
import { defaultSiteMetadata } from "@/app/application/seo/site-metadata";

export const metadata: Metadata = defaultSiteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
