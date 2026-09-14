# RCC ACM Website

The website for the **Riverside City College (RCC) ACM Chapter** - a single-page,
scroll-driven landing site built with Next.js, TypeScript, Tailwind CSS, and GSAP.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=flat-square&logo=greensock)

## What this is

One immersive, dark, cinematic landing page that introduces the chapter and points
people to the community. It is a single route (`/`) made of scroll-driven sections:

1. **Hero** - the RCC ACM intro.
2. **Velocity marquee** - a scrolling "Innovate / Create / Collaborate" band.
3. **Manifesto** - a held typographic statement (SplitText line reveal).
4. **Pillars** - what the club does: Build, Compete, Learn, Connect (horizontal scroll).
5. **Community** - the live video playing inside a "COMMUNITY" wordmask; scrolling flies into the I until the video is full-bleed, then holds on the invite.
6. **Meeting moment** - the next weekly meeting, with a live ruler of the week ahead, the details, and an add-to-calendar link.
7. **Footer** - the closing "Let's build" curtain and the invite to Discord.

The chapter's real hub is its Discord. The site's job is to make that obvious.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack), `output: "standalone"` |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4 (tokens in `src/app/globals.css` under `@theme inline`) |
| Scroll motion | GSAP 3.13 + ScrollTrigger + `@gsap/react`, with Lenis smooth scroll |
| Text effects | GSAP SplitText + ScrambleText (free since 2025) |
| Modal motion | Framer Motion (used only inside the event modal) |
| Fonts | Inter + JetBrains Mono (`next/font`) |
| Icons | lucide-react |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts

```bash
npm run dev          # dev server (Turbopack)
npm run build        # production build (lints + type-checks)
npm run start        # serve the production build
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # root layout, fonts, metadata, modal provider
│   ├── page.tsx             # the single page: orders the sections
│   ├── globals.css          # design tokens + base styles (Tailwind v4)
│   ├── opengraph-image.tsx  # generated social share card
│   ├── icon.svg             # favicon
│   ├── sitemap.ts / robots.ts
├── components/
│   ├── sections/            # the scroll sections (Manifesto, Pillars, CommunityShowcase, MeetingMoment, ...)
│   ├── animations/          # small motion helpers
│   ├── layout/              # header
│   └── ui/                  # event modal + provider, primitives
├── hooks/                   # useClubMeeting, usePrefersReducedMotion
├── lib/
│   ├── meeting.ts           # meeting schedule, term dates, and time-zone-safe time math
│   └── animations/          # gsap setup, motion tokens, reduced-motion helper, smooth scroll
└── types/                   # shared TypeScript types
```

### Animation foundation

A small shared layer keeps the motion consistent and accessible:

- `lib/animations/gsap.ts` - registers GSAP plugins once and exports `gsap`,
  `ScrollTrigger`, `SplitText`, `ScrambleText`, `useGSAP`.
- `lib/animations/motion.ts` - duration / ease / stagger / scrub tokens.
- `lib/animations/match-media.ts` - `motionMatchMedia()`, the reduced-motion master
  switch. Wrap a component's scroll setup in it so animations only run when motion is
  allowed and auto-revert otherwise.
- `lib/animations/smooth-scroll.ts` - Lenis driven on a single `gsap.ticker` loop
  (so ScrollTrigger stays in sync), and skipped entirely under reduced motion.

## Accessibility

Motion respects `prefers-reduced-motion`: under that setting the pins, scrubbing,
parallax, and smooth scroll are disabled and sections render as clean static
layouts. Headlines that use SplitText keep the real text in the DOM for screen
readers while the animated copy is hidden from assistive tech.

## Deployment

Containerized (multi-stage `Dockerfile`, Node 20 Alpine, standalone output) and
deployed to **Google Cloud Run** via `cloudbuild.yaml` (or `deploy.sh`). Production
domain: [rccacm.com](https://rccacm.com).

## Contributing

1. Branch from `main`.
2. Make your change. Keep it type-safe and lint-clean (`npm run type-check` and
   `npm run lint` both run in CI and gate the build).
3. Open a PR. CI runs type-check, lint, and build.

## The chapter

- **Discord**: https://discord.gg/fM2HbsJyBG
- **Instagram**: [@rcc.acm](https://www.instagram.com/rcc.acm/)
- **Meetings**: Thursdays 1:30-2:30 PM in the A-210 Simulation Lab (BLCIS), Riverside City College.

## License

MIT.
