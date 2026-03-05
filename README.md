# maximebonnesoeur.ovh ^^

Personal portfolio website built with Astro, Tailwind CSS v4, and MDX.

## Tech Stack

- **Framework:** [Astro 5](https://astro.build) with MDX
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Fonts:** DM Serif Display, Inter, JetBrains Mono (Google Fonts)
- **Icons:** [Lucide](https://lucide.dev)
- **Hosting:** GitHub Pages (free)
- **CI/CD:** GitHub Actions (auto-deploy on push to `main`)

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
```

## Project Structure

```
src/
  layouts/       - Base HTML layout
  components/    - Astro components (Nav, Hero, About, Skills, etc.)
  pages/         - Routes (index, blog, tools, 404, coffee)
  content/
    blog/        - MDX blog posts
    projects/    - Markdown project descriptions
  data/
    resume.json  - Structured career data (edit this to update resume)
  scripts/       - Client-side TypeScript (terminal, konami, games)
  styles/        - Global CSS with Tailwind
public/
  assets/img/    - Images
  CNAME          - Custom domain config
  favicon.svg    - Site icon
```

## Adding Content

### Blog Post
Create a `.mdx` file in `src/content/blog/`:
```yaml
---
title: "Your Title"
description: "Brief description"
date: 2026-03-05
tags: ["tag1", "tag2"]
---
Your content here...
```

### Project
Create a `.md` file in `src/content/projects/`:
```yaml
---
title: "Project Name"
description: "One-line description"
image: "/assets/img/projects/screenshot.png"
url: "https://example.com"
tags: ["Tag1", "Tag2"]
category: "project"
featured: true
order: 1
---
```

### Resume
Edit `src/data/resume.json` directly.

## Easter Eggs

- Press `` ` `` (backtick) for terminal
- Konami code for trail mode
- Click profile photo 5x
- Visit `/coffee`
- 404 page has a mini-game
- Find 5 hidden summit markers

## Deployment

Push to `main` branch. GitHub Actions builds and deploys automatically.
