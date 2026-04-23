// ---------------------------------------------------------------------------
// Projects data — the content that drives the Projects section.
// Order here controls the order on the page. The first project appears first.
// ---------------------------------------------------------------------------

export type Category = 'business' | 'personal' | 'fun' | 'learning';

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
};

export const projects: Project[] = [
  {
    id: 'system-design-quest',
    title: 'System Design Quest',
    category: 'learning',
    screenshot: '/System-design-quest.png',
    description:
      'A Duolingo-style curriculum for the system design concepts behind every app you use. Six units, 180 questions, every lesson grounded in a real company scenario and an everyday analogy.',
    liveUrl: 'https://system-design-quest.vijayaraghavansridevi.workers.dev/',
    repoUrl: 'https://github.com/sridevivr/SystemDesign',
  },
  {
    id: 'silver-nitrate-and-silicon',
    title: 'Silver Nitrate & Silicon',
    category: 'fun',
    screenshot: '/Silver-nitrate.png',
    description:
      'A museum-style web experience about the century-long conversation between cinema and technology. Four wings, eleven rooms, and forty-six exhibits — each with a constellation of the products, people, and memes the film spawned.',
    liveUrl: 'https://silvernitrate-and-silicon.vijayaraghavansridevi.workers.dev/',
    repoUrl: 'https://github.com/sridevivr/SilverNitrate-and-Silicon',
  },
  {
    id: 'saas-pricing-intelligence',
    title: 'SaaS Pricing Intelligence',
    category: 'business',
    screenshot: '/Saas-price-intelligence.png',
    description:
      'A weekly-refreshing dashboard that tracks pricing strategy across 50+ SaaS companies. Scrapes each vendor\u2019s page, uses Claude Haiku to extract tiers and AI features, and visualizes the market in Streamlit.',
    liveUrl: 'https://saas-pricing-intelligence.streamlit.app/',
    repoUrl: 'https://github.com/sridevivr/saas-pricing-intelligence',
  },
  {
    id: 'cursor-cost-chain',
    title: 'Cursor Cost Chain',
    category: 'business',
    screenshot: '/cursor-cost-analysis.png',
    description:
      'An interactive walkthrough of the AI cost chain from TSMC\u2019s silicon through Nvidia, hyperscalers, and model providers down to Cursor\u2019s flat subscription. Lays out the margin at each layer, and why the application layer gets squeezed from both sides.',
    liveUrl: 'https://sridevivr.github.io/cursor-cost-chain/',
    repoUrl: 'https://github.com/sridevivr/cursor-cost-chain',
  },
  {
    id: 'ai-startup-survival-tracker',
    title: 'AI Startup Survival Tracker',
    category: 'business',
    screenshot: '/ai-survival-tracker.png',
    description:
      'A weekly-refreshing survival tracker for 577 AI startups from the 2023+ cohort. Scores each company on seven public signals and classifies them across sector and function. What\u2019s thriving, what\u2019s on the watchlist, what\u2019s dormant or pivoted.',
    liveUrl: 'https://sridevivr.github.io/ai-startup-survival-tracker/',
    repoUrl: 'https://github.com/sridevivr/ai-startup-survival-tracker',
  },
  {
    id: 'movie-tracker',
    title: 'Movie Tracker',
    category: 'personal',
    screenshot: '/Movie-tracker.png',
    description:
      'A movie and TV log with the analytics I actually wanted — rewatches, comfort-show hours, genre patterns. Built in two days because Letterboxd paywalls the stats and streaming services don\u2019t track TV the way I watch.',
    liveUrl: 'https://movie-tracker-sridevivr.replit.app/',
    repoUrl: 'https://github.com/sridevivr/movietracker',
  },
];
