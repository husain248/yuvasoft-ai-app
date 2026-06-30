// ─────────────────────────────────────────────────────────────
// INDUSTRIES
// ─────────────────────────────────────────────────────────────

export interface IndustryFeature {
    label: string
}

export interface IndustryValue {
    icon: string
    title: string
    description: string
}

export interface Industry {
    slug: string

    title: string
    subtitle: string

    description: string

    image: string

    breadcrumbDesc: string

    challenges: string[]

    features: IndustryFeature[]

    solutions: string[]

    technologies: string[]

    valuesTitle: string
    valuesDesc: string

    values: IndustryValue[]
}

export const industries: Industry[] = [
    // ============================================================
    // HEALTHCARE
    // ============================================================

    {
        slug: "healthcare",

        title: "Healthcare & Clinic Booking",

        subtitle:
            "Helping healthcare providers streamline patient experiences with modern digital solutions.",

        description:
            "We develop secure healthcare software that simplifies appointment scheduling, patient management, telemedicine, billing, and communication. Whether you're running a private clinic, diagnostic center, hospital, or healthcare startup, we build scalable platforms that improve efficiency while delivering a better experience for patients and staff.",

        image: "/assets/images/awesome-features/ai-feature-1.png",

        breadcrumbDesc:
            "Healthcare software development including clinic management systems, patient portals, appointment booking platforms and AI-powered healthcare assistants.",

        challenges: [
            "Manual appointment scheduling",
            "Long patient waiting times",
            "Disconnected patient records",
            "Poor communication with patients",
            "Limited online consultation support",
            "Inefficient staff management",
        ],

        features: [
            {
                label: "Online Appointment Booking",
            },
            {
                label: "Patient Management System",
            },
            {
                label: "Doctor & Staff Dashboard",
            },
            {
                label: "Electronic Medical Records",
            },
            {
                label: "Prescription Management",
            },
            {
                label: "Telemedicine Integration",
            },
            {
                label: "Payment & Billing",
            },
            {
                label: "AI Chat Assistant",
            },
        ],

        solutions: [
            "Clinic Management Software",
            "Hospital ERP",
            "Patient Portal",
            "Appointment Booking Platform",
            "Telemedicine Platform",
            "Healthcare Mobile Apps",
            "Laboratory Management System",
            "Medical Billing Software",
        ],

        technologies: [
            "React",
            "Next.js",
            "React Native",
            "Ruby on Rails",
            "Node.js",
            "PostgreSQL",
            "Gemini AI",
            "REST APIs",
        ],

        valuesTitle: "Healthcare Technology That Improves Lives",

        valuesDesc:
            "We help healthcare organizations digitize operations while improving patient satisfaction and reducing administrative workload.",

        values: [
            {
                icon: "🏥",
                title: "Clinic Management",

                description:
                    "Manage doctors, patients, appointments, prescriptions and billing from one centralized dashboard.",
            },

            {
                icon: "📅",
                title: "Smart Appointment Booking",

                description:
                    "Allow patients to book appointments online while reducing scheduling conflicts and missed visits.",
            },

            {
                icon: "🤖",
                title: "AI Patient Assistant",

                description:
                    "Answer patient questions instantly, automate reminders and reduce staff workload with AI-powered assistants.",
            },

            {
                icon: "🔒",
                title: "Secure Healthcare Data",

                description:
                    "Modern architecture with secure authentication and encrypted patient information management.",
            },
        ],
    },

    // ============================================================
    // REAL ESTATE
    // ============================================================

    {
        slug: "real-estate",

        title: "Real Estate & Rentals",

        subtitle:
            "Helping property businesses manage listings, tenants and enquiries with modern software.",

        description:
            "We build digital platforms for real estate agencies, builders, brokers, rental businesses and property owners. From property listing websites to complete rental marketplaces and owner dashboards, our software helps businesses generate more enquiries while simplifying day-to-day operations.",

        image: "/assets/images/awesome-features/ai-feature-2.png",

        breadcrumbDesc:
            "Real estate software development for property management, rental marketplaces, CRM systems and booking platforms.",

        challenges: [
            "Manual property management",
            "Slow enquiry response",
            "Poor lead tracking",
            "Scattered listings",
            "Limited online visibility",
            "No centralized owner dashboard",
        ],

        features: [
            {
                label: "Property Listings",
            },
            {
                label: "Advanced Search & Filters",
            },
            {
                label: "Owner Dashboard",
            },
            {
                label: "Tenant Portal",
            },
            {
                label: "Property Booking",
            },
            {
                label: "Interactive Maps",
            },
            {
                label: "Lead Management",
            },
            {
                label: "Rental Management",
            },
        ],

        solutions: [
            "Rental Marketplace",
            "Property Management Software",
            "Builder Websites",
            "Real Estate CRM",
            "Broker Dashboard",
            "Property Booking Platform",
            "Owner Mobile App",
            "Tenant Mobile App",
        ],

        technologies: [
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "Ruby on Rails",
            "Google Maps API",
            "PostgreSQL",
            "Cloud Hosting",
        ],

        valuesTitle: "Modern Property Technology",

        valuesDesc:
            "Helping property businesses increase occupancy, automate operations and improve customer experiences.",

        values: [
            {
                icon: "🏠",

                title: "Property Listings",

                description:
                    "Showcase residential and commercial properties with beautiful galleries, search filters and maps.",
            },

            {
                icon: "📲",

                title: "Owner Dashboard",

                description:
                    "Owners can manage listings, enquiries, tenants and bookings from a single dashboard.",
            },

            {
                icon: "💬",

                title: "Communication",

                description:
                    "Connect buyers, owners and tenants with integrated messaging and enquiry management.",
            },

            {
                icon: "📈",

                title: "Business Analytics",

                description:
                    "Track enquiries, bookings, occupancy rates and business performance using live dashboards.",
            },
        ],
    },

    // ============================================================
    // NETWORK ASSISTANCE
    // ============================================================

    {
        slug: "network-assistance",

        title: "AI Network Assistance",

        subtitle:
            "AI-powered assistants that help IT teams monitor, troubleshoot and optimize networks.",

        description:
            "We develop AI-powered network assistants capable of monitoring infrastructure, identifying issues, answering technical questions and automating repetitive IT operations. These intelligent assistants reduce downtime, improve productivity and help IT teams resolve incidents significantly faster.",

        image: "/assets/images/awesome-features/ai-feature-3.png",

        breadcrumbDesc:
            "AI-powered network monitoring, automation and intelligent infrastructure management.",

        challenges: [
            "Manual monitoring",
            "Slow incident response",
            "Repeated support tickets",
            "Lack of automation",
            "Complex troubleshooting",
            "Infrastructure downtime",
        ],

        features: [
            {
                label: "AI Network Assistant",
            },
            {
                label: "Infrastructure Monitoring",
            },
            {
                label: "Incident Detection",
            },
            {
                label: "Alert Management",
            },
            {
                label: "Knowledge Base Search",
            },
            {
                label: "Automation Workflows",
            },
            {
                label: "Performance Analytics",
            },
            {
                label: "Predictive Maintenance",
            },
        ],

        solutions: [
            "Network Monitoring Dashboard",
            "AI Support Assistant",
            "Infrastructure Analytics",
            "Automation Engine",
            "Operations Dashboard",
            "Knowledge Base",
            "Monitoring Portal",
            "Performance Reporting",
        ],

        technologies: [
            "LangChain",
            "LangGraph",
            "Gemini",
            "Python",
            "React",
            "Node.js",
            "Docker",
            "Cloud Infrastructure",
        ],

        valuesTitle: "Smarter IT Operations",

        valuesDesc:
            "AI-driven automation that enables IT teams to detect, diagnose and resolve issues before they impact users.",

        values: [
            {
                icon: "🤖",

                title: "AI Support",

                description:
                    "Instantly answer infrastructure questions and guide engineers through troubleshooting workflows.",
            },

            {
                icon: "📡",

                title: "Real-Time Monitoring",

                description:
                    "Monitor network health continuously with intelligent alerts and proactive issue detection.",
            },

            {
                icon: "⚡",

                title: "Automation",

                description:
                    "Automate repetitive maintenance tasks and operational workflows to save engineering time.",
            },

            {
                icon: "📊",

                title: "Performance Optimization",

                description:
                    "Analyze infrastructure performance and identify opportunities to improve reliability and efficiency.",
            },
        ],
    },
]

// ------------------------------------------------------------

export function getIndustry(slug: string): Industry | undefined {
    return industries.find((industry) => industry.slug === slug)
}