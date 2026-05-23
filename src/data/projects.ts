// ---------------------------------------------------------------------------
// Projects data, the content that drives the Projects section.
// Order here controls the order on the page. The first project appears first.
// ---------------------------------------------------------------------------

export type Category = 'product' | 'business';

export type Project = {
  /** Stable slug. Used for anchors and keys. */
  id: string;
  /** Display title. */
  title: string;
  /** Short description shown on the card itself (1 to 2 sentences). */
  description: string;
  /** Full narrative shown inside the Expand panel. Plain string, rendered as a paragraph. */
  longDescription: string;
  /** Optional lessons-learned bullets shown inside the Expand panel below the long description. Only Wayfarer uses this. */
  lessonsLearned?: string[];
  /** Tech stack tags rendered as small mono pills on the card. */
  techStack: string[];
  /** Category tag, drives the colored pill on the card. */
  category: Category;
  /** Screenshot served from /public. */
  screenshot: string;
  /** Live, hosted version. Null if not deployed. */
  liveUrl: string | null;
  /** Source code. */
  repoUrl: string;
  /** Only for products: paths to design screenshots shown in the Expand panel. */
  designScreenshots?: string[];
};

export const projects: Project[] = [
  {
    id: 'wayfarer',
    title: 'Wayfarer',
    category: 'product',
    screenshot: '/projects/wayfarer/thumb.png',
    description:
      'Walking motivation iOS app. Turns daily steps into a virtual journey on a map, with AI-generated story cards at each milestone.',
    longDescription:
      "I felt like all the walking I was doing, because someone said 10,000 steps wasn't an interesting enough motivator for me. I've always wanted to know if I had walked from (for example) Somerville to Yellowstone. I felt like having a virtual journey would be fun, and I wanted it to have a narrative as I went along.",
    lessonsLearned: [
      "Building an iOS app is not easy. Having a clear vision for the product shepherded me through the process.",
      "Test test test. I asked AI to build unit tests for every milestone.",
      "Document everything. After a point, my AI and I were both talking gibberish without context. Maintaining an md file made a big difference.",
      "Next time, I'd break milestones down further into phases, with explicit user-test checkpoints.",
    ],
    techStack: ['React Native', 'Expo', 'JavaScript'],
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
      'A rideshare app for the Tuck student volunteer driving program. Built with another Tuck PM to formalize a night-time ride service in Hanover.',
    longDescription:
      "Given that Dartmouth is in Hanover, and the cab service there is minimal. Tuckies have a program where you can sign up to volunteer and drive your friends if they need a ride in the night. I loved this, and wanted to have an app for this. So, another Tuckie (who's a PM) and I are building this.",
    techStack: ['Claude Code'],
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
      'Tracks pricing strategy across 134 SaaS companies. A weekly-refreshing dashboard that scrapes vendor pages and extracts tier structure and AI feature packaging.',
    longDescription:
      "This is an experiment to see how strategic shifts in the industry can be tied to price variations in their offerings. It's a weekly refreshing dashboard that scrapes data from 134 companies, extracts tier structure and AI feature packaging and presents it on a dashboard.",
    techStack: ['Python', 'BeautifulSoup', 'Claude Haiku', 'Streamlit'],
    liveUrl: 'https://saas-pricing-intelligence.streamlit.app/',
    repoUrl: 'https://github.com/sridevivr/saas-pricing-intelligence',
  },
  {
    id: 'cursor-cost-chain',
    title: 'Cursor Cost Chain',
    category: 'business',
    screenshot: '/cursor-cost-analysis.png',
    description:
      "An interactive walkthrough of the AI cost chain, from TSMC's silicon down to Cursor's flat subscription.",
    longDescription:
      "The acquisition news of Cursor sparked this. I wanted to understand, how SpaceX got to the $60B valuation, which then led me to want to find out where Cursor sat in the ecosystem. I believe this will need to be updated as the news evolves.",
    techStack: ['Claude', 'HTML', 'GitHub Pages'],
    liveUrl: 'https://sridevivr.github.io/cursor-cost-chain/',
    repoUrl: 'https://github.com/sridevivr/cursor-cost-chain',
  },
  {
    id: 'ai-startup-tracker',
    title: 'AI Startup Tracker',
    category: 'business',
    screenshot: '/ai-survival-tracker.png',
    description:
      'Makes sense of the AI funding boom. Combs through 577 YC-backed AI startups and classifies them by sector and underlying technology.',
    longDescription:
      "The AI space has boomed and how. Lately it feels like there is a new AI startup getting funded every day. The industry is evolving so quickly that I felt like I needed to find a way to make sense of what's going on. I want to answer questions like, what sector are AI startups propping up in, what technology are they selling (AI agent? Analytics? Generative?) This meant combing through 577 AI startups incubated in YC.",
    techStack: ['Python', 'Claude API'],
    liveUrl: 'https://sridevivr.github.io/ai-startup-survival-tracker/',
    repoUrl: 'https://github.com/sridevivr/ai-startup-survival-tracker',
  },
];
