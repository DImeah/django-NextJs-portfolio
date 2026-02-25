// ============================================================
// EDIT THIS FILE to update your portfolio content
// ============================================================

export const personal = {
  name: "Dornu Imeah",
  initials: "DI",
  tagline:
    "Full-stack developer building clean, fast, and thoughtful digital products. I care about the details that others skip.",
  location: "Abuja, Nigeria",
  availability: "Available for work",
  email: "hello@yourname.dev",
  github: "https://github.com/DImeah",
  linkedin: "https://www.linkedin.com/in/dornubari-imeah-8a9928ab/",
  twitter: "https://x.com/ImeahD",
  bio: [
    "Hi — I'm <strong>Dornu Imeah</strong>, a developer with a passion for building things that are both functional and beautiful. I believe great software is invisible — it just works.",
    "I've spent the last <strong>3+ years</strong> working across the stack: from pixel-perfect UIs to resilient backend systems. I care about performance, accessibility ad the people who actually use what I build.",
    "When I'm not coding, I'm writing about technology, contributing to open source, or exploring trails somewhere remote.",
  ],
};

export const stats = [
  { number: "4+", label: "Projects shipped" },
  { number: "3+", label: "Years of coding experience" },
  { number: "12k", label: "GitHub contributions" },
];

export const projects = [
  {
    tag: "Featured · 2024",
    title: "Archetype — Design System",
    description:
      "A comprehensive component library and design system built for scale. Includes 80+ components, Figma tokens, and automated accessibility testing.",
    stack: "React · TypeScript · Storybook · Radix",
    link: "#",
    linkLabel: "View project →",
    featured: true,
  },
  {
    tag: "OSS · 2023",
    title: "Logline",
    description:
      "Lightweight structured logging for Node.js with zero dependencies and first-class TypeScript support.",
    stack: "Node.js · TypeScript",
    link: "#",
    linkLabel: "GitHub →",
    featured: false,
  },
  {
    tag: "Web App · 2023",
    title: "Fold",
    description:
      "A minimal read-later app with offline support, smart tagging, and a distraction-free reading mode.",
    stack: "Next.js · Supabase · PWA",
    link: "#",
    linkLabel: "Live demo →",
    featured: false,
  },
  {
    tag: "API · 2022",
    title: "Meridian",
    description:
      "A geospatial data API serving 50k+ requests/day with intelligent caching and sub-10ms P99 latency.",
    stack: "Go · Redis · PostgreSQL",
    link: "#",
    linkLabel: "Case study →",
    featured: false,
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "CSS / Tailwind", level: 85 },
      { name: "Three.js", level: 60 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS / GCP", level: 80 },
      { name: "Docker / K8s", level: 70 },
      { name: "CI / CD", level: 85 },
      { name: "Terraform", level: 65 },
    ],
  },
];

export const posts = [
  {
    date: "Jan 2025",
    title: "The case for boring technology",
    excerpt:
      "Why choosing well-understood tools often leads to better outcomes than chasing novelty.",
    tag: "Opinion",
    href: "#",
  },
  {
    date: "Nov 2024",
    title: "Building a zero-dependency logging library",
    excerpt:
      "A deep dive into the design decisions behind Logline and what I learned about Node.js internals.",
    tag: "Tutorial",
    href: "#",
  },
  {
    date: "Sep 2024",
    title: "Spatial indexing at scale with PostGIS",
    excerpt:
      "How we reduced geospatial query times from 400ms to 8ms with the right indexing strategy.",
    tag: "Deep dive",
    href: "#",
  },
  {
    date: "Jul 2024",
    title: "Design systems are for humans, not machines",
    excerpt:
      "Lessons from building Archetype — the non-technical side of component library adoption.",
    tag: "Design",
    href: "#",
  },
];
