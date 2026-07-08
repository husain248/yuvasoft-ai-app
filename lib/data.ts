// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface ServiceFeature { label: string }
export interface ServiceValue {
  icon: string          // emoji or short label used for inline rendering
  title: string
  description: string
}
export interface Service {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  breadcrumbDesc: string
  features: ServiceFeature[]
  keyBenefits: string[]
  tagsOne: string[]
  valuesTitle: string
  valuesDesc: string
  values: ServiceValue[]
}

export const services: Service[] = [
  {
    slug: 'ai-strategy-consulting',
    title: 'Web Application Development',
    subtitle: 'Making Software for Web Servers Using the Internet',
    description:
      'We design and build fast, scalable web applications from the ground up — from marketing sites to complex internal platforms — using modern frameworks and clean, maintainable architecture.',
    image: '/assets/images/services/web-app-development.png',
    breadcrumbDesc:
      'Custom web application development using React, Next.js, and Ruby on Rails, built for performance and long-term maintainability.',
    features: [
      { label: 'Next.js / React / Ruby on Rails' },
      { label: 'Tailored UI/UX Design' },
      { label: 'API & Database Development' },
      { label: 'Cloud Deployment & Hosting' },
    ],
    keyBenefits: [
      'Custom-built for your exact needs',
      'Seamless integration with existing systems',
      'Scalable architecture that grows with you',
      'Clean, maintainable code with clear documentation',
    ],
    tagsOne: [
      'Enterprise Web Applications',
      'E-Commerce Platforms',
      'Internal Dashboards',
      'Custom Web Portals',
    ],
    valuesTitle: 'Built to Last',
    valuesDesc: 'Web applications engineered for performance, security, and growth.',
    values: [
      {
        icon: '🧱',
        title: 'Solid Architecture',
        description: 'Clean, modular codebases that are easy to extend and maintain over time.',
      },
      {
        icon: '🎨',
        title: 'Tailored Design',
        description: 'Interfaces designed around your users, not a generic template.',
      },
      {
        icon: '🔌',
        title: 'API & Integrations',
        description: 'Robust APIs and seamless integration with the tools you already use.',
      },
      {
        icon: '☁️',
        title: 'Cloud Deployment',
        description: 'Reliable hosting and deployment pipelines so your app stays up and fast.',
      },
    ],
  },
  {
    slug: 'custom-ai-development',
    title: 'Mobile Application Development',
    subtitle: 'Making Software for Android & iOS',
    description:
      'We build native and cross-platform mobile apps from the ground up using React Native and native Android development, focused on smooth performance and a polished user experience.',
    image: '/assets/images/services/mobile-app-development.png',
    breadcrumbDesc:
      'Native Android development and React Native cross-platform apps, engineered for performance and a great user experience.',
    features: [
      { label: 'React Native Cross-Platform Apps' },
      { label: 'Native Android Development' },
      { label: 'App Store & Play Store Deployment' },
      { label: 'Offline-First & Performance Optimisation' },
    ],
    keyBenefits: [
      'One codebase, both iOS and Android',
      'Native performance where it matters',
      'Polished, intuitive user experience',
      'Built for app store approval from day one',
    ],
    tagsOne: [
      'Consumer Mobile Apps',
      'Field Service Apps',
      'On-Demand & Booking Apps',
      'Internal Operations Apps',
    ],
    valuesTitle: 'Apps People Actually Use',
    valuesDesc: 'Mobile experiences built for speed, reliability, and real-world conditions.',
    values: [
      {
        icon: '📱',
        title: 'Cross-Platform Reach',
        description: 'React Native apps that run smoothly on both iOS and Android.',
      },
      {
        icon: '⚙️',
        title: 'Native Performance',
        description: 'Native Android development when performance-critical features demand it.',
      },
      {
        icon: '🚀',
        title: 'Store-Ready Launches',
        description: 'Handled submissions, compliance, and launch support for both app stores.',
      },
      {
        icon: '🔋',
        title: 'Built for Reliability',
        description: 'Offline support and performance tuning so your app works anywhere.',
      },
    ],
  },
  {
    slug: 'machine-learning-solutions',
    title: 'Web & Graphic UI/UX Design',
    subtitle: 'Design That Visually Communicates and Converts',
    description:
      'Our designers do more than make things look good — we understand your business and your customers, then design interfaces that are commercial, on-brand, user-friendly, and built for how people actually use your product.',
    image: '/assets/images/services/ui-ux-design.png',
    breadcrumbDesc:
      'Web and graphic UI/UX design that visually communicates your brand and converts visitors into customers.',
    features: [
      { label: 'Wireframing & Prototyping (Adobe XD)' },
      { label: 'Responsive Web Design' },
      { label: 'Brand & Graphic Design' },
      { label: 'User Research & Usability Testing' },
    ],
    keyBenefits: [
      'Designs grounded in real user behaviour',
      'Consistent, on-brand experience across devices',
      'Higher conversion through clearer UX',
      'Faster development with ready-to-build prototypes',
    ],
    tagsOne: [
      'Website & App Wireframes',
      'Interactive Prototypes',
      'Logo & Brand Identity',
      'Design Systems',
    ],
    valuesTitle: 'Design With Intent',
    valuesDesc: 'Every screen designed to serve your business goals and your users.',
    values: [
      {
        icon: '🔍',
        title: 'Research First',
        description: 'We start by understanding your business and your customers, not just aesthetics.',
      },
      {
        icon: '🧩',
        title: 'Wireframes & Prototypes',
        description: 'Clickable prototypes in Adobe XD that validate flows before a line of code is written.',
      },
      {
        icon: '📐',
        title: 'Responsive by Default',
        description: 'Designs that look and perform great on every screen size.',
      },
      {
        icon: '🎯',
        title: 'Conversion-Focused',
        description: 'On-brand, search-optimised, and built to turn visitors into customers.',
      },
    ],
  },
  {
    slug: 'natural-language-processing',
    title: 'Technology Solutions',
    subtitle: 'Related Software, Packaged as a Single Solution',
    description:
      'We provide related software programs and services sold as a single package — architecture, integrations, infrastructure, and ongoing technology decisions tailored to your business.',
    image: '/assets/images/services/technology-solutions.png',
    breadcrumbDesc:
      'End-to-end technology solutions — architecture, integrations, and infrastructure packaged around your business needs.',
    features: [
      { label: 'System Architecture & Planning' },
      { label: 'Third-Party API Integrations' },
      { label: 'WordPress & CMS Solutions' },
      { label: 'Infrastructure & DevOps Support' },
    ],
    keyBenefits: [
      'One partner for your entire technology stack',
      'Reduced risk through sound architecture decisions',
      'Faster delivery with proven integration patterns',
      'Ongoing support as your needs evolve',
    ],
    tagsOne: [
      'System Integrations',
      'CMS & WordPress Builds',
      'Blockchain Development',
      'Cloud Infrastructure',
    ],
    valuesTitle: 'One Partner, Full Stack',
    valuesDesc: 'Technology decisions and delivery, handled end to end.',
    values: [
      {
        icon: '🏗️',
        title: 'Architecture Planning',
        description: 'Sound technical foundations that prevent costly rework down the line.',
      },
      {
        icon: '🔗',
        title: 'Integrations',
        description: 'Connect your software to the third-party tools and APIs your business relies on.',
      },
      {
        icon: '🌐',
        title: 'CMS & Web Platforms',
        description: 'WordPress and other CMS solutions for content-driven sites.',
      },
      {
        icon: '🛠️',
        title: 'Infrastructure Support',
        description: 'Cloud hosting, DevOps, and ongoing infrastructure management.',
      },
    ],
  },
  {
    slug: 'ai-analytics-insights',
    title: 'AI & Automation Integration',
    subtitle: 'Add Intelligence to Your Existing Software',
    description:
      'We layer AI agents, chatbots, and automation into your existing products and workflows using LangChain, LangGraph, and Gemini — reducing manual work without requiring a full system rebuild.',
    image: '/assets/images/services/ai-automation.png',
    breadcrumbDesc:
      'AI agents, chatbots, and automation layered into your existing software to cut manual work.',
    features: [
      { label: 'AI Agents & Conversational Chatbots' },
      { label: 'Workflow & Process Automation' },
      { label: 'LangChain / LangGraph Integration' },
      { label: 'Gemini API & LLM Integration' },
    ],
    keyBenefits: [
      'Reduce manual, repetitive work',
      'No need to rebuild your existing software',
      'Faster customer response with AI agents',
      'Scales as your AI needs grow',
    ],
    tagsOne: [
      'Customer Support Chatbots',
      'Internal Workflow Automation',
      'Document & Data Extraction',
      'LLM-Powered Features',
    ],
    valuesTitle: 'AI That Fits Your Stack',
    valuesDesc: 'Practical AI additions, not a science project.',
    values: [
      {
        icon: '🤖',
        title: 'AI Agents',
        description: 'Conversational agents that handle support, bookings, and queries 24/7.',
      },
      {
        icon: '⚡',
        title: 'Process Automation',
        description: 'Automate repetitive workflows so your team can focus on higher-value work.',
      },
      {
        icon: '🔗',
        title: 'Seamless Integration',
        description: 'AI features added into your existing app, not bolted on as a separate system.',
      },
      {
        icon: '📈',
        title: 'Built to Scale',
        description: 'Production-grade deployment with monitoring as usage grows.',
      },
    ],
  },
  {
    slug: 'ai-training-support',
    title: 'Quality Assurance & Support',
    subtitle: 'Ship With Confidence, Every Time',
    description:
      'Rigorous manual and automated QA processes, plus ongoing technical support, so issues get caught before your users see them and your software stays reliable as you grow.',
    image: '/assets/images/services/quality-assurance.png',
    breadcrumbDesc:
      'Automated testing pipelines, rigorous QA processes, and ongoing support that keep every release reliable.',
    features: [
      { label: 'Manual & Automated Testing' },
      { label: 'Bug Tracking & Regression Testing' },
      { label: 'Performance & Load Testing' },
      { label: 'Ongoing Technical Support' },
    ],
    keyBenefits: [
      'Fewer bugs reaching production',
      'Confidence with every release',
      'Faster issue resolution',
      'A long-term technical partner, not just a vendor',
    ],
    tagsOne: [
      'Automated Test Suites',
      'Manual QA Cycles',
      'Performance Testing',
      'Maintenance & Support Plans',
    ],
    valuesTitle: 'Reliability First',
    valuesDesc: 'Software you can trust, backed by a team that stands behind it.',
    values: [
      {
        icon: '✅',
        title: 'Thorough Testing',
        description: 'Manual and automated test coverage across critical user flows.',
      },
      {
        icon: '🐛',
        title: 'Bug Tracking',
        description: 'Clear processes for catching, prioritising, and resolving issues fast.',
      },
      {
        icon: '📊',
        title: 'Performance Testing',
        description: 'Load and performance testing so your app holds up under real usage.',
      },
      {
        icon: '📞',
        title: 'Ongoing Support',
        description: 'Dedicated support channels and maintenance plans after launch.',
      },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export interface Product {
  slug: string
  name: string
  tagline: string
  category: string
  description: string
  longDescription: string
  image: string
  color: string            // accent hex
  features: string[]
  techStack: string[]
  useCases: string[]
  screenshot: string
}

export const products: Product[] = [
  {
    slug: 'magicalswap',
    name: 'Magicalswap',
    tagline: 'Rental Listing & Connection Platform for Tenants and Owners',
    category: 'PropTech · Rental Marketplace',
    description:
      'Magicalswap is a rental platform that connects property owners and tenants directly — owners list available homes, and tenants can search, browse, and rent properties that match what they\'re looking for.',
    longDescription: `Magicalswap makes renting a home simple. Property owners list their available units with photos, pricing, and details, while tenants can search and filter listings by location, budget, and property type to find a place that fits their needs.

Once a tenant finds a property they're interested in, they can connect directly with the owner to ask questions, schedule a viewing, and move forward with renting — all through one platform, without the back-and-forth of scattered listings across multiple sites.

Magicalswap is currently live and in active use, with more features planned as the platform grows.`,
    image: '/assets/images/new-images-v2/resources/resources-1.png',
    color: '#FB6A15',
    features: [
      'Property listings with photos, pricing & details',
      'Search and filter by location, budget & type',
      'Direct messaging between owners and tenants',
      'Owner dashboard to manage listings',
      'Tenant browsing & saved property lists',
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL'],
    useCases: [
      'Residential rental listings',
      'Property owners managing multiple units',
      'Tenants searching for their next home',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-1.png',
  },
  {
    slug: 'whereareyou',
    name: 'WhereAreYou',
    tagline: 'Coming Soon',
    category: 'In Development',
    description:
      'WhereAreYou is a new product currently in early development. Details and features will be shared as the platform takes shape.',
    longDescription: `WhereAreYou is one of our upcoming products, currently in the early stages of development. We're actively building it out and will share full details, features, and a launch timeline as the product matures.

Check back soon for updates, or get in touch if you'd like to learn more about what we're building.`,
    image: '/assets/images/new-images-v2/resources/resources-2.png',
    color: '#02D6E4',
    features: [
      'In active development',
      'Details coming soon',
    ],
    techStack: ['React Native'],
    useCases: [
      'To be announced',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-2.png',
  },
  {
    slug: 'lifenotes',
    name: 'Lifenotes',
    tagline: 'Coming Soon',
    category: 'In Development',
    description:
      'Lifenotes is a new product currently in early development. Details and features will be shared as the platform takes shape.',
    longDescription: `Lifenotes is one of our upcoming products, currently in the early stages of development. We're actively building it out and will share full details, features, and a launch timeline as the product matures.

Check back soon for updates, or get in touch if you'd like to learn more about what we're building.`,
    image: '/assets/images/new-images-v2/resources/resources-3.png',
    color: '#9003FF',
    features: [
      'In active development',
      'Details coming soon',
    ],
    techStack: ['React.js'],
    useCases: [
      'To be announced',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-3.png',
  },
  {
    slug: 'netassist',
    name: 'NetAssist',
    tagline: 'Coming Soon',
    category: 'In Development',
    description:
      'NetAssist is a new product currently in early development. Details and features will be shared as the platform takes shape.',
    longDescription: `NetAssist is one of our upcoming products, currently in the early stages of development. We're actively building it out and will share full details, features, and a launch timeline as the product matures.

Check back soon for updates, or get in touch if you'd like to learn more about what we're building.`,
    image: '/assets/images/new-images-v2/resources/resources-4.png',
    color: '#00D622',
    features: [
      'In active development',
      'Details coming soon',
    ],
    techStack: ['Python'],
    useCases: [
      'To be announced',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-4.png',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}