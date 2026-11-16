import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partnershipCategories } from "@/app/data/partnerships";

export default function PartnershipOpportunities() {
  return (
    <section
      id="partnership-opportunities"
      className="scroll-mt-8 bg-surface-1 py-12 sm:py-16 lg:py-24"
      aria-labelledby="partnership-opportunities-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow text-muted-ink">
              Partnership Opportunities
            </p>
            <h2
              id="partnership-opportunities-title"
              className="type-h2 mt-2 text-brand-600"
            >
              Five Ways To Partner With AfroChain
            </h2>
            <p className="mt-3 type-lead text-body">
              Clear engagement routes for organizations that want to build
              presence, access institutions, and grow across Ethiopia and Africa.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-5">
            {partnershipCategories.map((category, index) => (
              <article
                key={category.code}
                className={`rounded-xl border border-brand-600/20 bg-white p-4 transition-colors duration-200 hover:border-brand-600/45 sm:p-5 lg:col-span-2 ${
                  index >= 3 ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="type-h3 text-brand-600">
                    {category.title}
                  </h3>
                  <span className="inline-flex h-6 min-w-7 shrink-0 items-center justify-center rounded-md bg-brand-600/20 px-1.5 text-xs font-bold text-brand-600 sm:h-7 sm:px-2">
                    {category.code}
                  </span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-body sm:mt-3">
                  {category.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-body sm:text-sm sm:leading-relaxed">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-600/40"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contactus"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700 sm:mt-4 sm:text-sm"
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
