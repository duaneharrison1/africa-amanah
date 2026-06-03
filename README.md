# Africa Amanah Foundation — website

A fast, static rebuild of [africaamanah.com](https://africaamanah.com) using **Astro**.
Faithful clone of the original WordPress/Elementor site — same content, fonts (Inter),
colours (brand `#364F6B`) and layout — built to host for free instead of ~£397/yr.

## Tech

- **Astro** (static site generator) — outputs plain HTML/CSS, no database.
- Hosting target: **Vercel** (or Cloudflare Pages).
- Video: YouTube embeds / self-hosted MP4 (see below).
- Contact form: **Web3Forms** (free) — emails submissions to the charity inbox.

## Local development

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build → ./dist
```

## Deploy to Vercel (quickest)

From this folder:

```bash
npx vercel        # first run: log in (opens browser) + creates a preview URL
npx vercel --prod # promote to production / custom domain
```

Or import the GitHub repo at vercel.com → New Project → (framework auto-detected as Astro).

## Things to finish before going live

1. **Contact form key** — create a free key at [web3forms.com](https://web3forms.com) and
   paste it into `src/pages/contact-us.astro` (`WEB3FORMS_KEY`). Until then the form won't send.
2. **Images** — currently referenced from the existing WordPress media library as placeholders
   (`ASSET` in `src/data/site.js`). To go fully independent, drop the original images into
   `public/` and set `ASSET = ''`. Higher-resolution originals will look sharper.
3. **Video** — `africa.mp4` is referenced from the old host. Move it to YouTube (recommended)
   or `public/` and update `src/pages/index.astro`.
4. **Gallery captions** — the originals said "Caption needed"; add real captions in
   `src/pages/gallery.astro`.
5. **Latest campaign** — add the newest well-build run as a new charity report.

## Editing content

Most text lives directly in the page files under `src/pages/`. Shared items
(navigation, contact details, team list, donate link) are in **`src/data/site.js`** —
edit once, applies everywhere.
