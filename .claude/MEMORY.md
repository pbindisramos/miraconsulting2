# MEMORY — Mira Consulting Web

Última actualización: 2026-05-15

## Estado actual

Sitio construido completamente. TypeScript pasa sin errores. Dev server listo para correr.

## Lo que fue hecho

### Sesión 2026-05-15

**Tarea:** Construir sitio web completo para Mira Consulting desde cero usando Next.js 14+.

**Resultado:** Sitio funcional implementado con todos los componentes pedidos.

### Componentes creados

| Componente | Tipo | Descripción |
|-----------|------|-------------|
| Logo.tsx | Server | SVG inline con nombre Mira Consulting |
| Header.tsx | Client | Sticky con menú móvil responsive |
| Hero.tsx | Server | Imagen de fondo con overlay gradient |
| About.tsx | Server | Imagen + texto propósito + stats |
| ServicesCompany.tsx | Server | Grid 3 cols — 6 servicios empresas |
| ServicesPeople.tsx | Server | Grid 4 cols — 4 servicios personas |
| Team.tsx | Server | Fotos Sandra y Esther con bio |
| CtaBanner.tsx | Server | Banner azul/teal con CTA WhatsApp |
| Contact.tsx | Client | Formulario controlado → redirige a WhatsApp |
| WhatsAppFab.tsx | Client | Botón flotante fijo con animación pulse |
| Footer.tsx | Server | Links, contacto, redes sociales |

### Imágenes

**Reutilizadas del sitio anterior:**
- `team-sandra-ramos.png` (Sandra Ramos, directora)
- `team-ester-munizaga.png` (Esther Munizaga)

**Descargadas de Unsplash (licencia libre):**
- `hero-meeting.jpg` — photo-1600880292203-757bb62b4baf
- `about-purpose.jpg` — photo-1542744173-8e7e53415bb0
- `services-coaching.jpg` — photo-1521737711867-e3b97375f902
- `services-leadership.jpg` — photo-1552664730-d307ca884978
- `services-talent.jpg` — photo-1573497019940-1c28c88b4f3e
- `cta-collaboration.jpg` — photo-1560472355-536de3962603

### Issues encontrados y resueltos

1. **Disco lleno (ENOSPC)** durante la instalación de npm — resuelto con `npm cache clean --force` (liberó ~3.5 GB).

2. **TypeScript corrupto** por disco lleno — resuelto reinstalando TypeScript con `npm install typescript@5 --save-dev`.

3. **Turbopack no soportado** en esta máquina (bindings nativos corruptos) — usar `npm run dev -- --webpack`.

4. **Archivos vaciados** por ENOSPC durante edición — Header.tsx y Contact.tsx se vaciaron y tuvieron que recrearse.

5. **React.* sin importar** — los tipos `ReactNode`, `ChangeEvent`, `FormEvent` de React deben importarse explícitamente: `import type { ReactNode } from "react"`. En Next.js con jsx automático, React para JSX no necesita importarse, pero los tipos SÍ.

### Decisiones de diseño

**Paleta:**
- Navy #1e3a5f (primario/confianza) + Teal #2a7f7f (acento fresco) + Coral #e8704a (calidez/energía)
- Justificación: Teal comunica transformación y salud; Coral añade calidez humana sin ser rojo corporativo; Navy da seriedad y confianza.

**Tipografía:** Inter — legible, moderna, libre de Google Fonts.

**Layout:** Landing page única con anclas. Header sticky. Secciones alternadas (blanco y arena #f5f0eb).

**Formulario de contacto:** En lugar de backend, redirige a WhatsApp con los datos del form pre-cargados. Decisión pragmática: cero infraestructura, mayor conversión directa.

## Próximos pasos posibles

- [ ] Añadir testimonios/casos de éxito
- [ ] Agregar sección de blog (ya existe en el sitio anterior)
- [ ] Configurar dominio y deploy en Vercel
- [ ] Reemplazar imágenes de Unsplash con fotos propias del equipo
- [ ] Agregar Google Analytics o similar
- [ ] Formulario de contacto con backend real (Resend, Formspree, etc.)

## Comandos útiles

```bash
# Dev server (SIEMPRE usar --webpack en esta máquina)
npm run dev -- --webpack

# Type check
node node_modules/typescript/lib/tsc.js --noEmit

# Si hay ENOSPC
npm cache clean --force
```
