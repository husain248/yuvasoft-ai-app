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
    title: 'AI Strategy & Consulting',
    subtitle: 'Your Roadmap to Intelligent Business Transformation',
    description:
      'We partner with your leadership team to assess current capabilities, identify AI opportunities, and build a practical roadmap that delivers measurable results without disrupting your operations.',
    image: '/assets/images/new-images-v2/hero/hero-1.png',
    breadcrumbDesc:
      'Strategic AI planning, expert consulting, and comprehensive implementation roadmaps that drive sustainable digital transformation.',
    features: [
      { label: 'AI Readiness Assessment' },
      { label: 'Custom AI Strategy Development' },
      { label: 'Technology Stack Evaluation' },
      { label: 'ROI Forecasting & KPI Definition' },
    ],
    keyBenefits: [
      'Align AI initiatives with business goals',
      'Reduce implementation risk',
      'Accelerate time-to-value',
      'Build internal AI capability',
    ],
    tagsOne: [
      'Executive AI Briefings',
      'Competitive Landscape Analysis',
      'Change Management Planning',
      'Vendor Selection Support',
    ],
    valuesTitle: 'Strategic Clarity',
    valuesDesc: 'Turn AI potential into a concrete, executable plan.',
    values: [
      {
        icon: '🎯',
        title: 'Gap Analysis',
        description: 'Identify where AI can deliver the highest impact in your organisation.',
      },
      {
        icon: '🗺️',
        title: 'Roadmap Design',
        description: 'Phased implementation plans that minimise risk and maximise ROI.',
      },
      {
        icon: '📊',
        title: 'Success Metrics',
        description: 'Define clear KPIs so you always know your AI investment is working.',
      },
      {
        icon: '🤝',
        title: 'Stakeholder Buy-In',
        description: 'Executive presentations and workshops to align your entire team.',
      },
    ],
  },
  {
    slug: 'custom-ai-development',
    title: 'Custom AI Development',
    subtitle: 'AI Built Precisely for Your Business',
    description:
      'Off-the-shelf AI rarely fits. We design and build bespoke AI systems — from intelligent APIs to full-stack applications — that integrate seamlessly with your existing infrastructure and workflows.',
    image: '/assets/images/new-images-v2/data/data-1.svg',
    breadcrumbDesc:
      'Tailored AI solutions that precisely meet your unique business requirements.',
    features: [
      { label: 'End-to-End AI Application Development' },
      { label: 'Custom Model Training & Fine-Tuning' },
      { label: 'API Design & Integration' },
      { label: 'Scalable Cloud Deployment' },
    ],
    keyBenefits: [
      'Solve problems no off-shelf tool can',
      'Full ownership of your AI models',
      'Designed for your data, your processes',
      'Scales as your business grows',
    ],
    tagsOne: [
      'LangChain & LangGraph Agents',
      'RAG Systems',
      'Computer Vision',
      'Predictive Analytics',
    ],
    valuesTitle: 'Precision Engineering',
    valuesDesc: 'Purpose-built AI that fits your stack like a glove.',
    values: [
      {
        icon: '⚙️',
        title: 'Discovery & Scoping',
        description: 'Deep-dive workshops to understand your data, goals, and constraints.',
      },
      {
        icon: '🧠',
        title: 'Model Development',
        description: 'Train, fine-tune, and validate models on your proprietary data.',
      },
      {
        icon: '🔗',
        title: 'Integration',
        description: 'Connect AI capabilities to your CRM, ERP, website, or mobile app.',
      },
      {
        icon: '🚀',
        title: 'Deployment & Monitoring',
        description: 'Production-grade deployment with ongoing performance monitoring.',
      },
    ],
  },
  {
    slug: 'machine-learning-solutions',
    title: 'Machine Learning Solutions',
    subtitle: 'Automate, Predict, Optimise',
    description:
      'We develop and deploy production-ready machine learning models that automate complex processes, generate accurate predictions, and surface insights that human analysis would miss.',
    image: '/assets/images/new-images-v2/data/data-2.svg',
    breadcrumbDesc:
      'Advanced ML models that automate processes, predict outcomes, and deliver intelligent insights.',
    features: [
      { label: 'Supervised & Unsupervised Learning' },
      { label: 'Time-Series Forecasting' },
      { label: 'Anomaly Detection' },
      { label: 'Recommendation Engines' },
    ],
    keyBenefits: [
      'Reduce manual effort by up to 80%',
      'Increase prediction accuracy',
      'Uncover hidden patterns in data',
      'Make faster, data-driven decisions',
    ],
    tagsOne: [
      'Demand Forecasting',
      'Churn Prediction',
      'Fraud Detection',
      'Customer Segmentation',
    ],
    valuesTitle: 'Intelligent Automation',
    valuesDesc: 'Let your data work for you — continuously.',
    values: [
      {
        icon: '📈',
        title: 'Predictive Forecasting',
        description: 'Anticipate trends, demand, and risks before they happen.',
      },
      {
        icon: '🔍',
        title: 'Anomaly Detection',
        description: 'Automatically flag outliers in transactions, operations, or quality.',
      },
      {
        icon: '🎁',
        title: 'Personalisation',
        description: 'Recommendation engines that drive engagement and revenue.',
      },
      {
        icon: '⚡',
        title: 'Real-Time Inference',
        description: 'Millisecond-level predictions at scale with optimised serving.',
      },
    ],
  },
  {
    slug: 'natural-language-processing',
    title: 'Natural Language Processing',
    subtitle: 'AI That Understands Your Language',
    description:
      'We build NLP systems that read, write, and understand text and speech — powering chatbots, document processing, content generation, and sentiment analysis at enterprise scale.',
    image: '/assets/images/gemini-icon.svg',
    breadcrumbDesc:
      'NLP solutions that enable intelligent chatbots, sentiment analysis, content generation, and automated text processing.',
    features: [
      { label: 'Conversational AI & Chatbots' },
      { label: 'Document Intelligence & Extraction' },
      { label: 'Sentiment & Intent Analysis' },
      { label: 'Automated Content Generation' },
    ],
    keyBenefits: [
      'Handle thousands of customer conversations simultaneously',
      'Extract key data from unstructured documents',
      'Understand customer sentiment in real time',
      'Generate on-brand content at scale',
    ],
    tagsOne: [
      'GPT-4 Integration',
      'Multi-Language Support',
      'Voice-to-Text Pipelines',
      'Knowledge Base Q&A',
    ],
    valuesTitle: 'Language Intelligence',
    valuesDesc: 'Bridge the gap between human language and machine understanding.',
    values: [
      {
        icon: '💬',
        title: 'Intelligent Chatbots',
        description: '24/7 AI agents that resolve queries, book appointments, and collect leads.',
      },
      {
        icon: '📄',
        title: 'Document Processing',
        description: 'Extract, classify, and route information from PDFs, emails, and forms.',
      },
      {
        icon: '❤️',
        title: 'Sentiment Analysis',
        description: 'Monitor brand perception and customer emotions across all channels.',
      },
      {
        icon: '✍️',
        title: 'Content Generation',
        description: 'Produce product descriptions, reports, and marketing copy at speed.',
      },
    ],
  },
  {
    slug: 'ai-analytics-insights',
    title: 'AI Analytics & Insights',
    subtitle: 'See Further, Decide Faster',
    description:
      'We transform raw data into clear, actionable intelligence — using AI-powered dashboards, predictive analytics, and automated reporting to help you make smarter decisions at every level of your organisation.',
    image: '/assets/images/new-images-v2/data/data-1.svg',
    breadcrumbDesc:
      'Advanced AI analytics providing actionable insights, predictive intelligence, and strategic recommendations.',
    features: [
      { label: 'Automated Reporting & Dashboards' },
      { label: 'Predictive Business Intelligence' },
      { label: 'Data Pipeline Engineering' },
      { label: 'KPI Monitoring & Alerting' },
    ],
    keyBenefits: [
      'Reduce reporting time from days to minutes',
      'Spot opportunities and risks early',
      'Democratise data access across teams',
      'Move from reactive to proactive strategy',
    ],
    tagsOne: [
      'Real-Time Dashboards',
      'Executive Scorecards',
      'Cohort & Funnel Analysis',
      'A/B Test Analysis',
    ],
    valuesTitle: 'Data-Driven Clarity',
    valuesDesc: 'Every decision backed by intelligence, not guesswork.',
    values: [
      {
        icon: '📊',
        title: 'Live Dashboards',
        description: 'Interactive visualisations updated in real time from all your data sources.',
      },
      {
        icon: '🔮',
        title: 'Predictive Alerts',
        description: 'Get notified before KPIs fall — not after.',
      },
      {
        icon: '🏗️',
        title: 'Data Infrastructure',
        description: 'Clean, reliable pipelines that ensure your analytics are always accurate.',
      },
      {
        icon: '📱',
        title: 'Self-Serve Analytics',
        description: 'Empower every team member to explore data without SQL knowledge.',
      },
    ],
  },
  {
    slug: 'ai-training-support',
    title: 'AI Training & Support',
    subtitle: 'Empowering Your Team to Lead with AI',
    description:
      'Adopting AI is as much about people as technology. We provide hands-on training, workshops, and ongoing support to ensure your team confidently uses, manages, and evolves your AI systems.',
    image: '/assets/images/new-images-v2/hero/hero-1.png',
    breadcrumbDesc:
      'Comprehensive AI training programs and ongoing technical support for successful adoption.',
    features: [
      { label: 'Role-Based AI Training Workshops' },
      { label: 'Prompt Engineering Masterclasses' },
      { label: 'AI Tool Onboarding & Documentation' },
      { label: '24/7 Technical Support' },
    ],
    keyBenefits: [
      'Accelerate adoption across all departments',
      'Reduce dependency on external consultants',
      'Build a culture of continuous AI learning',
      'Maximise ROI from every AI investment',
    ],
    tagsOne: [
      'Executive AI Literacy',
      'Developer Workshops',
      'Operations Team Training',
      'AI Safety & Ethics',
    ],
    valuesTitle: 'People-First AI',
    valuesDesc: 'Technology is only as powerful as the people who use it.',
    values: [
      {
        icon: '🎓',
        title: 'Structured Curriculum',
        description: 'From AI fundamentals to advanced implementation — tailored by role.',
      },
      {
        icon: '🛠️',
        title: 'Hands-On Labs',
        description: 'Practical exercises using real tools and your actual data.',
      },
      {
        icon: '📞',
        title: 'Ongoing Support',
        description: 'Dedicated support channels, SLA-backed response times, and quarterly reviews.',
      },
      {
        icon: '📚',
        title: 'Documentation',
        description: 'Clear, maintained docs and runbooks so your team is never stuck.',
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
    tagline: 'Intelligent Property & Rental Exchange Platform',
    category: 'PropTech · AI Matching',
    description:
      'MagicalSwap connects property owners and tenants through AI-powered matching, combining online convenience with personalised offline support.',
    longDescription: `MagicalSwap redefines the rental experience by integrating AI-driven matching with human oversight. Our platform analyses tenant preferences, budget, location, and lifestyle signals to surface the perfect property matches — instantly.

Landlords benefit from verified tenant profiles, automated lease preparation, and a dedicated area manager who ensures every deal closes smoothly. Tenants enjoy a frictionless search experience, digital agreements, and AI-assisted move-in checklists.

Whether you're listing a single apartment or managing a portfolio of 500 units, MagicalSwap scales with you.`,
    image: '/assets/images/new-images-v2/resources/resources-1.png',
    color: '#FB6A15',
    features: [
      'AI-powered tenant–property matching',
      'Digital rent agreements with e-stamping',
      'Automated lease renewal reminders',
      'Dedicated area manager support',
      'Real-time property availability tracker',
      'In-app messaging between landlords & tenants',
    ],
    techStack: ['Python', 'LangChain', 'React.js', 'PostgreSQL', 'AWS'],
    useCases: [
      'Residential rental management',
      'Commercial property leasing',
      'Short-term holiday lets',
      'Student accommodation platforms',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-1.png',
  },
  {
    slug: 'whereareyou',
    name: 'WhereAreYou',
    tagline: 'Real-Time AI Location Intelligence for Field Teams',
    category: 'Field Ops · Location AI',
    description:
      'WhereAreYou gives operations managers complete visibility over field teams, assets, and deliveries — all in real time through an intelligent AI interface.',
    longDescription: `Managing field operations without visibility is like flying blind. WhereAreYou changes that entirely. Our platform combines GPS tracking, predictive ETA calculations, and natural-language AI queries to give managers instant answers: "Where is Driver 12?" "How many deliveries are delayed today?" "Route Team B around the traffic incident."

The AI engine proactively surfaces exceptions — late arrivals, missed check-ins, route deviations — and suggests corrective actions, so you spend time acting rather than searching for information.

Integrates with your existing dispatch systems, mobile devices, and fleet management tools.`,
    image: '/assets/images/new-images-v2/resources/resources-2.png',
    color: '#02D6E4',
    features: [
      'Real-time GPS tracking with AI anomaly alerts',
      'Natural language location queries',
      'Predictive ETA & delay forecasting',
      'Geofence triggers and notifications',
      'Route optimisation engine',
      'Offline-capable mobile app',
    ],
    techStack: ['Python', 'Google Maps API', 'React Native', 'Gemini API', 'Firebase'],
    useCases: [
      'Last-mile delivery fleets',
      'Field service technician dispatch',
      'Healthcare home visit scheduling',
      'Security patrol management',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-2.png',
  },
  {
    slug: 'lifenotes',
    name: 'Lifenotes',
    tagline: 'AI-Powered Personal Knowledge & Memory Assistant',
    category: 'Productivity · Personal AI',
    description:
      'Lifenotes captures, organises, and surfaces your notes, ideas, and memories using AI — so nothing important ever gets lost again.',
    longDescription: `We capture thousands of ideas, decisions, and conversations every day — but most of them evaporate within hours. Lifenotes is your AI-powered second brain that captures everything, automatically organises it, and resurfaces the right information exactly when you need it.

Speak, type, or snap a photo. Lifenotes transcribes, categorises, and links your notes using AI, building a growing personal knowledge graph. Ask it anything: "What did I decide about the Q3 budget?" or "Show me everything related to Project Phoenix."

Privacy-first architecture ensures your data stays yours, with optional end-to-end encryption and local storage modes.`,
    image: '/assets/images/new-images-v2/resources/resources-3.png',
    color: '#9003FF',
    features: [
      'Voice-to-note transcription with AI summarisation',
      'Automatic tagging and categorisation',
      'Semantic search across all notes',
      'Daily AI-generated summaries and reminders',
      'Knowledge graph visualisation',
      'End-to-end encryption',
    ],
    techStack: ['Python', 'LangGraph', 'React.js', 'LangSmith', 'SQLite'],
    useCases: [
      'Executive meeting notes & action items',
      'Research and writing workflows',
      'Personal journaling and reflection',
      'Team knowledge management',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-3.png',
  },
  {
    slug: 'netassist',
    name: 'NetAssist',
    tagline: 'AI Network Monitoring & Troubleshooting Agent',
    category: 'NetOps · Intelligent Automation',
    description:
      'NetAssist monitors your network infrastructure 24/7, detects anomalies the moment they occur, and recommends or executes fixes — before users notice anything is wrong.',
    longDescription: `Network downtime costs enterprises an average of $5,600 per minute. NetAssist eliminates this risk with an always-on AI agent that monitors every node, traffic pattern, and configuration in your network.

Using trained anomaly detection models, NetAssist identifies issues — packet loss spikes, misconfigured firewall rules, bandwidth saturation — and correlates them across your entire topology to pinpoint root causes in seconds, not hours.

For teams with autonomous remediation enabled, NetAssist can apply approved fixes automatically. For those who prefer human oversight, it delivers clear, step-by-step remediation instructions direct to your Slack or Teams channel.`,
    image: '/assets/images/new-images-v2/resources/resources-4.png',
    color: '#00D622',
    features: [
      'Real-time network anomaly detection',
      'AI-powered root cause analysis',
      'Automated remediation with approval workflows',
      'Natural language network Q&A',
      'Traffic pattern forecasting',
      'Multi-vendor support (Cisco, Juniper, Palo Alto)',
    ],
    techStack: ['Python', 'LangChain', 'Gemini API', 'React.js', 'Prometheus'],
    useCases: [
      'Enterprise network operations centres',
      'Managed service providers',
      'Data centre monitoring',
      'ISP infrastructure management',
    ],
    screenshot: '/assets/images/new-images-v2/resources/resources-4.png',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
