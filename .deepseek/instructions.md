# Maison Hoyam — Project Context

## Project Overview

**Maison Hoyam** is a premium organic hair care e-commerce brand from the UAE. This is the company's Next.js marketing site with a contact/lead-generation backend.

## Tech Stack

- **Framework**: Next.js 14 (App Router) — prefer server components; use `"use client"` only for interactivity
- **Language**: TypeScript strict mode — full type annotations, no `any` without justification
- **Package Manager**: pnpm
- **Database**: PostgreSQL via Prisma ORM — schema-first, run `npx prisma generate` after schema changes
- **CSS**: Tailwind CSS with custom design tokens — never hardcode colors, use `bg-primary`, `text-muted-foreground`, etc.
- **Component Library**: shadcn/ui (Radix UI primitives) — extend via `cva`/`cn`, not raw divs
- **Animations**: Framer Motion — use `FadeIn`, `SlideIn`, `Stagger`, `HoverLift` from `@/components/ui/animate`
- **Forms**: react-hook-form + Zod validation + `@/components/ui/form`

## Brand Design Tokens

### Fonts
| Role | Font | Tailwind Class |
|------|------|----------------|
| Body | DM Sans | `font-sans` |
| Display/Serif | Playfair Display | `font-serif` or `font-display` |
| Arabic | Tajawal | `font-arabic` |
| Mono | JetBrains Mono | `font-mono` |

### Color Palette (`brand-*`)
- `brand-cream` | `brand-gold` / `gold-light` / `gold-dark` / `gold-darker` / `gold-mid` | `brand-brown` / `brown-mid` / `brown-dark` | `brand-charcoal` / `charcoal-dark`
- `brand-whatsapp` / `whatsapp-dark` — WhatsApp CTA

### Spacing
8px grid. Use Tailwind scale: `p-4` (16px), `p-6` (24px), `p-8` (32px), etc.

## Architecture

### Layout (`app/layout.tsx`)
Global providers in order:
1. `ThemeProvider` (next-themes) — light/dark mode
2. `LanguageProvider` — English / Arabic toggle
3. `Toaster` (Sonner) — global toast notifications
4. `ChunkLoadErrorHandler` — required. Prevents known ChunkLoadError race condition

### Layout Components (`@/components/layouts/`)
- `Container` — centered content with responsive padding (`size`: `sm`|`md`|`lg`|`xl`|`full`)
- `Section` — vertical spacing wrapper, accepts `id` for scroll anchors
- `PageHeader` — title + description + action buttons
- `AppShell` — sidebar + header + main (dashboards/admin)
- `AuthLayout` — centered card on gradient (login/signup)

### Pages
- `/` — Home page (hero, products showcase, testimonials)
- `/products` — Product catalog with filter
- `/about` — Brand story
- `/contact` — Contact form → API → Prisma `ContactSubmission` → Abacus AI notification

### API Routes
- `POST /api/contact` — submits contact form, stores in DB, sends Abacus AI notification

### Database (Prisma + PostgreSQL)
Single model currently:
- `ContactSubmission` — id, name, email, phone?, subject, message, status ("new"|...), createdAt

### Authentication
- NextAuth v4 installed but not actively used. Reserved for future admin panel.

## Internationalization
- Dual-language: English (LTR) + Arabic (RTL)
- Translation keys in `@/lib/translations.ts`
- Layout supports `dir` attribute switching

## CI/CD
- GitHub Actions workflows in `.github/workflows/`
  - `ci.yml` — lint → type-check → build
  - `deploy.yml` — deployment pipeline
  - `pr-checks.yml` — PR validation

## Commit Convention
`feat|fix|chore|docs|refactor|test|style|perf|ci|build(scope): description`

## Key Commands
```bash
pnpm dev          # Start dev server (Next.js 14)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm start        # Production server
npx prisma generate  # After schema changes
npx prisma db push   # Push schema to DB
```

## Component Map (`@/components/ui/`)
Full shadcn/ui suite: Button, Card, Dialog, Sheet, Drawer, DropdownMenu, Tabs, Accordion, Form, Input, Select, Textarea, Checkbox, Switch, Calendar, Table, Badge, Avatar, Tooltip, Popover, HoverCard, Command, NavigationMenu, Carousel, Sonner, Skeleton, and more. See `STYLE_GUIDE.md` for detailed usage.
