import type { VerifiableCredential } from "@/app/domain/entities/credential";

export const mockCredentials: VerifiableCredential[] = [
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
    title: "Bootcamp de React avanzado",
    issuer: "Tech Institute",
    issuedAt: "2026-03-01",
  },
];
