export function BlockchainMeshGraphic() {
  return (
    <div
      className="relative mt-6 h-28 w-full overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/80"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="meshGrad" x1="0" y1="0" x2="400" y2="96">
            <stop stopColor="#00d2ff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#00d2ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="96" fill="url(#meshGrad)" />
        <path
          d="M0 72 L40 48 L80 64 L120 40 L160 56 L200 32 L240 52 L280 36 L320 60 L360 44 L400 68 V96 H0 Z"
          fill="#27272a"
          stroke="#3f3f46"
          strokeWidth="0.5"
        />
        <path
          d="M0 80 L50 58 L100 70 L150 50 L200 62 L250 46 L300 58 L350 52 L400 64"
          stroke="#00d2ff"
          strokeOpacity="0.25"
          strokeWidth="0.75"
        />
        <g stroke="#52525b" strokeWidth="0.4">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={(i * 36) % 400}
              y1={0}
              x2={((i * 36) % 400) + 24}
              y2={96}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
