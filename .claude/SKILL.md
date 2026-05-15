# SKILL — Mira Consulting Web

## Contexto del proyecto

Sitio web corporativo para **Mira Consulting**, consultora chilena de transformación organizacional, coaching ejecutivo y selección de talentos.

- **URL destino**: www.miraconsulting.cl
- **Tipo**: Landing page única (single page)
- **Idioma**: Español (es-CL)

## Stack y versiones

| Tecnología | Versión | Notas |
|-----------|---------|-------|
| Next.js | 16.2.6 | App Router, sin Turbopack |
| React | 19.2.4 | JSX automático |
| TypeScript | 5.x | strict: true |
| Tailwind CSS | v4 | via @tailwindcss/postcss |
| Inter | Google Fonts | next/font/google |

## Restricciones de la máquina

- **Turbopack** no funciona en esta máquina (bindings nativos corruptos). Siempre usar `--webpack`.
- **ENOSPC** frecuente — disco C: tiende a llenarse. `npm cache clean --force` libera ~3.5 GB.
- **tsc** no está en PATH. Usar: `node node_modules/typescript/lib/tsc.js --noEmit`

## Patrones de código

### Imports de tipos React

```typescript
// SIEMPRE importar tipos explícitamente
import type { ReactNode, ChangeEvent, FormEvent } from "react";

// NUNCA usar React.* sin importar React
type Props = { icon: ReactNode }; // ✓ con import type { ReactNode }
type Props = { icon: React.ReactNode }; // ✗ sin import React
```

### 'use client' — cuándo y dónde

Solo en componentes que usan hooks del lado del cliente:
- `Header.tsx` — useState para menú móvil
- `Contact.tsx` — useState para formulario controlado
- `WhatsAppFab.tsx` — marcado como client aunque es estático (para futura extensión)

El resto son Server Components.

### next/image

```tsx
// Siempre con width y height explícitos para imágenes no fill
<Image src="/images/team/nombre.png" alt="..." width={160} height={160} />

// Para imágenes fill (background), usar sizes
<Image src="/images/hero.jpg" alt="..." fill className="object-cover" sizes="100vw" />
```

### WhatsApp links

```typescript
const WA_BASE = "https://wa.me/56995468913?text=";
// Texto siempre encodeURIComponent()
const url = `${WA_BASE}${encodeURIComponent("Hola Mira Consulting...")}`;
```

### Colores — nunca hardcodear fuera de inline style

Los colores custom de la marca van siempre como `style={{ color: "#2a7f7f" }}` o en globals.css como variables CSS. NO como clases Tailwind arbitrarias (eg: `text-[#2a7f7f]`).

## Comandos de desarrollo

```bash
# Dev server (OBLIGATORIO --webpack)
npm run dev -- --webpack

# Type check
node node_modules/typescript/lib/tsc.js --noEmit

# Liberar espacio si hay ENOSPC
npm cache clean --force
```

## Datos del cliente

| Campo | Valor |
|-------|-------|
| Empresa | Mira Consulting |
| Directora | Sandra Ramos |
| Consultora | Esther Munizaga |
| WhatsApp | +56 9 9546 8913 → `56995468913` |
| Email | sandra.ramos@miraconsulting.cl |
| Redes | LinkedIn, Instagram, Facebook |
| País | Chile |
