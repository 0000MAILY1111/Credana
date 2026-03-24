/**
 * Modelo de dominio: credencial académica verificable en SUI.
 * Las implementaciones concretas (NFT, contrato) vivirán en infrastructure.
 */
export type CredentialId = string;

export interface VerifiableCredential {
  id: CredentialId;
  title: string;
  issuer: string;
  issuedAt: string;
  /** Hash o referencia on-chain cuando exista integración */
  objectId?: string;
}

export interface CredentialVerification {
  credentialId: CredentialId;
  verifiedAt: string;
  valid: boolean;
}
