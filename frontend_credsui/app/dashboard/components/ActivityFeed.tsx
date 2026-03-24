import { recentActivity } from "@/app/dashboard/data/institution-dashboard";

export function ActivityFeed() {
  return (
    <section className="rounded-2xl border border-zinc-800/80 bg-[#161b22] p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-100">Recent Activity</h2>
      <ul className="mt-4 space-y-4">
        {recentActivity.map((item) => (
          <li key={item.id} className="flex gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-cyan-400"
              aria-hidden
            >
              {item.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-snug text-zinc-200">{item.title}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
                <span>{item.timeAgo}</span>
                {item.meta ? (
                  <>
                    <span aria-hidden>·</span>
                    <span className="font-mono text-zinc-400">{item.meta}</span>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
