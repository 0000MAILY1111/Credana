export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"
        role="status"
        aria-label="Cargando"
      />
      <p className="text-sm text-zinc-500">Cargando CredSUI…</p>
    </div>
  );
}
