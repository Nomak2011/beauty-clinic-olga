# Beauty Clinic — Project Rules

## Goal
Elite multi-page website for a cosmetology clinic in Nuremberg, Germany.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, GSAP
- **Language:** TypeScript (strict)
- **React:** 19

## Design System
- **Style:** Luxury / Premium
- **Palette:** blue (`#0ea5e9`), white (`#ffffff`), lime-green (`#a3e635`), deep dark (`#0a0a0a`)
- **Effects:** Glassmorphism (backdrop-blur, semi-transparent backgrounds)
- **Layout:** Bento Grid for services section
- **Typography:** Clean sans-serif (Geist / Inter)

## Architecture
- `src/app/` — pages (App Router)
- `src/components/` — reusable UI components
- `src/components/sections/` — page sections (Hero, Services, About, etc.)
- `src/components/ui/` — atoms (Button, Card, Badge, etc.)
- `src/lib/` — utilities, constants, helpers
- `src/assets/` — static assets (images, icons, fonts)

## Rules
1. All work stays inside `/mnt/HC_Volume_104494874/beauty-clinic`.
2. Keep components small and composable.
3. Use CSS variables + Tailwind for theming.
4. Animations: Framer Motion for layout/micro-interactions, GSAP for scroll-driven effects.
5. Mobile-first responsive design.
6. No deprecated libraries. Keep dependencies minimal.
7. Semantic HTML, accessibility (ARIA) where applicable.
8. Russian comments/docs for the team; code identifiers in English.
