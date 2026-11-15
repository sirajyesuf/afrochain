import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partnershipCategories } from "@/app/data/partnerships";

export default function PartnershipOpportunities() {
  return (
    <section
      id="partnership-opportunities"
      className="scroll-mt-8 bg-[#f6f9ff] py-12 sm:py-16 lg:py-24"
      aria-labelledby="partnership-opportunities-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-[#245a9a]/80 uppercase sm:text-sm">
              Partnership Opportunities
            </p>
            <h2
              id="partnership-opportunities-title"
              className="mt-2 text-2xl font-bold leading-tight text-[#245a9a] sm:text-4xl lg:text-5xl"
            >
              Five Ways To Partner With AfroChain
            </h2>
            <p className="mt-3 text-sm text-[#245a9a]/90 leading-relaxed sm:text-base md:text-lg">
              Clear engagement routes for organizations that want to build
              presence, access institutions, and grow across Ethiopia and Africa.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-5">
            {partnershipCategories.map((category, index) => (
              <article
                key={category.code}
                className={`rounded-xl border border-[#245a9a]/20 bg-white p-4 transition-colors duration-200 hover:border-[#245a9a]/45 sm:p-5 lg:col-span-2 ${
                  index >= 3 ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-[#245a9a] sm:text-lg">
                    {category.title}
                  </h3>
                  <span className="inline-flex h-6 min-w-7 shrink-0 items-center justify-center rounded-md bg-[#245a9a]/20 px-1.5 text-[11px] font-bold text-[#245a9a] sm:h-7 sm:px-2 sm:text-xs">
                    {category.code}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#245a9a]/90 sm:mt-3 sm:text-base">
                  {category.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[#245a9a]/85 sm:text-sm sm:leading-relaxed">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#245a9a]/40"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contactus"
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#245a9a] transition-colors duration-200 hover:text-[#1c4678] sm:mt-4 sm:text-sm"
                >
                  Discuss this
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
