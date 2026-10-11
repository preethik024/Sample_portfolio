// ─── Portfolio Data ────────────────────────────────────────────────────────────
// Edit this file to update your personal information, projects, skills,
// services, and social links across the entire site.

export const developerInfo = {
  name: 'Alex Morgan',
  shortName: 'Alex',
  initials: 'AM',
  title: 'Frontend Developer & UI Engineer',
  tagline: 'I Build Digital Experiences That Make an Impact.',
  bio1:
    "I'm a passionate frontend developer with a love for crafting clean, performant, and visually stunning web experiences. I thrive at the intersection of design and engineering — turning complex ideas into elegant, accessible interfaces.",
  bio2:
    "With a focus on React, modern CSS, and thoughtful animations, I build products that not only look great but feel intuitive to use. I care deeply about code quality, UX details, and delivering real value to every project I take on.",
  availability: 'Available for freelance projects',
  email: 'honestyrk@gmail.com',
  location: 'Remote — Worldwide',
  resumeUrl: '#', // Replace with actual resume URL or file path
  stats: [
    { label: 'Projects Completed', value: '30+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Client Collaborations', value: '20+' },
  ],
  strengths: [
    'Clean & maintainable code',
    'Responsive-first development',
    'Performance & accessibility',
    'Attention to design details',
  ],
};

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:honestyrk@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', url: 'https://wa.me/919597256644', icon: 'whatsapp' },
];

// ─── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React.js', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Next.js', icon: 'next' },
      { name: 'Framer Motion', icon: 'framer' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Node.js', icon: 'node' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'Responsive Design', icon: 'responsive' },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'NexaBoard — SaaS Dashboard',
    description:
      'A modern analytics dashboard for SaaS products featuring real-time data visualization, dark/light themes, and role-based access control.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand'],
    category: 'Web App',
    demoUrl: '#',
    codeUrl: '#',
    color: '#8B5CF6',
    gradient: 'from-violet-900/40 to-indigo-900/20',
    featured: true,
  },
  {
    id: 2,
    title: 'Lumière — E-Commerce Storefront',
    description:
      'A premium e-commerce storefront for a fashion brand with animated product cards, a cart system, and a sleek checkout experience.',
    tags: ['React', 'JavaScript', 'CSS Modules', 'Framer Motion', 'Stripe'],
    category: 'E-Commerce',
    demoUrl: '#',
    codeUrl: '#',
    color: '#22D3EE',
    gradient: 'from-cyan-900/40 to-teal-900/20',
    featured: true,
  },
  {
    id: 3,
    title: 'Orbit Agency — Creative Landing Page',
    description:
      'An award-winning-style agency landing page with cinematic scroll animations, interactive 3D elements, and a bold editorial layout.',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    category: 'Landing Page',
    demoUrl: '#',
    codeUrl: '#',
    color: '#F59E0B',
    gradient: 'from-amber-900/40 to-orange-900/20',
    featured: true,
  },
  {
    id: 4,
    title: 'Focusly — Productivity Web App',
    description:
      'A Pomodoro-based productivity app with task management, time tracking, and progress analytics built with a minimal, distraction-free UI.',
    tags: ['React', 'TypeScript', 'Local Storage', 'Tailwind CSS', 'Vite'],
    category: 'Productivity',
    demoUrl: '#',
    codeUrl: '#',
    color: '#10B981',
    gradient: 'from-emerald-900/40 to-green-900/20',
    featured: false,
  },
];

// ─── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 'web-dev',
    title: 'Website Development',
    icon: 'monitor',
    description:
      'Building modern, responsive, and maintainable websites using React and the latest frontend technologies.',
    deliverables: [
      'Pixel-perfect implementation',
      'React + Vite architecture',
      'Performance-optimized code',
      'Cross-browser compatibility',
    ],
  },
  {
    id: 'ui-impl',
    title: 'UI Implementation',
    icon: 'layout',
    description:
      'Converting Figma designs and visual concepts into accurate, accessible, and responsive interfaces.',
    deliverables: [
      'Figma-to-code accuracy',
      'Component-based structure',
      'WCAG accessibility compliance',
      'Design system setup',
    ],
  },
  {
    id: 'landing',
    title: 'Landing Page Development',
    icon: 'rocket',
    description:
      'Creating focused, conversion-optimized landing pages for products, startups, and personal brands.',
    deliverables: [
      'Fast, focused UX',
      'SEO-ready HTML structure',
      'CTA and form integration',
      'Animation & micro-interactions',
    ],
  },
  {
    id: 'optimization',
    title: 'Website Optimization',
    icon: 'zap',
    description:
      'Improving frontend performance, loading behaviour, responsiveness, and accessibility of existing websites.',
    deliverables: [
      'Core Web Vitals improvements',
      'Lazy loading & code splitting',
      'Mobile responsiveness audit',
      'Accessibility review & fixes',
    ],
  },
];
