# Trixync Design System

Design system extracted from the live landing page and shared UI. Source of truth: Tailwind CSS v4 theme tokens in `src/app/globals.css`, fonts in `src/app/[locale]/layout.tsx`, and marketing components under `src/features/` + `src/components/`.

**Stack:** Next.js · Tailwind v4 · shadcn (base-nova) · Motion · Three.js (deferred)

**Default experience:** Dark-first (`class="dark"` on `<html>`; theme preference stored in `localStorage`, fallback `"system"`).

---

## 1. Brand

| Element | Value |
| --- | --- |
| Name | **Trixync** |
| Domain | trixync.id |
| Tagline | Technology & Systems Studio |
| Lockup / campaign line | **Built in Sync** |
| Hero lockup | “Your operations,” / “Built in Sync.” |
| Contact | hello@trixync.id |
| Location | Medan · North Sumatra · Indonesia |
| Locales | `en`, `id`, `zh` |
| Social | Instagram primary (`@trixync.id`); LinkedIn / GitHub in config |

### Voice

Direct, operational, anti-hype. Partner studio tone — production systems over prototypes. Prefer concrete language (bottlenecks, spreadsheets, WhatsApp chaos) over generic SaaS marketing.

### Logo

Assets live in `/public/brand/`. Variants: `full` | `text` | `icon`, each with light and dark (white) files.

| Theme | Fill |
| --- | --- |
| Light mark | `#101726` |
| Dark mark | `#fcfdff` |

**Sizes** (`src/content/brand.ts`):

| Size | Full | Text | Icon |
| --- | --- | --- | --- |
| `xs` | `h-7` | `h-4` | `h-6 w-6` |
| `sm` | `h-8` | `h-5` | `h-7 w-7` |
| `md` | `h-10` | `h-6` | `h-8 w-8` |
| `lg` | `h-12` | `h-7` | `h-10 w-10` |

---

## 2. Color

### Brand (theme-invariant)

| Token | Value | Role |
| --- | --- | --- |
| `brand` / `--color-brand` | `#2138b8` | Primary navy-blue; marketing CTAs |
| `brand-light` / `--color-brand-light` | `#3866f2` | Accent, hover, glow, rings |
| Chart mid | `#5b8af7` | `--chart-3` |
| Destructive | `#ef4444` | Errors / destructive actions |

### Semantic — Light (`:root`)

| Token | Value |
| --- | --- |
| `--background` | `#f8f9fc` |
| `--foreground` | `#0c0e14` |
| `--card` | `#ffffff` |
| `--card-foreground` | `#0c0e14` |
| `--popover` | `#ffffff` |
| `--popover-foreground` | `#0c0e14` |
| `--primary` | `#2138b8` |
| `--primary-foreground` | `#fcfdff` |
| `--secondary` | `rgba(255, 255, 255, 0.6)` |
| `--secondary-foreground` | `#0c0e14` |
| `--muted` | `rgba(255, 255, 255, 0.5)` |
| `--muted-foreground` | `#5c6478` |
| `--accent` | `#3866f2` |
| `--accent-foreground` | `#fcfdff` |
| `--border` | `rgba(12, 14, 20, 0.08)` |
| `--input` | `rgba(12, 14, 20, 0.06)` |
| `--ring` | `#3866f2` |
| `--header-surface` | `rgba(246, 248, 252, 0.55)` |
| `--header-tint` | `rgba(56, 102, 242, 0.04)` |
| `--header-border` | `rgba(12, 14, 20, 0.04)` |

Chart scale: `#2138b8` · `#3866f2` · `#5b8af7` · `#e8ecf4` · `#f8f9fc`

### Semantic — Dark (`.dark`)

| Token | Value |
| --- | --- |
| `--background` | `#030304` |
| `--foreground` | `#f2f4f8` |
| `--card` | `rgba(255, 255, 255, 0.04)` |
| `--card-foreground` | `#f2f4f8` |
| `--popover` | `#0a0a0c` |
| `--popover-foreground` | `#f2f4f8` |
| `--primary` | `#3866f2` |
| `--primary-foreground` | `#fcfdff` |
| `--secondary` | `rgba(255, 255, 255, 0.04)` |
| `--muted` | `rgba(255, 255, 255, 0.03)` |
| `--muted-foreground` | `#949bab` |
| `--border` | `rgba(255, 255, 255, 0.07)` |
| `--input` | `rgba(255, 255, 255, 0.06)` |
| `--ring` | `#3866f2` |
| `--header-surface` | `rgba(3, 3, 6, 0.42)` |
| `--header-tint` | `rgba(56, 102, 242, 0.1)` |
| `--header-border` | `rgba(255, 255, 255, 0.05)` |

Chart neutrals in dark: `#12141a` · `#030304`

**Aliases:** `--color-navy` → background · `--color-navy-light` → card · `--color-surface` → foreground

### Functional accents (pillars / chips)

| Accent | Text | Glow |
| --- | --- | --- |
| Emerald | `text-emerald-400/90` | `rgba(52, 211, 153, 0.14)` |
| Sky | `text-sky-400/90` | `rgba(56, 189, 248, 0.14)` |
| Violet | `text-violet-400/90` | `rgba(167, 139, 250, 0.14)` |
| Amber | `text-amber-400/90` | `rgba(251, 191, 36, 0.14)` |

**Project category chips:** software → sky · enterprise → brand · web → violet

### Gradients & atmosphere

| Utility | Use |
| --- | --- |
| `--ambient-gradient` / `.bg-ambient-wash` | Stacked radial brand washes (stronger in dark) |
| `.text-gradient-brand` | `from-brand-light to-brand` clipped text |
| `.section-glow` | Soft vertical blue fade behind sections |
| `.section-divider` | 1px horizontal brand fade (`rgba(56, 102, 242, 0.15)` at center) |
| Hero backdrop | Multi-ellipse radials using `rgba(33,56,184,*)` and `rgba(56,102,242,*)` |

---

## 3. Typography

### Families

| Role | Family | CSS variable | Weights | Source |
| --- | --- | --- | --- | --- |
| Heading | **Poppins** | `--font-heading` | 600, 700 | `next/font/google` |
| Body | **Kumbh Sans** | `--font-body` | 400, 600 | `next/font/google` |

Mapped in `@theme`: `--font-sans` → body, `--font-heading` → headings. Base styles: `html`/`body` use `font-sans`; `h1–h6` use `font-heading`.

> Note: `--font-mono` references `--font-geist-mono` but Geist Mono is not loaded.

### Scale

| Role | Spec |
| --- | --- |
| Hero H1 (line 1) | `text-[2.125rem]` → `sm:text-[2.75rem]` → `lg:text-[3.5rem]`; weight 600; LH `1.12` / `1.08`; tracking `-0.025em` |
| Hero H1 (line 2) | `font-normal`; `lg:text-[3.25rem]`; tracking `-0.02em`; muted |
| Section H2 | `text-2xl md:text-3xl` (CTA/footer often `md:text-[2rem]`) |
| Page H1 | `text-2xl sm:text-3xl md:text-4xl md:leading-tight` |
| Card H3 | `text-base`–`text-xl` / `md:text-2xl` |
| Body | `text-base` / `md:text-lg` or `md:text-[1.0625rem]`; `leading-relaxed` or `leading-[1.75]` |
| Small / UI | `text-sm`, `text-xs`, `text-[11px]`, `text-[10px]`, `text-[0.625rem]` |
| Eyebrow | `text-xs font-medium uppercase` + tracking `0.18em`–`0.22em` (footer tagline up to `0.32em`) |

**Weight practice:** Headings semibold (600); body regular; CTAs medium/semibold. Bold (700) is reserved for emphasis (e.g. timeline titles).

---

## 4. Layout & spacing

### Containers (`Container`)

| Size | Max width | Padding |
| --- | --- | --- |
| `default` | `max-w-6xl` | `px-4 sm:px-6 lg:px-8` |
| `narrow` | `max-w-4xl` | same |
| `wide` | `max-w-7xl` | same |

All: `mx-auto w-full`

### Sections (`SectionShell`)

- Vertical rhythm: `py-14 md:py-20`
- Scroll offset: `scroll-mt-20` when `id` is set (strengths may use `scroll-mt-24`)
- Header height: `--site-header-height: 5rem` (80px)
- Main clearance: `pt-20`; hero uses `-mt-20` + `pt-[calc(var(--site-header-height)+3rem)]` (md: `+4rem`)

**Variants** (optional): `default` | `muted` | `brand` | `ambient` — brand/ambient add soft blue washes.

### Breakpoints

| Token | Width |
| --- | --- |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

**Mobile lite** (`max-width: 767px`): lighter header blur, beams/tilt/spotlight reduced or off, deferred heavy effects.

### Grid patterns

| Surface | Grid |
| --- | --- |
| Strengths bento | `md:grid-cols-3`; AI tile `md:col-span-2 md:row-span-2`; auto-rows `minmax(15rem, auto)` |
| Featured projects | `lg:grid-cols-2`, gap `8`/`10` |
| Location | `md:grid-cols-[1fr_1.2fr]`; stats `sm:grid-cols-3` |
| Footer | `lg:grid-cols-12` (5 + 7) |
| Header | `grid-cols-[auto_1fr_auto]`, `h-20`, `max-w-7xl` |

### Spacing rhythm

Common gaps: `3–5`, `6`, `8`, `10`, `12`, `14`, `16`. Content columns often `max-w-2xl` / `max-w-xl` / `max-w-md`. Section dividers typically `max-w-4xl`.

---

## 5. Radius, borders, shadows

### Radius

Base: `--radius: 0.75rem` (12px)

| Token | Calc | ≈ |
| --- | --- | --- |
| `--radius-sm` | ×0.6 | 0.45rem |
| `--radius-md` | ×0.8 | 0.6rem |
| `--radius-lg` | 1× | 0.75rem |
| `--radius-xl` | ×1.4 | 1.05rem |
| `--radius-2xl` | ×1.8 | 1.35rem |
| `--radius-3xl` | ×2.2 | 1.65rem |
| `--radius-4xl` | ×2.6 | 1.95rem |

**In practice:**

| Element | Radius |
| --- | --- |
| Marketing CTAs | `rounded-full` |
| Cards | `rounded-2xl` / `rounded-3xl` |
| Form controls | `rounded-xl` |
| Icon wells | `rounded-xl` / `rounded-2xl` |
| shadcn Button | `rounded-lg` |

### Borders

Default `border-border` at ~40–60% opacity on glass surfaces. Focus: `outline: 2px solid var(--ring); outline-offset: 2px`.

### Shadows

Sparse — prefer ambient glow over heavy drop shadows.

| Context | Spec |
| --- | --- |
| Project cards | `shadow-sm` → `hover:shadow-xl hover:shadow-brand/[0.06]` |
| WhatsApp FAB | `0_4px_20px_rgba(33,56,184,0.35)` → hover `0_6px_28px_rgba(56,102,242,0.45)` |
| Service cards | `0_12px_40px_rgba(33,56,184,0.08)` (dark variant with `#3866f2`) |

---

## 6. Components

### Buttons / CTAs

Marketing CTAs are **Links**, not the shadcn `Button`:

```
rounded-full bg-brand text-primary-foreground hover:bg-brand-light
```

| Context | Padding / type |
| --- | --- |
| Header | `px-4 py-2 text-sm font-medium` |
| Hero primary | `px-6 py-3 text-sm font-medium` |
| Hero secondary | `rounded-full border border-border px-6 py-3` |
| Footer / CTA block | `px-8 py-3.5 text-sm font-semibold` |
| WhatsApp FAB | Brand fill + custom shadows; label expands on `sm+` hover |

**shadcn `Button`** (`src/components/ui/button.tsx`): variants `default | outline | secondary | ghost | destructive | link`; sizes `default | xs | sm | lg | icon*`. Available for app UI; marketing surfaces prefer pill Links.

### Cards

| Pattern | Key styles |
| --- | --- |
| Strength pillar | `rounded-2xl border-border/50 bg-card/20`, min-h 15rem, cursor glow + micro-tilt |
| AI strength feature | Same shell, min-h 22rem, Spotlight `#3866F2`, 3D scene |
| Project showcase | `rounded-3xl`, photo fill, theme scrim, category pill, hover lift `-translate-y-0.5` |
| `.glass-card` | `border-border/60 bg-card/80 backdrop-blur-md` |
| Service / about | `rounded-2xl`/`3xl`, soft brand hover shadows |

### Navigation

| Piece | Behavior |
| --- | --- |
| `SiteHeader` | Fixed; glass fades in after ~12px scroll; desktop center links + underline `after:bg-brand`; CTA right |
| `MobileNav` | Full-screen CSS animations; large `font-heading text-2xl` links |
| `LanguageSwitcher` | Dropdown / buttons; active `ring-brand/40` |
| `ThemeToggle` | Pill switch `h-7 w-12` / `h-8 w-14` |

### Forms (`form-controls.tsx`)

```
rounded-xl border-border/60 bg-background/80 px-4 py-3 text-sm
focus: border-brand/40 ring-2 ring-brand/15
```

Labels: `text-sm font-medium text-foreground/90`. Hints: `text-xs text-muted-foreground`.

### Section chrome

- `SectionShell` + `PageHeader` (eyebrow + H1 + subtitle)
- `.section-divider` between home blocks
- Footer embeds a home-style CTA block

### Utilities worth reusing

| Class | Purpose |
| --- | --- |
| `.site-header-glass` | Blurred header surface (12px blur on mobile, 20px desktop) |
| `.site-header-solid` | Solid fallback header |
| `.grain-overlay` | SVG noise (hero; hidden on mobile) |
| `.bg-ambient-wash` | Page-level ambient gradient |

---

## 7. Motion

Shared easing: `cubic-bezier(0.22, 1, 0.36, 1)`

| Pattern | Spec |
| --- | --- |
| Scroll reveal / stagger | Opacity only; **0.28s**; once; viewport margin `-40px`; stagger **0.05s** |
| Hero reveal | Opacity; **0.35s**; delays 0 / 0.08 / 0.16 / 0.24 |
| Spotlight | Keyframe 2s ease, delay 0.75s, scale 0.5→1 |
| Mobile nav | Fade 160ms; slide 220ms |
| Header glass | Opacity transition 500ms |
| Card hover | Transform 120–150ms; underline 500ms; image scale 700ms |
| Timeline | Scroll-linked brand gradient beam |
| WhatsApp | Scale 1.03 / 0.98 under `motion-safe` |

**Reduced motion:** globals CSS short-circuits animations/transitions; ambient glow hidden; hooks skip Motion/WebGL.

Library: `motion` (Framer Motion successor).

---

## 8. Imagery & effects

| Asset | Treatment |
| --- | --- |
| Logos | Theme-swapped SVG marks |
| Project photos | Cover, top-aligned, hover scale ~1.05, gradient scrim |
| Grain | Hero noise overlay, opacity ~40%, desktop-oriented |
| Ambient orbs | Large `blur-[100–120px]` brand blobs; **md+ only** |
| 3D (R3F) | Hero + AI strength scenes; deferred mount; pause when mobile menu open |
| Background beams | SVG path animation; desktop only; opacity ~25% / dark ~40% |
| OG image | `#101726` + blue dot grid + white logo |

**Visual direction:** Deep black + blue ambient, glass header, photo cards with heavy scrims, technical 3D accents. Not flat purple/cream AI defaults.

---

## 9. Page architecture (home)

1. **Hero** — eyebrow, encrypted headline, subhead, dual CTAs, beams / 3D  
2. **Strengths** — bento (AI feature + four pillars)  
3. Section divider  
4. **Approach** — timeline (4 steps)  
5. Divider  
6. **Featured projects** — two-column showcase  
7. Divider  
8. **Location** — Medan / Indonesia / Remote  

**Global chrome:** skip link → `SiteHeader` → `main` → footer (CTA + sitemap) → `FloatingWhatsApp`

---

## 10. Implementation map

| Concern | Path |
| --- | --- |
| Tokens / utilities | `src/app/globals.css` |
| Fonts / shell | `src/app/[locale]/layout.tsx` |
| Theme | `src/components/layout/ThemeProvider.tsx`, `ThemeScript.tsx` |
| Brand assets config | `src/content/brand.ts` |
| Site / nav config | `src/content/site.ts` |
| Container / section | `src/components/shared/Container.tsx`, `SectionShell.tsx` |
| Forms | `src/components/shared/form-controls.tsx` |
| Header / footer | `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx` |
| Home sections | `src/features/home/**` |
| Copy | `src/i18n/messages/{en,id,zh}.json` |

---

## 11. Design rules (do / don’t)

**Do**

- Use `brand` / `brand-light` for marketing actions; keep glass + ambient blue atmosphere.
- Prefer Poppins for headings, Kumbh Sans for body.
- Use pill (`rounded-full`) CTAs on marketing surfaces.
- Respect mobile-lite: defer WebGL, reduce blur, skip beams on small viewports.
- Honor `prefers-reduced-motion`.

**Don’t**

- Don’t introduce purple-on-white or cream/terracotta “AI default” palettes.
- Don’t overuse cards in hero; keep the first viewport brand + headline + one support line + CTA + dominant visual.
- Don’t rely on heavy multi-layer shadows; prefer soft brand glow.
- Don’t assume light mode is primary — dark is the default experience.
- Don’t mix shadcn `rounded-lg` buttons into primary marketing CTAs without intent; the product language is pill Links.

---

## 12. Known inconsistencies (for maintainers)

1. Marketing CTAs use `bg-brand` (`#2138b8`) in both themes, while dark `--primary` is `#3866f2`.
2. shadcn `Button` exists but is largely unused on marketing pages.
3. `--font-geist-mono` is declared but not loaded.
4. `CtaSection` exists under home features but the live home CTA lives in the footer.
5. Several Aceternity UI pieces are present in `src/components/ui/` but unused on the home page.

---

*Generated from the Trixync landing page codebase. Prefer updating this document when tokens or core patterns change in `globals.css` or shared layout components.*
