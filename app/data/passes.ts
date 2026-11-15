export type PassCta = {
  label: string;
  href: string;
  /** Opens in a new tab. Payment and registration links leave the site. */
  external?: boolean;
  variant: "primary" | "secondary";
  /** Short qualifier shown next to the CTA, e.g. the amount to pay. */
  note?: string;
};

export type PassOption = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  scope: string;
  benefits: string[];
  ctas: PassCta[];
  /** Renders the dark, visually dominant variant. */
  featured?: boolean;
  badge?: string;
};

/** Every CTA on the site funnels here until live payment links exist. */
export const REGISTER_FORM_URL = "https://forms.gle/vrpvDxoufARBNnPLA";

/** Live checkout links for the AfroChain VIP Pass. */
export const CHAPA_VIP_URL = "https://chapa.events/to/afro-chain2026";

export const BINANCE_PAY_VIP_URL =
  "https://app.binance.com/uni-qr/request-to-pay?billOrderId=461553491758866432&billType=request_a_payment";

export const passes: PassOption[] = [
  {
    id: "community",
    name: "Free Community Pass",
    price: "Free",
    scope: "AfroChain Summit · March 25–27, 2027 · Addis Ababa",
    benefits: [
      "Admission to AfroChain Summit, March 25–27, 2027.",
      "Access to keynote presentations and main-stage sessions.",
      "Access to panel discussions.",
      "Startup showcases.",
      "Exhibition and innovation zone.",
      "Community networking.",
      "Access to selected public workshops.",
    ],
    ctas: [
      {
        label: "Register Free",
        href: REGISTER_FORM_URL,
        external: true,
        variant: "primary",
      },
    ],
  },
  {
    id: "vip",
    name: "AfroChain VIP Pass",
    price: "15,000 ETB / 100 USDT",
    priceNote:
      "Both payment methods provide exactly the same VIP benefits.",
    scope: "All three Addis Ababa events · November 2026 – March 2027",
    badge: "Full Programme Access",
    featured: true,
    benefits: [
      "Access to AfroChain Executive Forum (November 20–21, 2026).",
      "Access to AfroChain Investment Forum (December 17–18, 2026).",
      "Full VIP access to AfroChain Summit (March 25–27, 2027).",
      "Access to the Investment Room.",
      "Business matchmaking opportunities.",
      "Opportunities for one-to-one meetings with investors, founders, regulators and business leaders.",
      "Access to private business sessions and selected workshops.",
      "VIP lounge and dining.",
      "Exclusive welcome dinner.",
      "Official after-party.",
      "Exclusive networking opportunities.",
      "Curated Addis Ababa city experience.",
      "Preferential accommodation rates.",
      "Airline and travel partner discounts, subject to availability.",
      "Premium VIP badge and exclusive event experiences.",
    ],
    ctas: [
      {
        label: "Get VIP Pass — Pay with Chapa",
        href: CHAPA_VIP_URL,
        external: true,
        variant: "primary",
        note: "15,000 ETB",
      },
      {
        label: "Get VIP Pass — Pay with Crypto",
        href: BINANCE_PAY_VIP_URL,
        external: true,
        variant: "secondary",
        note: "100 USDT",
      },
    ],
  },
];

export const PASS_DISCLAIMER =
  "The Free Community Pass provides access to the public March Summit only. The VIP Pass provides access to all three Addis Ababa events, including the two closed-door forums, plus the additional VIP experiences and business networking opportunities.";
