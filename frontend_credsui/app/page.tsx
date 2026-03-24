import {
  CTASection,
  HeroSection,
  ProblemSection,
  SiteFooter,
  SiteHeader,
  SolutionSection,
} from "@/presentation/components";

/** Página estática con revalidación opcional para CDN/edge. */
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
