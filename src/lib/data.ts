export const nav = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export const projects = [
  {
    num: "01",
    type: "E-Commerce · 2024",
    title: "Ithemba Fresh",
    desc: "Farm-to-table marketplace connecting local farmers to urban consumers. Multi-vendor, real-time stock, mobile-optimised checkout. The previous site had a 72% bounce rate. This one doesn't.",
    stat: "↑ 42% conversion improvement · 98 Lighthouse score",
    chips: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    tealChips: [] as string[],
    href: "#",
  },
  {
    num: "02",
    type: "SaaS · 2023",
    title: "PulseHR",
    desc: "HR management tool for South African SMEs. Leave tracking, payroll snapshots, document management. Designed to be picked up without a manual — which is the hardest thing to actually pull off.",
    stat: "Used daily by 14 companies across Gauteng",
    chips: ["React", "Firebase", "Recharts"],
    tealChips: ["Framer Motion"],
    href: "#",
  },
  {
    num: "03",
    type: "Agency site · 2023",
    title: "Ndaba Creative",
    desc: "Portfolio site for a Joburg creative studio. Heavy on motion, precise on performance. Three-week build. They won two clients from the contact form in the first month, which is always a good sign.",
    stat: "Built and deployed in 21 days",
    chips: ["Vue.js", "GSAP", "Sanity CMS"],
    tealChips: ["Vercel"],
    href: "#",
  },
  {
    num: "04",
    type: "Side project · Ongoing",
    title: "Township Finder",
    desc: "Local services directory for township economies — built offline-first because data costs money and not everyone has consistent signal. Still figuring out the business model, but people use it, which counts for a lot.",
    stat: "PWA · works on 2G · no login required",
    chips: ["React"],
    tealChips: ["Service Workers", "IndexedDB"],
    href: "#",
  },
];

export const skillGroups = [
  {
    teal: false,
    label: "Languages",
    chips: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3 / SCSS"],
  },
  {
    teal: false,
    label: "Frameworks",
    chips: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    teal: true,
    label: "Tooling & Infra",
    chips: ["Git / GitHub", "Vite", "Firebase", "Supabase", "Vercel"],
  },
  {
    teal: true,
    label: "Design & Process",
    chips: ["Figma", "Storybook", "Web Accessibility", "Performance Audits"],
  },
];

export const experience = [
  {
    years: "2022 — Now",
    role: "Freelance Frontend Developer",
    company: "Independent · Johannesburg",
    desc: "Building products for clients ranging from funded startups to established SMEs. Own the entire frontend — architecture, implementation, deployment, and ongoing support. Have worked with teams across SA, the UK, and remotely across Africa.",
    chips: ["React", "Next.js", "TypeScript"],
    tealChips: ["Figma"],
  },
  {
    years: "2020 — 2022",
    role: "Frontend Developer",
    company: "Digital Agency · Johannesburg",
    desc: "Client-facing web development for an agency serving mid-size SA businesses. Introduced component library that cut average build time by 30%. Was usually the person fixing whatever didn't work on mobile.",
    chips: ["Vue.js", "SCSS", "WordPress"],
    tealChips: ["Storybook"],
  },
  {
    years: "2019 — 2020",
    role: "Junior Frontend Developer",
    company: "In-house product team",
    desc: "First professional role. Internal tooling and customer-facing features. Learned that production code is nothing like tutorial code, and that the most important skill is reading someone else's mess without complaining too much.",
    chips: ["HTML", "CSS", "JavaScript"],
    tealChips: [],
  },
];

export const facts = [
  { label: "Based in", value: "Johannesburg, SA" },
  { label: "Experience", value: "4+ years" },
  { label: "Availability", value: "Open to work", teal: true },
  { label: "Focus", value: "React · Next.js · Vue" },
  { label: "Also does", value: "Design systems, audits" },
  { label: "Languages", value: "English, isiZulu" },
];

export const contact = {
  email: "hello@xolanimgube.dev",
  links: [
    { label: "LinkedIn", href: "#", display: "linkedin.com/in/xolanimgube" },
    { label: "GitHub",   href: "#", display: "github.com/xolanimgube" },
    { label: "Location", href: null, display: "Johannesburg, Gauteng — SA" },
  ],
};

export const footerLinks = [
  { label: "GitHub",   href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter",  href: "#" },
  { label: "CV",       href: "#" },
];
