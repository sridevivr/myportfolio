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
