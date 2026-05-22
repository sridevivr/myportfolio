// ---------------------------------------------------------------------------
// Projects data — the content that drives the Projects section.
// Order here controls the order on the page. The first project appears first.
// ---------------------------------------------------------------------------

export type Category = 'product' | 'business';

export type Project = {
  /** Stable slug. Used for anchors and keys. */
  id: string;
  /** Display title. */
  title: string;
  /** Two-sentence description. Keep it tight. */
  description: string;
  /** Category tag — drives the colored pill on the card. */
  category: Category;
  /** Screenshot served from /public. */
  screenshot: string;
  /** Live, hosted version. Null if not deployed. */
  liveUrl: string | null;
  /** Source code. */
  repoUrl: string;
  /** Only for products: paths to design screenshots shown in the expand panel. */
  designScreenshots?: string[];
};

export const projects: Project[] = [
  {
    id: 'wayfarer',
    title: 'Wayfarer',
    category: 'product',
    screenshot: '/projects/wayfarer/thumb.png',
    description:
      'Walking motivation iOS app. Turns daily step data into a virtual journey across a map, with AI-generated story cards at each milestone.',
    liveUrl: null,
    repoUrl: 'https://github.com/sridevivr/wayfarer',
    designScreenshots: [
      '/projects/wayfarer/screen-01.png',
      '/projects/wayfarer/screen-02.png',
      '/projects/wayfarer/screen-03.png',
      '/projects/wayfarer/screen-04.png',
    ],
  },
  {
    id: 'saferides',
    title: 'Saferides',
    category: 'product',
    screenshot: '/projects/saferides/thumb.png',
    description:
      'A rideshare app for the Tuck student volunteer driving program in Hanover. Built with another Tuck PM to address the night-time cab shortage.',
    liveUrl: null,
    repoUrl: '#', // TODO: Sridevi to replace once repo exists
    designScreenshots: [
      '/projects/saferides/screen-01.png',
      '/projects/saferides/screen-02.png',
      '/projects/saferides/screen-03.png',
      '/projects/saferides/screen-04.png',
    ],
  },
  {
    id: 'saas-pricing-intelligence',
    title: 'SaaS Pricing Intelligence',
    category: 'business',
    screenshot: '/Saas-price-intelligence.png',
    description:
      'A weekly-refreshing dashboard that tracks pricing strategy across 50+ SaaS companies. Scrapes each vendor’s page, uses Claude Haiku to extract tiers and AI features, and visualizes the market in Streamlit.',
    liveUrl: 'https://saas-pricing-intelligence.streamlit.app/',
    repoUrl: 'https://github.com/sridevivr/saas-pricing-intelligence',
  },
  {
    id: 'cursor-cost-chain',
    title: 'Cursor Cost Chain',
    category: 'business',
    screenshot: '/cursor-cost-analysis.png',
    description:
      'An interactive walkthrough of the AI cost chain from TSMC’s silicon through Nvidia, hyperscalers, and model providers down to Cursor’s flat subscription. Lays out the margin at each layer, and why the application layer gets squeezed from both sides.',
    liveUrl: 'https://sridevivr.github.io/cursor-cost-chain/',
    repoUrl: 'https://github.com/sridevivr/cursor-cost-chain',
  },
  {
    id: 'ai-startup-survival-tracker',
    title: 'AI Startup Survival Tracker',
    category: 'business',
    screenshot: '/ai-survival-tracker.png',
    description:
      'A weekly-refreshing survival tracker for 577 AI startups from the 2023+ cohort. Scores each company on seven public signals and classifies them across sector and function.',
    liveUrl: 'https://sridevivr.github.io/ai-startup-survival-tracker/',
    repoUrl: 'https://github.com/sridevivr/ai-startup-survival-tracker',
  },
];
