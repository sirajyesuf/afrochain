export type EventFormat = "invite-only" | "open";

export type AfroChainEvent = {
  slug: string;
  phase: string;
  phaseLine: string;
  accent: string;
  name: string;
  shortName: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  location: string;
  format: EventFormat;
  formatLabel: string;
  purpose: string;
  focus: string[];
  audience: string[];
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
  highlight: boolean;
};

/** Brand constants for the current edition.
 *
 * `edition` is the umbrella brand, `roadLabel` is the programme that leads to
 * the flagship Summit, and the four events sit on that road in phase order. */
export const PROGRAM = {
  edition: "AfroChain 2027",
  editionLabel: "2027",
  roadLabel: "Road to AfroChain Summit 2027",
  headline: "Four Stages. One Ecosystem.",
  strapline: "BUILD · CONNECT · SCALE · EXPAND",
  intro:
    "Four events leading to AfroChain Summit 2027 — from closed institutional forums in Addis Ababa to a regional summit across East Africa.",
  phases: [
    { phase: "BUILD", month: "Nov", line: "Build the foundations" },
    { phase: "CONNECT", month: "Dec", line: "Connect investment & opportunities" },
    { phase: "SCALE", month: "Mar", line: "Scale the ecosystem" },
    { phase: "EXPAND", month: "Apr", line: "Expand regionally" },
  ],
} as const;

export const events: AfroChainEvent[] = [
  {
    slug: "executive-forum",
    phase: "BUILD",
    phaseLine: "Build the foundations",
    accent: "#8b5cf6",
    name: "AfroChain Executive Forum",
    shortName: "Executive Forum",
    startDate: "2026-11-20",
    endDate: "2026-11-21",
    dateLabel: "Nov 20–21, 2026",
    location: "Addis Ababa, Ethiopia",
    format: "invite-only",
    formatLabel: "Closed / Invite Only",
    purpose:
      "Policy, regulation, financial infrastructure and institutional relationships.",
    focus: [
      "Blockchain",
      "AI",
      "Fintech",
      "Digital Finance",
      "Investment",
    ],
    audience: [
      "Central Banks & Regulators",
      "Ministries & Policy Advisors",
      "Financial Infrastructure Operators",
      "Institutional Investors",
      "Development Partners",
    ],
    highlights: [
      "Closed-door policy and regulatory sessions with central banks, ministries, and financial authorities",
      "Briefings on payments, foreign exchange, and cross-border capital infrastructure",
      "Institutional roundtables on blockchain, AI, and digital finance adoption",
      "Curated one-to-one introductions between government and financial institutions",
      "A senior-leader off-site format built for substantive working discussion",
    ],
    cta: {
      label: "Request Invitation",
      // TODO: replace with the Executive Forum invite request form URL
      href: "#",
    },
    highlight: true,
  },
  {
    slug: "investment-forum",
    phase: "CONNECT",
    phaseLine: "Connect investment & opportunities",
    accent: "#f59e0b",
    name: "AfroChain Investment Forum",
    shortName: "Investment Forum",
    startDate: "2026-12-17",
    endDate: "2026-12-18",
    dateLabel: "Dec 17–18, 2026",
    location: "Addis Ababa, Ethiopia",
    format: "invite-only",
    formatLabel: "Closed / Invite Only",
    purpose:
      "Investment, market entry, partnerships and international companies.",
    focus: [
      "Investment",
      "Market Entry",
      "Business Matchmaking",
      "Partnerships",
    ],
    audience: [
      "Investors & Venture Capital",
      "Family Offices & Institutional Capital",
      "International Companies",
      "Market Entry & Expansion Teams",
      "Regional Operators",
    ],
    highlights: [
      "Curated deal flow and pre-investment briefings on African digital infrastructure",
      "Market entry frameworks for international companies entering Ethiopia",
      "Business matchmaking between capital and operators across the continent",
      "Co-investment and partnership conversations with regional capital",
      "Structured sessions on frontier, digital finance, and infrastructure investment",
    ],
    cta: {
      label: "Request Invitation",
      // TODO: replace with the Investment Forum invite request form URL
      href: "#",
    },
    highlight: false,
  },
  {
    slug: "summit",
    phase: "SCALE",
    phaseLine: "Scale the ecosystem",
    accent: "#0ea5e9",
    name: "AfroChain Summit",
    shortName: "Summit",
    startDate: "2027-03-25",
    endDate: "2027-03-27",
    dateLabel: "Mar 25–27, 2027",
    location: "Addis Ababa, Ethiopia",
    format: "open",
    formatLabel: "Open to All + VIP",
    purpose:
      "The main AfroChain public summit bringing together the wider African and global ecosystem.",
    focus: [
      "Blockchain",
      "AI",
      "Fintech",
      "Digital Finance",
      "Investment",
      "Startups",
    ],
    audience: [
      "Developers & Technical Founders",
      "Startups & Founders",
      "Investors & Institutional Capital",
      "Policy & Institutions",
      "Students & Ecosystem Operators",
    ],
    highlights: [
      "The full AfroChain program across Blockchain, AI, Fintech, Digital Finance, and Investment tracks",
      "Hackathon and startup showcase for builders shipping real products",
      "Exhibition floor for solution providers, platforms, and exhibitors",
      "Featured speakers, panels, and practical working sessions",
      "Open general access alongside a dedicated VIP track",
    ],
    cta: {
      label: "Register",
      // TODO: replace with the AfroChain Summit registration form URL
      href: "https://forms.gle/vrpvDxoufARBNnPLA",
    },
    highlight: false,
  },
  {
    slug: "kenya",
    phase: "EXPAND",
    phaseLine: "Expand regionally",
    accent: "#dbe900",
    name: "AfroChain Kenya",
    shortName: "Kenya",
    startDate: "2027-04-06",
    endDate: "2027-04-08",
    dateLabel: "Apr 6–8, 2027",
    location: "Nairobi, Kenya",
    format: "open",
    formatLabel: "Open to All + VIP",
    purpose:
      "Regional expansion and connecting the East African ecosystem with AfroChain's global network.",
    focus: [
      "Regional Ecosystem",
      "East Africa",
      "Partnerships",
      "Investment",
      "Startups",
    ],
    audience: [
      "East African Operators",
      "Regional Investors",
      "Regulators & Policy Makers",
      "Founders & Startups",
      "Ecosystem & Ecosystem Partners",
    ],
    highlights: [
      "East African ecosystem sessions with regional operators, regulators, and capital",
      "Regional market entry and partnership opportunities across the corridor",
      "A direct connection between the AfroChain global network and East Africa",
      "Startup and investor showcases from across the region",
      "Open access with a dedicated VIP track for institutional participants",
    ],
    cta: {
      label: "Register",
      // TODO: replace with the AfroChain Kenya registration form URL
      href: "https://forms.gle/vrpvDxoufARBNnPLA",
    },
    highlight: false,
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getNextEvent(from: Date = new Date()) {
  const today = from.toISOString().slice(0, 10);
  return events.find((event) => event.startDate >= today) ?? events[0];
}
