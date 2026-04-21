# Sridevi Vijayaraghavan — Portfolio Site

Single-page Astro portfolio. A hero with a short bio, a grid of project cards
with screenshots, a personal section (reading / coffee / writing), and contact
links.

Lives at [sridevivr.com](https://sridevivr.com). Deployed on Cloudflare Pages.

---

## Running locally

Node 18+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`. Hot-reloads on every save.

## Building

```bash
npm run build      # outputs to ./dist
npm run preview    # serves the built ./dist locally
```

---

## Editing

- **`src/components/Hero.astro`** — name, intro paragraphs, CTAs. Subtitle
  alternatives flagged in a comment block at the top of the file.
- **`src/components/Personal.astro`** — reading / coffee / writing section.
  Book covers live in `public/books/`.
- **`src/components/Contact.astro`** — email, LinkedIn, GitHub links.
- **`src/data/projects.ts`** — the project cards. Each card has a title,
  description, category, screenshot path, and links.

## Adding a new project

Append a new object to the array in `src/data/projects.ts`. Drop a screenshot
into `public/projects/`. Card grid adapts automatically.

---

## Deploying

Cloudflare Pages → connected to this repo. Build settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18

Custom domain (`sridevivr.com`) is configured in
Cloudflare Pages → Custom domains. DNS resolves automatically because the
domain is registered on Cloudflare.

Every push to `main` triggers a new deploy.

---

## Structure

```
src/
├── pages/
│   └── index.astro            # single page, composes the sections below
├── layouts/
│   └── BaseLayout.astro       # <head>, OG tags, dark-mode bootstrap, fonts
├── components/
│   ├── Hero.astro             # photo + intro + "open to new roles" badge
│   ├── Projects.astro         # section header + grid of ProjectCards
│   ├── ProjectCard.astro      # one project card
│   ├── Personal.astro         # reading / coffee / writing
│   ├── Contact.astro          # email + LinkedIn + GitHub
│   └── Footer.astro           # slim copyright line
├── data/
│   └── projects.ts            # project records
└── styles/
    └── global.css             # Tailwind entry + small utility helpers
```

## Stack

- **Astro 4** — static site, zero JS by default
- **Tailwind CSS** — styling with custom tokens (ink / accent)
- **Inter + JetBrains Mono** — typography, self-hosted via `@fontsource`
- **Dark mode** — respects OS preference on first paint (see inline script in
  `BaseLayout.astro`)
