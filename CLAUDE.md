# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Maxime Bonnesoeur's personal portfolio — built with Astro 5, Tailwind CSS v4, and MDX. Deployed to GitHub Pages at `www.maximebonnesoeur.ovh`.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build static site to dist/
npm run preview  # Preview built site locally
```

Push to `main` triggers automatic GitHub Actions deploy.

## Architecture

- **Static-only output** — no SSR, no server endpoints (`output: 'static'` in `astro.config.mjs`)
- **No JS frameworks** — all interactivity is vanilla JS in `<script is:inline>` blocks
- **Tailwind v4** loaded via `@tailwindcss/vite` Vite plugin, NOT PostCSS
- **Content Collections** for blog (MDX) and projects (Markdown), schemas defined with Zod in `src/content/config.ts`
- **Dark mode** via `html.dark` class, toggled by `ThemeToggle.astro`, persisted in `localStorage`
- `Hero.astro` makes a build-time fetch to the Open-Meteo API for Zürich's current elevation

## Key Files

| What | Where |
|---|---|
| Global styles & color tokens | `src/styles/global.css` |
| Base HTML layout (meta, nav, footer, scroll reveal) | `src/layouts/BaseLayout.astro` |
| Homepage composition | `src/pages/index.astro` |
| Career data (single source of truth) | `src/data/resume.json` |
| Content schemas | `src/content/config.ts` |

## Components

Each homepage section is a standalone `.astro` component in `src/components/`:
- `ElevationTimeline.astro` — SVG career chart; reads `resume.json`, renders bold via local `renderBold()` helper
- `Projects.astro` — bento grid from content collection, filterable by `category`
- `Terminal.astro` — hidden terminal overlay (backtick key)
- `KonamiEgg.astro` — Konami code trail mode easter egg

## Resume / Career Data

`src/data/resume.json` has four top-level arrays: `experience[]`, `education[]`, `academic[]`, `publications[]`.

Each `experience`/`education` entry needs:
- `sortYear` — chronological position on the elevation chart
- `elevation` — Y-axis position on SVG (arbitrary scale, higher = more senior)
- `type` — `"work"` or `"education"` for color coding
- `bullets[]` / `description` — support `**bold**` markdown syntax (rendered by `renderBold()`)

## Content Collections

**Blog** (`src/content/blog/*.mdx`):
```yaml
title: "Post Title"
description: "Summary"
date: 2026-03-05
tags: ["AI", "Tutorial"]
draft: false
```

**Projects** (`src/content/projects/*.md`):
```yaml
title: "Project Name"
description: "Short description"
image: "/assets/img/projects/filename.png"  # optional
url: "https://..."                           # optional
github: "https://github.com/..."             # optional
tags: ["Tag1", "Tag2"]
category: "project"  # or: education, publication, certification
featured: false
order: 7             # lower = appears first
```

## Design System

All tokens in `src/styles/global.css` `@theme` block:
- **Backgrounds**: `parchment` (light) / `night` (dark)
- **Cards**: `warm-white` (light) / `campfire` (dark), borders `stone` / `campfire-border`
- **Text**: `slate` / `moonstone` (primary), `graphite` / `dim` (secondary)
- **Accents**: `trail-orange` (primary), `forest-green` (education), `topo-blue` (data), `ridge-red` (danger) — each has a `-dark` variant
- **Fonts**: `DM Serif Display` (headings via `font-heading`), `Inter` (body), `JetBrains Mono` (mono)

Conventions:
- Every section starts with `<TopoDivider />` for visual separation
- Section wrapper: `max-w-6xl mx-auto px-6 py-24`
- Card pattern: `bg-warm-white dark:bg-campfire rounded-2xl border border-stone dark:border-campfire-border`
- Interactive cards: add `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`

## Easter Eggs — Do Not Remove

1. Profile photo click escalation (About section)
2. Terminal overlay (backtick key)
3. Konami code trail mode
4. Summit treasure hunt — 5 hidden `▲` markers with `data-summit` attributes, progress in `localStorage`
5. `/coffee` hidden page
6. 404 Toilet Radar canvas mini-game
