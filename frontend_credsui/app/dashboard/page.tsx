import Link from "next/link";
import type { VerifiableCredential } from "@/app/domain/entities/credential";

const mockCredentials: VerifiableCredential[] = [
  {
    id: "cred-001",
    title: "Diplomado en Desarrollo Web",
    issuer: "Universidad Tecnológica del Norte",
    issuedAt: "2026-01-18",
    objectId: "0x8f…a91c",
  },
  {
    id: "cred-002",
    title: "Certificación en Smart Contracts (SUI)",
    issuer: "Academia CredSUI",
    issuedAt: "2026-02-07",
    objectId: "0x4a…2f3d",
  },
  {
    id: "cred-003",
    title: "Bootcamp de React Avanzado",
    issuer: "Tech Institute",
    issuedAt: "2026-03-01",
  },
];

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function DashboardPage() {
  const onChainCount = mockCredentials.filter((c) => c.objectId).length;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-100 md:text-4xl">
            Tus credenciales
          </h1>
          <p className="mt-2 max-w-2xl text-zinc-300">
            Administrá, revisá y compartí tus logros académicos verificables en
            SUI.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
        >
          Volver al inicio
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-400">Total de credenciales</p>
          <p className="mt-2 text-3xl font-semibold text-zinc-100">
            {mockCredentials.length}
          </p>
        </article>
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-400">On-chain</p>
          <p className="mt-2 text-3xl font-semibold text-cyan-400">
            {onChainCount}
          </p>
        </article>
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-400">Pendientes de publicar</p>
          <p className="mt-2 text-3xl font-semibold text-amber-300">
            {mockCredentials.length - onChainCount}
          </p>
        </article>
      </section>

      <section className="overflow-hidden rounded-xl border border-zinc-800">
        <div className="border-b border-zinc-800 bg-zinc-900/40 px-5 py-3">
          <h2 className="text-lg font-medium text-zinc-100">
            Listado de credenciales
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-900/60 text-zinc-400">
              <tr>
                <th className="px-5 py-3 font-medium">Título</th>
                <th className="px-5 py-3 font-medium">Emisor</th>
                <th className="px-5 py-3 font-medium">Fecha</th>
                <th className="px-5 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockCredentials.map((credential) => (
                <tr
                  key={credential.id}
                  className="border-t border-zinc-800 text-zinc-200"
                >
                  <td className="px-5 py-4">{credential.title}</td>
                  <td className="px-5 py-4">{credential.issuer}</td>
                  <td className="px-5 py-4">
                    {formatDate(credential.issuedAt)}
                  </td>
                  <td className="px-5 py-4">
                    {credential.objectId ? (
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
                        Verificable
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300">
                        Pendiente
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
