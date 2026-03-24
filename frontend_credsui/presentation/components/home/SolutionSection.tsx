import { homeContent } from "@/domain/content/home";

export function SolutionSection() {
  const { solution } = homeContent;
  return (
    <section
      id="solucion"
      className="scroll-mt-24 border-y border-white/10 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent px-4 py-20 sm:px-6"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="solution-heading"
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {solution.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-zinc-400">
          {solution.lead}
        </p>
        <ol className="mx-auto mt-12 max-w-2xl space-y-4">
          {solution.points.map((point, index) => (
            <li
              key={point}
              className="flex gap-4 rounded-xl border border-white/10 bg-[#0a1018]/80 px-5 py-4"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-300"
                aria-hidden
              >
                {index + 1}
              </span>
              <span className="pt-0.5 leading-relaxed text-zinc-300">{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
