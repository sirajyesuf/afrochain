import Link from "next/link";

const pipeline = [
  {
    title: "Learn",
    description:
      "Workshops, ecosystem education, and policy-aligned curriculum.",
  },
  {
    title: "Build",
    description:
      "Hackathons focused on real-world digital economy challenges.",
  },
  {
    title: "Pitch",
    description:
      "Demo day exposure to investors, institutions, and ecosystem partners.",
  },
  {
    title: "Launch",
    description:
      "Incubation, partnerships, and market access support for growth.",
  },
];

const audience = [
  "Developers transitioning from Web2 to Web3",
  "AI builders",
  "Fintech founders",
  "University innovators",
  "Early-stage startups",
];

const outcomes = [
  "Structured mentorship",
  "Ecosystem exposure",
  "Institutional networking",
  "Investor access",
  "Pilot opportunity potential",
];

export default function NextChainHub() {
  return (
    <section
      id="nextchain-hub"
      aria-labelledby="nextchain-hub-title"
      className="bg-surface-1 py-16 lg:py-24 scroll-mt-8"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="type-eyebrow text-muted-ink">
              NextChain Hub
            </p>
            <h2
              id="nextchain-hub-title"
              className="type-h2 mt-3 text-brand-600"
            >
              AfroChain&apos;s Gateway from Ideas to Execution
            </h2>
            <p className="mt-5 type-lead text-body">
              NextChain is AfroChain&apos;s execution engine, a structured
              builder and incubation program aligned with Blockchain, AI, and
              Finance. It transforms conversations into companies.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-600/20 bg-white p-6 lg:p-8">
            <h3 className="type-h3 text-brand-600">
              Builder-to-Market Execution Framework
            </h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pipeline.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-xl border border-brand-600/20 bg-surface-1 p-4 pt-10"
                >
                  <span className="absolute left-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-brand-600 px-2 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-bold text-brand-600">{step.title}</p>
                  <p className="mt-2 text-base text-body">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-brand-600/20 bg-white p-6">
              <h3 className="type-h3 text-brand-600">Who It&apos;s For</h3>
              <ul className="mt-4 space-y-2 text-body">
                {audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-600/20 bg-white p-6">
              <h3 className="type-h3 text-brand-600">What You Get</h3>
              <ul className="mt-4 space-y-2 text-body">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://forms.gle/vrpvDxoufARBNnPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
            >
              Apply to Incubation
            </a>
            <Link
              href="/#hackathon"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-600 px-6 py-3 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
            >
              Join Hackathon
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-600 px-6 py-3 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
            >
              Partner with NextChain
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
