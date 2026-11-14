export type Speaker = {
  slug: string;
  name: string;
  /** Role or title, e.g. "Head of Digital Assets". */
  role: string;
  /** Employer or affiliation. */
  organization: string;
  image?: string;
  /** Only confirmed speakers are rendered on the site. */
  confirmed: boolean;
};

/**
 * Confirmed speakers for the 2027 edition.
 *
 * Intentionally empty until the full line-up is signed off - the speakers
 * section shows an announcement state while this is empty and switches to the
 * speaker grid as soon as confirmed entries are added.
 *
 * This list is for individuals only. Companies and institutions belong in
 * app/data/partners.ts - there is deliberately no "organization" type here,
 * so logos cannot drift back into the speakers grid.
 */
export const speakers: Speaker[] = [];
