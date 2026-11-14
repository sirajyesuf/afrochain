export type ImpactStat = {
  value: string;
  label: string;
};

/**
 * Impact figures for the past-events section - the single source of truth.
 * Rendered as one horizontal row of six on desktop (three columns on smaller
 * screens).
 *
 * Provenance:
 * - 2,000+ attendees, 15+ sponsors & partners, 15+ countries: confirmed by the
 *   client as accurate.
 * - 10+ institutes, 15 universities: updated together with the 2,000 attendees
 *   figure in the legacy stats component (app/components/Stats.tsx, commit
 *   df2bae3 "number updated"), so same measurement as the attendee count. Do
 *   not mix in the older superseded set (1,200+ participants / 300+ companies
 *   / 25 countries / 150+ speakers).
 * - 2 editions: AfroChain 2025 and 2026, verifiable from the partner year
 *   values in app/data/partners.ts.
 */
export const impactStats: ImpactStat[] = [
  { value: "2,000+", label: "Attendees" },
  { value: "15+", label: "Countries" },
  { value: "15+", label: "Sponsors & Partners" },
  { value: "10+", label: "Institutes" },
  { value: "15", label: "Universities" },
  { value: "2", label: "Editions Hosted" },
];
