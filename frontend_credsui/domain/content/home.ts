/**
 * Contenido de marketing de la home — única fuente de verdad para textos.
 */
export const homeContent = {
  brand: "CredSUI",
  tagline:
    "Credenciales académicas verificables en la blockchain SUI: propiedad del estudiante, imposibles de falsificar.",
  hero: {
    headline: "Tu trayectoria académica, verificable en segundos",
    subheadline:
      "CredSUI convierte cada insignia o logro en un activo digital único sobre SUI. Las instituciones y empresas validan habilidades reales sin fricción.",
    primaryCta: "Explorar la plataforma",
    secondaryCta: "Cómo funciona la verificación",
  },
  problem: {
    title: "El problema que resolvemos",
    points: [
      {
        title: "Certificados fáciles de falsificar",
        body: "Los títulos en papel o PDF pueden copiarse. Validar origen y autenticidad suele ser lento y costoso.",
      },
      {
        title: "Difícil demostrar habilidades reales",
        body: "Currículums y enlaces externos no prueban por sí solos que una formación ocurrió y fue emitida por quien dice.",
      },
    ],
  },
  solution: {
    title: "CredSUI sobre SUI",
    lead:
      "Cada credencial es un activo digital único, propiedad del estudiante, inmutable y comprobable on-chain.",
    points: [
      "Verificación en segundos por cualquier institución o empresa.",
      "Reduce el fraude académico al anclar la emisión a la blockchain.",
      "Identidad profesional descentralizada y confiable para el futuro del trabajo.",
    ],
  },
} as const;
