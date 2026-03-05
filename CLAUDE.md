# CLAUDE.md — AI Agent Instructions

This is Maxime Bonnesoeur's personal portfolio website built with Astro 5, Tailwind CSS v4, and MDX.

## Quick Reference

| What | Where |
|---|---|
| Astro config | `astro.config.mjs` |
| Global styles & color tokens | `src/styles/global.css` |
| Base HTML layout | `src/layouts/BaseLayout.astro` |
| Homepage sections | `src/components/*.astro` (composed in `src/pages/index.astro`) |
| Career data | `src/data/resume.json` |
| Blog posts | `src/content/blog/*.mdx` |
| Project/cert cards | `src/content/projects/*.md` |
| Content schemas | `src/content/config.ts` |
| Static assets | `public/assets/img/` |
| CI/CD | `.github/workflows/deploy.yml` |

## Architecture

- **Static-only output** — no SSR, no server endpoints
- **No JS frameworks** — all interactivity is vanilla JS in `<script is:inline>` blocks
- **Tailwind v4** loaded via Vite plugin (`@tailwindcss/vite`), NOT PostCSS
- **Content Collections** for blog (MDX) and projects (Markdown) with Zod schemas
- **Dark mode** via `html.dark` class, toggled by `ThemeToggle.astro`, persisted in localStorage

## Content Editing

### Resume / career data
Edit `src/data/resume.json`. Each entry has:
- `sortYear` — controls chronological position on elevation chart
- `elevation` — Y-axis position on SVG chart (arbitrary, higher = more senior)
- `type` — `"work"` or `"education"` for color coding
- `bullets[]` / `description` — supports `**bold**` markdown syntax

### Adding projects or certifications
Create a `.md` file in `src/content/projects/` with frontmatter:
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

### Adding blog posts
Create a `.mdx` file in `src/content/blog/` with frontmatter:
```yaml
title: "Post Title"
description: "Summary"
date: 2026-03-05
tags: ["AI", "Tutorial"]
draft: false
```

## Design Tokens

All colors live in `src/styles/global.css` `@theme` block. Key tokens:
- Backgrounds: `parchment` (light), `night` (dark)
- Cards: `warm-white` / `campfire`
- Text: `slate` / `moonstone`
- Primary accent: `trail-orange` / `trail-orange-dark`
- Secondary accents: `forest-green`, `topo-blue`, `ridge-red`

## Easter Eggs

The site has 6 hidden features. Don't remove them:
1. Profile photo click escalation (About section)
2. Terminal overlay (backtick key)
3. Konami code trail mode
4. Summit treasure hunt (5 hidden markers)
5. `/coffee` hidden page
6. 404 Toilet Radar mini-game

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build static site to dist/
npm run preview  # Preview built site locally
```

Deploy happens automatically via GitHub Actions on push to `main`.
