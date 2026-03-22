# CLAUDE.md — bhargavchippada.github.io

## Project Overview

Personal website for Bhargav Chippada, hosted on GitHub Pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export via `output: 'export'`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`)
- **Theme**: System default (follows OS preference, falls back to dark), toggle via `next-themes` (`data-theme` attribute)
- **Deploy**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout — fonts, metadata, SEO, ThemeProvider
    page.tsx          # Home page — composes all sections
    globals.css       # Tailwind imports, CSS custom properties, animations
  components/
    Header.tsx        # Sticky nav with glass blur + theme toggle
    Hero.tsx          # Profile photo, name, bio, location, social links
    About.tsx         # About me paragraphs
    Projects.tsx      # Project cards grid (or "Coming soon")
    ProjectCard.tsx   # Individual project card with image, tags, links
    Footer.tsx        # Copyright footer
    ThemeProvider.tsx  # next-themes wrapper (client component)
    ThemeToggle.tsx    # Sun/moon toggle button (client component)
    SocialIcons.tsx   # SVG icon components + SocialIcon wrapper
    ScrollReveal.tsx  # IntersectionObserver scroll animations (client component)
  lib/
    data.ts           # All site content — single source of truth
  types/
    index.ts          # TypeScript interfaces (SocialLink, Project, SiteData)
public/
  images/             # Profile photo, project screenshots
  .nojekyll           # Prevents GitHub Pages from running Jekyll
  sitemap.xml         # Static sitemap
  robots.txt          # Crawler directives
```

## Key Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build static export to out/
npm run lint         # ESLint
npx serve out        # Serve built output locally
```

## Content Updates

All site content lives in `src/lib/data.ts`. To update:
- **Name/bio/location/email**: Edit top-level fields in `siteData`
- **Social links**: Add/remove entries in `socialLinks` array (add icon to `SocialIcons.tsx` if new type)
- **About text**: Edit `aboutText` array (each string = one paragraph)
- **Projects**: Add entries to `projects` array (title, description, imageUrl, liveUrl, tags)

SEO metadata (title, description, OG tags, verification tokens) lives in `src/app/layout.tsx`.

## Design Conventions

- Dark theme colors defined as CSS custom properties in `globals.css` `@theme` block
- Light theme overrides via `[data-theme="light"]` selector
- Accent color: sky blue (`#38bdf8` dark, `#0284c7` light)
- Font: Inter via `next/font/google`
- Sections use `max-w-2xl` container width
- All decorative SVGs must have `aria-hidden="true"`
- Touch targets must be minimum 44x44px (use `p-2` on icon links)
- Respect `prefers-reduced-motion: reduce`

## Deployment

Push to `master` triggers GitHub Actions → builds → deploys to GitHub Pages.
Repo Settings > Pages must be set to source: "GitHub Actions".

## Notes

- `next/image` runs unoptimized (`images: { unoptimized: true }`) because static export has no server. Manually optimize images before adding to `public/images/`.
- `SOUL.md` tagline is intentional, not a placeholder.
