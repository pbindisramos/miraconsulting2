# Mira Consulting Web — Contexto del Proyecto

## Stack

- **Framework:** Next.js 16 con App Router
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS v4 (sin CSS Modules ni styled-components)
- **Fuentes:** Inter via `next/font/google`
- **Imágenes:** `next/image` con width/height explícitos

## Estructura

```
src/
  app/
    layout.tsx      # Metadata SEO, fuente Inter, lang="es"
    page.tsx        # Página principal (landing page única)
    globals.css     # Variables de color, scroll-behavior, focus-visible
  components/
    Logo.tsx        # SVG inline, sin deps externas
    Header.tsx      # 'use client' — useState para menú móvil
    Hero.tsx        # Server Component — imagen de fondo con overlay
    About.tsx       # Server Component — imagen + stats
    ServicesCompany.tsx  # Server Component — grid 3 cols
    ServicesPeople.tsx   # Server Component — grid 4 cols
    Team.tsx        # Server Component — fotos Sandra y Esther
    CtaBanner.tsx   # Server Component — CTA WhatsApp
    Contact.tsx     # 'use client' — formulario controlado con useState
    WhatsAppFab.tsx # 'use client' — botón flotante WhatsApp
    Footer.tsx      # Server Component — links y contacto
public/
  images/
    hero-meeting.jpg
    about-purpose.jpg
    services-coaching.jpg
    services-leadership.jpg
    services-talent.jpg
    cta-collaboration.jpg
    team/
      team-sandra-ramos.png
      team-ester-munizaga.png
```

## Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| Navy | #1e3a5f | Textos principales, fondos oscuros |
| Teal | #2a7f7f | Acento primario, íconos, badges |
| Coral | #e8704a | Acento cálido, highlights, CTAs secundarios |
| Sand | #f5f0eb | Fondos alternados de sección |
| White | #ffffff | Fondo base |
| WhatsApp Green | #25D366 | Todos los botones WhatsApp |

## Reglas de componentes

- `'use client'` SOLO en: Header (menú móvil), Contact (formulario), WhatsAppFab
- El resto son Server Components
- NO usar `any` en TypeScript
- Importar tipos de React explícitamente: `import type { ReactNode } from "react"`

## WhatsApp

Número: +56 9 9546 8913 → `56995468913`
Formato base: `https://wa.me/56995468913?text=...`

Textos pre-cargados según contexto:
- Hero: "quiero%20agendar%20una%20consulta%20inicial"
- CTA Banner: "me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
- FAB: "quiero%20m%C3%A1s%20informaci%C3%B3n"
- Formulario: texto dinámico con datos del form

## Correr el dev server

```bash
# En Windows, usar --webpack (Turbopack no está soportado en esta máquina)
npm run dev -- --webpack
```

Acceder en: http://localhost:3000

## Type check

```bash
node node_modules/typescript/lib/tsc.js --noEmit
```

## Disco

El disco C: tiene tendencia a llenarse. Si hay errores ENOSPC:
1. `npm cache clean --force` (libera ~3.5 GB del cache npm)
2. Verificar con `Get-PSDrive C`

## Contacto cliente

- Email: sandra.ramos@miraconsulting.cl
- WhatsApp: +56 9 9546 8913
- Sitio anterior: www.miraconsulting.cl
