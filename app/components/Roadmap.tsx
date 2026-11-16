"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Lock, MapPin } from "lucide-react";
import { PROGRAM, events } from "@/app/data/events";
import { FormatBadge, PhaseChip } from "@/app/components/EventBadges";
import DaysUntil from "@/app/components/DaysUntil";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245a9a]";

export default function Roadmap() {
  const activePhase =
    events.find((event) => event.highlight)?.phase ?? PROGRAM.phases[0].phase;

  // One selection drives both the stepper ring and the card highlight, so
  // they always match. It defaults to BUILD: on load the first card is
  // highlighted, clicking another phase moves ring and highlight together.
  const [selectedSlug, setSelectedSlug] = useState<string>(
    events[0]?.slug ?? "",
  );
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const selectPhase = (slug: string) => {
    if (selectedSlug === slug) return;
    setSelectedSlug(slug);
    requestAnimationFrame(() =>
      cardRefs.current[slug]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      }),
    );
  };

  return (
    <section
      id="roadmap"
      className="bg-white py-16 lg:py-24 scroll-mt-8"
      aria-labelledby="roadmap-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold tracking-widest text-[#245a9a]/85 uppercase">
              {PROGRAM.roadLabel}
            </p>
            <h2
              id="roadmap-title"
              className="mt-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#245a9a] leading-tight whitespace-nowrap sm:tracking-normal"
            >
              <span className="whitespace-nowrap">Four Stages.</span>{" "}
              <span className="whitespace-nowrap text-[#0f2f56]">
                One Ecosystem.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-[#245a9a]/90 leading-relaxed">
              {PROGRAM.intro}
            </p>

            {/* Phase stepper */}
            <ol className="mt-8 flex flex-nowrap items-center justify-center gap-x-2.5 sm:gap-x-5 lg:gap-x-0">
              {events.map((event, index) => (
                <li
                  key={event.phase}
                  className="flex h-7 items-center justify-center gap-2 sm:justify-start sm:gap-3"
                >
                  <button
                    type="button"
                    onClick={() => selectPhase(event.slug)}
                    aria-pressed={selectedSlug === event.slug}
                    aria-label={`${event.phase} — highlight the ${event.name} card`}
                    className={`inline-flex rounded-full transition-transform duration-200 hover:scale-105 ${focusRing}`}
                  >
                    <PhaseChip
                      phase={event.phase}
                      accent={event.accent}
                      active={selectedSlug === event.slug}
                    />
                  </button>
                  {index < events.length - 1 && (
                    <span
                      className="hidden h-px w-10 bg-[#245a9a]/25 lg:block lg:w-12"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Timeline */}
          <ol className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-5">
            {events.map((event) => (
              <li key={event.slug} className="flex flex-col">
                <article
                  ref={(el) => {
                    cardRefs.current[event.slug] = el;
                  }}
                  className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-none ${
                    selectedSlug === event.slug
                      ? "border-2 border-transparent shadow-none -translate-y-1"
                      : "border-[#245a9a]/20"
                  }`}
                  style={
                    selectedSlug === event.slug
                      ? { boxShadow: `0 0 0 3px ${event.accent}, 0 20px 25px -5px rgb(15 47 86 / 0.18)` }
                      : undefined
                  }
                >
                  <span
                    className="h-1 w-full"
                    style={{ backgroundColor: event.accent }}
                    aria-hidden="true"
                  />

                  <div className="flex h-full flex-col p-5 lg:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#245a9a]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#245a9a]">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: event.accent }}
                          aria-hidden="true"
                        />
                        {event.phase}
                      </span>
                      <FormatBadge format={event.format} />
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-[#245a9a] leading-tight">
                      {event.name}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#245a9a]/90">
                      <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {event.dateLabel}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-[#245a9a]/85">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {event.location}
                    </p>

                    {event.highlight && (
                      <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-[#245a9a]">
                        Starts
                        <DaysUntil date={event.startDate} />
                      </p>
                    )}

                    <div className="mt-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#245a9a]/85">
                        Purpose
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#245a9a]/90">
                        {event.purpose}
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#245a9a]/85">
                        Focus Areas
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {event.focus.map((topic) => (
                          <li
                            key={topic}
                            className="rounded-full border border-[#245a9a]/20 bg-[#f6f9ff] px-2.5 py-1 text-xs font-medium text-[#245a9a]"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {event.cta && (
                      <div className="mt-auto flex flex-col gap-2.5 pt-4">
                        <div className="flex items-center justify-between gap-3">
                          {event.cta.href === "#" ? (
                            <span
                              className={`inline-flex w-full cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-[#245a9a]/10 px-4 py-2 text-sm font-semibold text-[#245a9a]/60`}
                              role="link"
                              aria-disabled="true"
                              title="Registration link coming soon"
                            >
                              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                              {event.cta.label}
                            </span>
                          ) : event.cta.href.startsWith("#") ? (
                            <Link
                              href={event.cta.href}
                              className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#245a9a] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678] ${focusRing}`}
                            >
                              {event.cta.label}
                            </Link>
                          ) : (
                            <a
                              href={event.cta.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#245a9a] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678] ${focusRing}`}
                            >
                              {event.cta.label}
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
