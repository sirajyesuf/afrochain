import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Pillar = {
  id: "blockchain" | "ai" | "finance";
  title: string;
  overview: string;
  subtopics: string[];
  audience: string[];
  outcomes: string[];
  ctas: {
    label: string;
    href: string;
    external?: boolean;
    variant?: "primary" | "secondary";
  }[];
};

const pillars: Pillar[] = [
  {
    id: "blockchain",
    title: "Blockchain",
    overview:
      "Blockchain is a foundational layer for transparency, financial modernization, and digital infrastructure in emerging markets. AfroChain 2026 focuses on practical blockchain applications aligned with national development priorities.",
    subtopics: [
      "Digital Identity & Infrastructure",
      "On-chain Financial Systems",
      "Cross-border Payments & Stablecoins",
      "Public-Private Blockchain Pilots",
      "Web2 -> Web3 Transition for Developers",
    ],
    audience: [
      "L1/L2 Foundations",
      "Blockchain Infrastructure Providers",
      "Regulators & Policy Advisors",
      "Web3 Developers",
      "Fintech Operators",
    ],
    outcomes: [
      "Direct regulatory exposure",
      "Structured market understanding",
      "Technical workshops",
      "Hackathon participation",
      "Institutional networking",
    ],
    ctas: [
      {
        label: "Join the Blockchain Track",
        href: "https://forms.gle/vrpvDxoufARBNnPLA",
        external: true,
        variant: "primary",
      },
      {
        label: "Propose a Blockchain Session",
        href: "https://forms.gle/vrpvDxoufARBNnPLA",
        external: true,
        variant: "secondary",
      },
      {
        label: "Apply to Hackathon",
        href: "https://forms.gle/vrpvDxoufARBNnPLA",
        external: true,
        variant: "secondary",
      },
    ],
  },
  {
    id: "ai",
    title: "AI",
    overview:
      "AI is core to productivity, risk intelligence, and public-sector modernization across Africa's digital economy.",
    subtopics: [
      "AI for Financial Risk and Compliance",
      "AI in Agriculture and Health",
      "Data Governance and Ethics",
    ],
    audience: [
      "AI Startups",
      "Data Scientists",
      "Research Institutions",
    ],
    outcomes: [
      "Showcase opportunities",
      "Institutional discussions",
      "Partnership introductions",
    ],
    ctas: [
      {
        label: "Join the AI Track",
        href: "https://forms.gle/vrpvDxoufARBNnPLA",
        external: true,
        variant: "primary",
      },
      {
        label: "Showcase Your AI Solution",
        href: "/contactus",
        variant: "secondary",
      },
      {
        label: "Partner on AI Initiatives",
        href: "/partners",
        variant: "secondary",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    overview:
      "Finance is the bridge between infrastructure and growth. With Ethiopia's recent forex reforms and financial modernization efforts, AfroChain 2026 creates structured space for cross-border capital and fintech engagement.",
    subtopics: [
      "Digital Finance & Fintech Innovation",
      "Foreign Exchange Reform Insights",
      "Remittances & Cross-Border Payments",
      "Venture Capital & Frontier Investment",
      "Banking & Institutional Collaboration",
    ],
    audience: [
      "Investors & VCs",
      "Fintech Companies",
      "Banks and Financial Institutions",
      "Payment Providers",
      "International Market Entrants",
    ],
    outcomes: [
      "Policy-informed clarity",
      "Capital networking",
      "Market entry frameworks",
      "Investor briefings",
      "Partnership pipelines",
    ],
    ctas: [
      {
        label: "Join the Finance Track",
        href: "https://forms.gle/vrpvDxoufARBNnPLA",
        external: true,
        variant: "primary",
      },
      {
        label: "Request Investor Access",
        href: "/contactus",
        variant: "secondary",
      },
      {
        label: "Become a Finance Partner",
        href: "/partners",
        variant: "secondary",
      },
    ],
  },
];

const buttonClass = (variant: "primary" | "secondary" = "secondary") =>
  variant === "primary"
    ? "inline-flex items-center justify-center gap-2 rounded-lg bg-[#245a9a] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678]"
    : "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#245a9a] bg-white px-5 py-3 text-sm font-semibold text-[#245a9a] transition-colors duration-200 hover:bg-[#245a9a] hover:text-white";

export default function Pillars() {
  return (
    <section
      className="bg-[#f6f9ff] py-16 lg:py-24"
      aria-label="AfroChain 2026 Strategic Pillars"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-[#245a9a]/80 uppercase">
            AfroChain 2026 Pillars
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#245a9a]">
            Blockchain, AI, and Finance
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#245a9a]/85">
            Each track is built for practical execution, institutional
            collaboration, and market-ready outcomes across Ethiopia and Africa.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {pillars.map((pillar, index) => (
            <section
              id={pillar.id}
              key={pillar.id}
              aria-labelledby={`${pillar.id}-title`}
              className="scroll-mt-28 rounded-2xl border border-[#245a9a]/20 bg-white p-6 md:p-8 lg:p-10"
            >
              <div>
                <p className="text-sm font-semibold text-[#245a9a]/70 uppercase tracking-wider">
                  Pillar {index + 1}
                </p>
                <h3
                  id={`${pillar.id}-title`}
                  className="mt-2 text-3xl md:text-4xl font-bold text-[#245a9a]"
                >
                  {pillar.title}
                </h3>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-[#245a9a]/90">
                  {pillar.overview}
                </p>
                {pillar.id === "ai" && (
                  <p className="mt-4 inline-flex rounded-full border border-[#245a9a]/25 bg-[#f6f9ff] px-4 py-2 text-sm font-semibold text-[#245a9a]">
                    AfroChain 2026 positions AI not as hype - but as
                    infrastructure.
                  </p>
                )}

                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div className="rounded-xl border border-[#245a9a]/20 bg-[#f6f9ff] p-5">
                    <h4 className="text-base font-bold text-[#245a9a]">
                      Key Subtopics
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {pillar.subtopics.map((topic) => (
                        <li key={topic} className="text-[#245a9a]/90">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#245a9a]/20 bg-[#f6f9ff] p-5">
                    <h4 className="text-base font-bold text-[#245a9a]">
                      Who This Is For
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {pillar.audience.map((group) => (
                        <li key={group} className="text-[#245a9a]/90">
                          {group}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#245a9a]/20 bg-[#f6f9ff] p-5">
                    <h4 className="text-base font-bold text-[#245a9a]">
                      What You&apos;ll Get
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {pillar.outcomes.map((outcome) => (
                        <li key={outcome} className="text-[#245a9a]/90">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {pillar.ctas.map((cta) => {
                  if (cta.external) {
                    return (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass(cta.variant)}
                      >
                        {cta.label}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    );
                  }

                  return (
                    <Link key={cta.label} href={cta.href} className={buttonClass(cta.variant)}>
                      {cta.label}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
