export interface CaseStudySection {
  number: string;
  phase: string;
  title: string;
  description: string;
  /** key(s) into the imageMap defined in CaseStudy.tsx */
  image?: string;
  image2?: string;
}

export interface CaseStudyMeta {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroImage: string; // key into imageMap
  year: string;
  role: string;
  duration: string;
  sections: CaseStudySection[];
}

const caseStudies: CaseStudyMeta[] = [
  // ─── 1. ONEINDIA ──────────────────────────────────────────────────────────
  {
    slug: "oneindia",
    category: "Mobile Design",
    title: "Oneindia — Digital News Platform",
    subtitle:
      "Redesigning the core reading experience for one of India's largest multilingual news platforms.",
    tags: ["Research", "Interaction Design", "Prototyping"],
    heroImage: "oneindia_hero",
    year: "2024",
    role: "UX Designer",
    duration: "5 months",
    sections: [
      {
        number: "01",
        phase: "Discovery",
        title: "Understanding the existing experience",
        description:
          "Conducted a full audit of the existing app alongside 14 contextual user interviews across 4 language markets. Identified cognitive overload as the primary pain point — too many story formats, inconsistent hierarchy, and no reading continuity.",
        image: "placeholder",
      },
      {
        number: "02",
        phase: "Definition",
        title: "Structuring the content model",
        description:
          "Synthesised research into a revised information architecture. Separated breaking news from long-reads, introduced topic-based clustering, and defined a clear typographic hierarchy for multilingual rendering.",
        image: "placeholder",
      },
      {
        number: "03",
        phase: "Design",
        title: "Crafting the new reading experience",
        description:
          "Designed a new component library, reading mode, and home feed algorithm surface. Ran 3 rounds of usability testing before handoff. The new design reduced time-to-first-story by 38% in prototype testing.",
        image: "placeholder",
      },
    ],
  },

  // ─── 2. DISNEY+ HOTSTAR ───────────────────────────────────────────────────
  {
    slug: "hotstar",
    category: "Product Design",
    title: "Disney+ Hotstar — Subscription Journey",
    subtitle:
      "Optimising the end-to-end subscription and onboarding flow to reduce drop-off and improve conversion clarity.",
    tags: ["Journey Mapping", "Usability Testing", "A/B Testing"],
    heroImage: "hotstar_hero",
    year: "2024",
    role: "UX Designer",
    duration: "4 months",
    sections: [
      {
        number: "01",
        phase: "Data Representation",
        title: "Making insights from the given data",
        description:
          "Analysed existing subscription funnel data to identify key drop-off points across the 3-step subscription flow. Visualised user behaviour patterns and surfaced 4 critical friction moments.",
        image: "hotstar_1",
      },
      {
        number: "02",
        phase: "User Persona & Journey Map",
        title: "Translating insights to design improvements",
        description:
          "Created user personas based on 12 in-depth interviews. Mapped the complete customer journey to uncover friction points and opportunities — with a focus on the paywall and plan-selection screens.",
        image: "hotstar_2",
        image2: "hotstar_3",
      },
      {
        number: "03",
        phase: "Interactions",
        title: "Creating high-fidelity mockups",
        description:
          "Designed high-fidelity prototypes incorporating the research findings. Conducted 3 rounds of usability testing before finalising. Improved plan-selection clarity, reducing support tickets by 22%.",
        image: "hotstar_4",
        image2: "hotstar_5",
      },
    ],
  },

  // ─── 3. CIRCULAR TEXTILES ─────────────────────────────────────────────────
  {
    slug: "circular-textiles",
    category: "End-to-End UX",
    title: "Circular Textiles — Platform Design",
    subtitle:
      "Designing a B2B platform connecting textile manufacturers and recyclers to make waste diversion workflows intuitive.",
    tags: ["Systems Design", "User Research", "Design System"],
    heroImage: "textiles_hero",
    year: "2023",
    role: "Lead UX Designer",
    duration: "6 months",
    sections: [
      {
        number: "01",
        phase: "Research",
        title: "Mapping the supply chain",
        description:
          "Conducted 18 user interviews across the textile supply chain — manufacturers, recyclers, logistics partners, and procurement managers. Built service blueprints and stakeholder maps to understand the systemic challenges.",
        image: "placeholder",
      },
      {
        number: "02",
        phase: "Systems Design",
        title: "Designing the platform architecture",
        description:
          "Designed a role-based platform with three distinct user flows: waste listing, bid management, and logistics coordination. Created a shared design system with 60+ components to ensure consistency across modules.",
        image: "placeholder",
      },
      {
        number: "03",
        phase: "Validation",
        title: "Testing and iterating",
        description:
          "Ran a 3-week pilot with 6 partner companies. Iterated on the bid negotiation flow and notification model based on field feedback. The final platform reduced waste coordination time from days to under 4 hours.",
        image: "placeholder",
      },
    ],
  },
];

export default caseStudies;
