# Siddharth Nigam — Portfolio

Personal portfolio website of **Siddharth Nigam**, an AI-Driven Full Stack Developer from Ujjain, India. Built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

🌐 **Live:** [siddharthnigam.dev](https://siddharthnigam.dev)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| Forms / Email | React Hook Form + EmailJS |
| SEO | react-helmet-async |
| Testing | Vitest + Playwright |

---

## Pages

- `/` — Hero, stats, skills marquee, featured projects, contact CTA
- `/about` — Bio and technical skills
- `/projects` — All projects with modal detail view
- `/resume` — Education timeline, skills, downloadable PDF
- `/contact` — Contact form (EmailJS) + social links

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
git clone https://github.com/Siddharthnigam/siddharth-s-vision.git
cd siddharth-s-vision
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials at [emailjs.com](https://www.emailjs.com/).

### Development

```bash
npm run dev
```

Runs at `http://localhost:8080`

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

### Type Check

```bash
npm run type-check
```

### Tests

```bash
npm run test          # unit tests (vitest)
npx playwright test   # e2e tests
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Set **Framework Preset** → `Vite`
4. Add environment variables from `.env` in the Vercel dashboard
5. Deploy

`vercel.json` is already configured for SPA routing.

### Netlify

1. Push to GitHub
2. Connect repo at [app.netlify.com](https://app.netlify.com)
3. Set **Build command** → `npm run build`
4. Set **Publish directory** → `dist`
5. Add environment variables in Site Settings → Environment Variables
6. Deploy

`public/_redirects` is already configured for SPA routing.

### GitHub Pages

```bash
npm run build
# deploy the dist/ folder using gh-pages or manually
```

> ⚠️ For GitHub Pages, set `base` in `vite.config.ts` to your repo name: `base: "/repo-name/"`

---

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── AnimationWrapper.tsx
│   └── SEO.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── education.ts
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
├── App.tsx
└── main.tsx
public/
├── robots.txt
├── sitemap.xml
└── _redirects
```

---

## SEO

- Per-page meta tags via `react-helmet-async`
- `sitemap.xml` at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- Open Graph + Twitter Card tags on every page
- Canonical URLs pointing to `siddharthnigam.dev`

---

## Environment Variables Reference

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

> All `VITE_` prefixed variables are exposed to the browser bundle. Never store secrets here.

---

## License

MIT © [Siddharth Nigam](https://github.com/Siddharthnigam)
