export type PartnershipCategory = {
  code: string;
  title: string;
  summary: string;
  points: string[];
};

export const partnershipCategories: PartnershipCategory[] = [
  {
    code: "01",
    title: "Strategic Sponsorship",
    summary:
      "Brand presence across the AfroChain 2026–2027 season, from the Summit to AfroChain Kenya.",
    points: [
      "Logo placement across event and digital materials",
      "Stage, session, and award recognition",
      "Co-branded communications for the full season",
    ],
  },
  {
    code: "02",
    title: "Exhibition & Product Showcase",
    summary:
      "Present your product to investors, operators, and institutional buyers through dedicated showcase moments.",
    points: [
      "Exhibition floor presence at AfroChain Summit",
      "Live product demos and showcases",
      "Curated buyer and investor introductions",
    ],
  },
  {
    code: "03",
    title: "Executive Forum Partnerships",
    summary:
      "Co-branded sessions, moderated panels, and closed-door briefings inside the invite-only Executive Forum.",
    points: [
      "Direct access to regulators, ministries, and central banks",
      "Co-branded session and panel formats",
      "Curated institutional briefings",
    ],
  },
  {
    code: "04",
    title: "Programme Partnerships",
    summary:
      "Back the builder pipeline by sponsoring a hackathon track, a prize pool, or a launchpad slot.",
    points: [
      "Hackathon track and prize sponsorship",
      "Launchpad incubation support",
      "Mentorship and workshop facilitation",
    ],
  },
  {
    code: "05",
    title: "Market Entry & Business Matchmaking",
    summary:
      "Curated introductions, deal flow, and market entry support for organizations entering Ethiopia and the wider African market.",
    points: [
      "Business matchmaking at the Investment Forum",
      "Curated deal flow and investor briefings",
      "Local introductions and entry frameworks",
    ],
  },
];
