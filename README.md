# Ridho — Creative Designer Portfolio

A personal portfolio website for **Muhammad Ridho** — fresh graduate from Universitas Syiah Kuala, Top 20 Capstone DBS 2025, fullstack developer & UI/UX enthusiast.

Built with Next.js 16, React 19, TailwindCSS v4, and Framer Motion 12.

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16.2.11 (Turbopack) |
| **UI Library** | React 19.2.4 |
| **Styling** | TailwindCSS v4 |
| **Animation** | Framer Motion 12.42.2 |
| **Language** | TypeScript |
| **Fonts** | Poppins (headings), Inter (body) via `next/font/google` |

## Features

- **Hero** — Gradient background, typing effect, profile photo, floating cards, floating particles canvas
- **Services** — Developer (highlighted), UI/UX, Design cards
- **About** — Personal intro with numbered achievements
- **Projects** — GitHub-linked project grid with hover tech badges
- **Certificates** — Navy card with modal preview (image/PDF)
- **CTA** — WhatsApp direct message integration
- **Navigation** — Floating glassmorphism pill navbar with Services submenu, active section tracking via IntersectionObserver
- **Animations** — Scroll-reveal, spring-based origin button hover effect, section dividers, scroll progress bar, back-to-top
- **Responsive** — Mobile hamburger morph menu, adaptive layout

## Color Palette

| Color | Hex | Usage |
|---|---|---|
| Peach | `#FDEBE0` | Hero background, navbar |
| Orange | `#F5821F` | Primary CTA, accents |
| Navy | `#1B2A4A` | Headings, footer, secondary bg |
| Body | `#6B7280` | Body text |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/               # Next.js App Router pages & layout
│   ├── layout.tsx     # Root layout, fonts, global providers
│   ├── page.tsx       # Home page (section composition)
│   └── globals.css    # Tailwind v4 theme & custom utilities
├── components/
│   ├── layout/        # Navbar (glass pill), Footer
│   ├── sections/      # Hero, Services, About, Stats, Projects, CTA
│   └── ui/            # Button (origin effect), Reveal, ScrollProgressBar,
│                      # BackToTop, FloatingParticles, CertificateModal,
│                      # TypingEffect, SectionDivider, Container
├── public/
│   ├── images/        # Profile photo
│   └── certificates/  # Certificate files (image/PDF)
└── lib/               # Utility helpers
```
