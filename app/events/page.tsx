import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Globe2, Lock, MapPin, Target, Users } from "lucide-react";import { SEASON, events, type AfroChainEvent } from "@/app/data/events";
import { FormatBadge, PhaseChip } from "@/app/components/EventBadges";

const siteUrl = "https://afrochainsummit.com";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dbe900]";

export const metadata: Metadata = {
  title: "Events Roadmap",
  description:
    "The AfroChain 2026–2027 official event roadmap: Executive Forum (Nov 20–21, 2026), Investment Forum (Dec 17–18, 2026), AfroChain Summit (Mar 25–27, 2027), and AfroChain Kenya (Apr 6–8, 2027).",
  keywords: [
    "afrochain executive forum",
    "afrochain investment forum",
    "afrochain summit 2027",
    "afrochain kenya",
    "afrochain events roadmap",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "AfroChain 2026–2027 Events Roadmap",
    description:
      "Four stages. One ecosystem. Executive Forum, Investment Forum, Summit, and Kenya — the official AfroChain roadmap.",
    url: `${siteUrl}/events`,
    siteName: "AfroChain 2026–2027",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfroChain 2026–2027 Events Roadmap",
    description:
      "Four stages. One ecosystem. The official AfroChain event roadmap for 2026–2027.",
  },
};

function eventJsonLd(event: AfroChainEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.purpose,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressCountry: event.location.includes("Ethiopia") ? "ET" : "KE",
        addressLocality: event.location.includes("Ethiopia")
          ? "Addis Ababa"
          : "Kenya",
      },
    },
    url: `${siteUrl}/events#${event.slug}`,
    organizer: {
      "@type": "Organization",
      name: "AfroChain",
      url: siteUrl,
    },
  };
}

export default function EventsPage() {
  const activePhase =
    events.find((event) => event.highlight)?.phase ?? SEASON.phases[0].phase;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            events.map((event) => eventJsonLd(event)),
          ),
        }}
      />

      <section
        className="relative bg-[#0f2f56] pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden"
        aria-labelledby="events-title"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f56] via-[#245a9a]/80 to-[#245a9a]/50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex max-w-full items-center rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.16em] text-white/95 uppercase sm:rounded-full">
              AfroChain {SEASON.displayLabel} Season
            </p>
            <h1
              id="events-title"
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-lg"
            >
              The AfroChain{" "}
              <span className="text-[#dbe900]">Roadmap</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-light tracking-wide leading-relaxed">
              {SEASON.headline} {SEASON.intro}
            </p>
          </div>

          {/* Phase stepper */}
          <ol className="mt-9 flex flex-nowrap items-center gap-x-2.5 sm:gap-x-6">
            {events.map((event, index) => (
              <li key={event.phase} className="flex h-7 items-center gap-2">
                <PhaseChip
                  phase={event.phase}
                  accent={event.accent}
                  active={event.phase === activePhase}
                  tone="dark"
                />
                {index < events.length - 1 && (
                  <span
                    className="hidden h-px w-8 bg-white/25 lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {events.map((event, index) => (
        <section
          key={event.slug}
          id={event.slug}
          aria-labelledby={`${event.slug}-title`}
          className={`scroll-mt-8 py-14 lg:py-20 ${
            index % 2 === 0 ? "bg-white" : "bg-[#f6f9ff]"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#245a9a]/20 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#245a9a]">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: event.accent }}
                    aria-hidden="true"
                  />
                  {event.phase}
                </span>
                <FormatBadge format={event.format} />
              </div>

              <h2
                id={`${event.slug}-title`}
                className="mt-4 text-3xl md:text-4xl font-bold text-[#245a9a] leading-tight"
              >
                {event.name}
              </h2>

              {/* Meta row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#245a9a]/85">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {event.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {event.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  {event.format === "invite-only" ? (
                    <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <Globe2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                  {event.formatLabel}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#245a9a]/90">
                {event.purpose}
              </p>

              {/* Content */}
              <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-[#245a9a]">
                    <Target className="h-4 w-4" aria-hidden="true" />
                    Focus Areas
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {event.focus.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full border border-[#245a9a]/20 bg-white px-3 py-1 text-sm font-medium text-[#245a9a]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-9 flex items-center gap-2 text-base font-bold text-[#245a9a]">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Who This Is For
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {event.audience.map((group) => (
                      <li
                        key={group}
                        className="flex items-start gap-2.5 text-sm text-[#245a9a]/85"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dbe900]"
                          aria-hidden="true"
                        />
                        {group}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#245a9a]">
                    What to Expect
                  </h3>
                  <ol className="mt-3 space-y-3">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#245a9a]/85"
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#245a9a]/10 text-xs font-bold text-[#245a9a]"
                          aria-hidden="true"
                        >
                          {highlightIndex + 1}
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 border-t border-[#245a9a]/15 pt-6 sm:flex-row sm:items-center sm:gap-6">
                {event.cta.href === "#" ? (
                  <span
                    className={`inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-[#245a9a]/10 px-5 py-2.5 text-sm font-semibold text-[#245a9a]/60`}
                    role="link"
                    aria-disabled="true"
                    title="Registration link coming soon"
                  >
                    <Lock className="h-4 w-4" aria-hidden="true" />
                    {event.cta.label}
                  </span>
                ) : (
                  <a
                    href={event.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg bg-[#245a9a] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678] ${focusRing}`}
                  >
                    {event.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#0f2f56] py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay close to the roadmap
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              AfroChain runs a single season across four events. Partner with
              the series, or reach the team directly about access.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
              <Link
                href="/partners"
                className={`inline-flex w-full items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-bold text-white border-2 border-white transition-colors duration-200 hover:bg-white hover:text-[#245a9a] sm:w-auto ${focusRing}`}
              >
                Partner with AfroChain
              </Link>
              <Link
                href="/contactus"
                className={`inline-flex w-full items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-bold text-white border-2 border-white transition-colors duration-200 hover:bg-white hover:text-[#245a9a] sm:w-auto ${focusRing}`}
              >
                Contact the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
