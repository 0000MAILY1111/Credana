import { homeContent } from "@/domain/content/home";

export function CTASection() {
  const { cta } = homeContent;
  return (
    <section
      id="cta"
      className="scroll-mt-24 px-4 py-24 sm:px-6"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-teal-950/30 p-10 text-center sm:p-14">
        <h2
          id="cta-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {cta.title}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-zinc-300">{cta.body}</p>
        <button
          type="button"
          disabled
          className="mt-8 inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full bg-white/90 px-10 text-sm font-semibold text-[#030508] opacity-80"
          title="Próximamente disponible"
        >
          {cta.button}
        </button>
        <p className="mt-4 text-xs text-zinc-500">
          Próximamente: wallet y emisión de credenciales.
        </p>
      </div>
    </section>
  );
}
