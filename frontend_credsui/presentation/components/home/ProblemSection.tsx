import { homeContent } from "@/domain/content/home";

export function ProblemSection() {
  const { problem } = homeContent;
  return (
    <section
      id="problema"
      className="scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="problem-heading"
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {problem.title}
        </h2>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {problem.points.map((point) => (
            <li
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium text-cyan-300">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
