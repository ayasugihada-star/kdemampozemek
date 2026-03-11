# Kde mám pozemek — Next.js 14 Redesign

Modern redesign of kdemampozemek.cz built with **Next.js 14 App Router** and **TypeScript**.

## Stack

- **Next.js 14** — App Router, server components where possible
- **TypeScript** — strict mode
- **CSS Modules** — scoped, zero-runtime styles
- **Google Fonts** — Cormorant Garamond + DM Sans

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Project Structure

```
kdemampozemek/
├── app/
│   ├── layout.tsx        # Root layout, metadata, font loading
│   ├── page.tsx          # Page composition
│   └── globals.css       # CSS variables, global resets
├── components/
│   ├── Nav.tsx / .module.css       # Sticky nav, mobile burger menu
│   ├── Hero.tsx / .module.css      # Full-screen hero with cadastral overlay
│   ├── Services.tsx / .module.css  # 5 service cards + CTA card
│   ├── About.tsx / .module.css     # Team members
│   ├── Expertise.tsx / .module.css # 6 expertise items (dark section)
│   ├── Contact.tsx / .module.css   # Contact form with toast
│   └── Footer.tsx / .module.css    # Footer with nav links
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Design Tokens (CSS Variables)

All colors are defined in `app/globals.css`:

| Variable        | Value     | Usage                     |
|-----------------|-----------|---------------------------|
| `--green-deep`  | `#1a3a2a` | Primary brand, hero bg    |
| `--green-mid`   | `#2d5a3d` | Hover states              |
| `--green-pale`  | `#d4e8db` | Icon backgrounds, tags    |
| `--cream`       | `#f7f4ef` | Section alternates        |
| `--gold`        | `#b8955a` | Accents, CTAs             |
| `--gold-light`  | `#d4b07a` | Italic text on dark bg    |

## Connecting a Real Form Backend

The contact form in `Contact.tsx` currently shows a toast notification.
To wire it up, replace the `submit` function with a `fetch` call:

```ts
// e.g. using Resend, Formspree, or your own API route
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

Create `app/api/contact/route.ts` to handle the submission server-side.

## Deployment

Works on **Vercel** (zero config), **Netlify**, or any Node.js host:

```bash
# Vercel
npx vercel

# Or just push to GitHub and import into Vercel dashboard
```
