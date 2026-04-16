# Xolani Mgube — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Sora (sans), Lora (serif), JetBrains Mono — loaded via Google Fonts
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css       # CSS variables + Tailwind base
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Chip.tsx          # Reusable skill tag
│   ├── SectionHeading.tsx
│   └── Reveal.tsx        # Scroll-triggered fade-in wrapper
├── hooks/
│   └── useReveal.ts      # IntersectionObserver hook
└── lib/
    └── data.ts           # All portfolio content lives here
```

## Customising Content

**All content is in one place: `src/lib/data.ts`**

- Edit `projects` to update your work
- Edit `experience` for your work history
- Edit `skillGroups` for your tech stack
- Edit `facts` for the about sidebar
- Edit `contact` for your contact details

## Deployment

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for any static host
npm run build
```

## Adding a Profile Photo

Replace the hero area in `src/components/Hero.tsx`.
Add your image to `public/` and use Next.js `<Image>` component.
# xolani-portfolio-new
