import { homeContent } from "@/domain/content/home";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#030508] py-10 text-center text-sm text-zinc-500">
      <p>
        © {year} {homeContent.ecosystem} · {homeContent.brand}. Credenciales
        académicas verificables en SUI.
      </p>
    </footer>
  );
}
