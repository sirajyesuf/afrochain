import Image from "next/image";
import { speakers } from "@/app/data/speakers";

const topics = [
  "AI",
  "Finance",
  "Blockchain",
  "Web3",
  "DeFi",
  "NFTs",
  "Innovation",
  "Fintech",
  "Smart Contracts",
  "Digital Identity",
];

/**
 * Speakers section, reserved for individual speakers only.
 *
 * Companies and institutions are partners, not speakers, and live in the
 * partners section instead. While app/data/speakers.ts is empty the section
 * shows a one-line announcement; adding confirmed speakers switches it to the
 * grid automatically.
 *
 * Kept deliberately compact: the topics strip is a plain marquee at body-ish
 * scale, and the heading and edition label share one baseline row.
 */
export default function SpeakersSection() {
  const confirmed = speakers.filter((speaker) => speaker.confirmed);

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Topics strip */}
        <p className="type-caption font-semibold uppercase tracking-[0.14em] text-muted-ink">
          Topics Covered At The Summit
        </p>

        <div className="relative mt-3 overflow-hidden">
          <div className="marquee" style={{ animationDuration: "25s" }}>
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-5 pr-5 text-2xl font-bold text-brand-600 sm:gap-6 sm:pr-6 sm:text-3xl lg:text-4xl"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {topics.map((topic) => (
                  <span key={topic} className="whitespace-nowrap">
                    {topic}.
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-base text-body">
          Network with game-changers and thought leaders at AfroChain Summit 2027.
        </p>

        {/* Speakers */}
        <div className="mt-7 border-t border-brand-600/10 pt-6 lg:mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h2 className="type-h2 text-brand-600">
              Speakers
            </h2>
            <p className="type-eyebrow text-muted-ink">
              AfroChain Summit · March 2027
            </p>
          </div>

          {confirmed.length === 0 ? (
            <div className="mt-4 w-full rounded-xl border border-brand-600/15 bg-surface-1 px-5 py-4">
              <p className="text-base leading-relaxed text-body">
                The 2027 speaker line-up is being finalised. Confirmed speakers
                will be announced here as they are confirmed.
              </p>
            </div>
          ) : (
            <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {confirmed.map((speaker) => (
                <li key={speaker.slug}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-brand-600/15 bg-surface-1">
                    {speaker.image && (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="type-h3 mt-3 text-brand-600">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-muted-ink">
                    {speaker.role}
                    {speaker.organization ? `, ${speaker.organization}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
