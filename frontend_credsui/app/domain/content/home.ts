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
  nav: [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#para-quien", label: "Para quién" },
  ] as const,
  stats: [
    {
      value: "< 5 s",
      label: "Verificación típica",
      hint: "Consulta pública sin login",
    },
    {
      value: "SUI",
      label: "Red objetivo",
      hint: "Pruebas on-chain y consenso Narwhal",
    },
    {
      value: "24/7",
      label: "Disponibilidad",
      hint: "Estado y enlaces siempre accesibles",
    },
  ] as const,
  howItWorks: {
    title: "Cómo funciona en tres pasos",
    steps: [
      {
        title: "La institución emite",
        body: "Se registra el logro y se ancla la credencial en SUI con metadatos verificables.",
      },
      {
        title: "El estudiante posee",
        body: "La credencial queda asociada a su identidad digital; puede compartirla con un enlace o QR.",
      },
      {
        title: "Cualquiera valida",
        body: "Empresas u otras escuelas confirman autenticidad contra el ledger sin intermediarios lentos.",
      },
    ],
  } as const,
  features: {
    title: "Funcionalidades que ya podés explorar",
    subtitle:
      "La app sigue creciendo; estas piezas muestran el flujo institucional y la experiencia del verificador.",
    items: [
      {
        id: "dashboard",
        title: "Dashboard institucional",
        body: "Vista de control con KPIs, actividad reciente y endpoints de credenciales (datos demo).",
        cta: "Abrir dashboard",
        href: "/dashboard",
      },
      {
        id: "verify",
        title: "Verificación pública",
        body: "Pantalla de resultado verificado con detalle de la credencial y prueba on-chain (demo).",
        cta: "Ver demo de verificación",
        href: "/verify",
      },
      {
        id: "wallet",
        title: "Wallet y cuenta",
        body: "Conexión de wallet y perfil desde la barra superior del dashboard; preparado para integración Sui.",
        cta: "Ir al dashboard",
        href: "/dashboard",
      },
    ],
  } as const,
  audience: {
    title: "Para quién es CredSUI",
    segments: [
      {
        title: "Instituciones",
        body: "Emisión trazable, menos soporte por “¿es real este certificado?” y mejor reputación digital.",
      },
      {
        title: "Estudiantes y egresados",
        body: "Un solo lugar para acreditar logros; compartís prueba criptográfica, no solo un PDF.",
      },
      {
        title: "Reclutadores y socios",
        body: "Validación en segundos antes de entrevistas o admisiones, con menos fricción operativa.",
      },
    ],
  } as const,
  closing: {
    title: "¿Listo para probar el flujo?",
    body: "Entrá al dashboard para ver el panel institucional o abrí la verificación pública para el resultado demo.",
    primaryCta: "Ir al dashboard",
    secondaryCta: "Ver verificación demo",
  } as const,
  footer: {
    note: "CredSUI — protocolo de credenciales académicas sobre SUI.",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/verify", label: "Verificar" },
      { href: "#como-funciona", label: "Cómo funciona" },
    ] as const,
  },
} as const;
