import Link from "next/link";

type AboutUsProps = {
  /** Where the partnership CTAs point. The section only lives on the
      homepage, so other routes need the full path. */
  partnershipHref?: string;
};

export default function AboutUs({
  partnershipHref = "/#partnership-opportunities",
}: AboutUsProps) {
  return (
    <section
      className="relative overflow-hidden bg-surface-1 py-16 lg:py-24"
      aria-labelledby="about-afrochain-title"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-50 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-none border border-brand-600/15">
            <div className="lg:col-span-3 bg-ink-900 p-7 md:p-10 text-white">
              <p className="type-eyebrow text-white/70">
                About AfroChain 2027
              </p>
              <h2
                id="about-afrochain-title"
                className="type-h2 mt-3"
              >
                Building Institutional Pathways into Ethiopia and Africa
              </h2>
            </div>
            <div className="lg:col-span-2 bg-white p-7 md:p-10">
              <p className="text-body leading-relaxed">
                AfroChain is a high-level digital economy platform connecting
                blockchain, AI, and finance leaders to Ethiopia and the African
                market.
              </p>
              <p className="mt-4 text-body leading-relaxed">
                It has evolved from a regional summit into a strategic forum for
                infrastructure builders, policymakers, investors, and global
                institutions shaping Africa&apos;s digital future &mdash;
                building the Road to AfroChain Summit 2027.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-none border border-brand-600/15">
            <div className="lg:col-span-3 bg-white p-7 md:p-10">
              <p className="type-eyebrow text-muted-ink">
                Why Ethiopia, Why Now
              </p>
              <h3 className="type-h3 mt-3 text-brand-600">
                Building Institutional Entry Points Into Africa&apos;s Next Major
                Digital Economy
              </h3>
              <p className="mt-4 text-body leading-relaxed">
                Ethiopia has launched Digital Ethiopia 2030, making digital
                infrastructure, financial modernization, AI, and entrepreneurship
                national priorities.
              </p>
              <p className="mt-4 text-body leading-relaxed">
                National Bank of Ethiopia forex reforms are improving clarity
                for capital flow, foreign participation, and cross-border
                financial activity.
              </p>
              {/* <div className="mt-5 rounded-lg bg-surface-2 px-4 py-3">
                <p className="text-brand-600 font-semibold">
                  AfroChain 2027 sits at the intersection of policy direction and
                  global execution.
                </p>
              </div> */}
            </div>
            <div className="lg:col-span-2 bg-ink-900 p-7 md:p-10 text-white space-y-5">
              <div className="rounded-xl border border-none p-6">
                <p className="type-eyebrow text-white/70">
                  Access Model
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight">
                  AfroChain is a gateway, not just an exhibition.
                </p>
                <p className="mt-3 text-white/85 leading-relaxed">
                  A single platform connecting policy stakeholders, institutions,
                  investors, and execution partners.
                </p>
              </div>
              {/* <div className="rounded-xl border-none p-6">
                <p className="text-white/85 leading-relaxed">
                  A strategic platform connecting policy, institutions, and
                  execution partners across Ethiopia and the African market.
                </p>
              </div> */}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5  rounded-3xl overflow-hidden shadow-none border border-brand-600/15">
            <div className="lg:col-span-3 bg-ink-900 p-7 md:p-10">
              <p className="type-eyebrow text-white/70">
                What AfroChain Unlocks
              </p>
              <h3 className="type-h3 mt-3 text-white">
                Three Access Lanes, One Institutional Platform
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed">
                AfroChain delivers role-specific value for builders, investors,
                and international organizations entering Ethiopia&apos;s evolving
                digital economy.
              </p>
            </div>
            <div className="lg:col-span-2 bg-white p-7 md:p-10 text-brand-600">
              <div className="grid grid-cols-1 gap-5">
              <article className="rounded-xl border border-brand-600/20 bg-brand-600/5 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="type-h4">For Builders</h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-600/20 px-2 text-xs font-bold">
                    01
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-body">
                  <li>Access to national priorities</li>
                  <li>Infrastructure-focused hackathons</li>
                  <li>Exposure to regulators and institutions</li>
                </ul>
              </article>

              <article className="rounded-xl border border-brand-600/20 bg-brand-600/5 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="type-h4">For Investors</h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-600/20 px-2 text-xs font-bold">
                    02
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-body">
                  <li>Curated deal flow</li>
                  <li>Early-stage African startup access</li>
                  <li>Institutional roundtables</li>
                </ul>
              </article>

              <article className="rounded-xl border border-brand-600/20 bg-brand-600/5 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="type-h4">
                    For Global Organizations
                  </h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-600/20 px-2 text-xs font-bold">
                    03
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-body">
                  <li>Market entry clarity</li>
                  <li>Policy-informed ecosystem access</li>
                  <li>
                    <Link
                      href={partnershipHref}
                      className="font-semibold text-brand-600 underline decoration-[#245a9a]/30 underline-offset-2 transition-colors duration-200 hover:decoration-[#245a9a]"
                    >
                      Strategic partnership opportunities
                    </Link>
                  </li>
                </ul>
              </article>
              </div>
            </div>
          </div>

          <div className="mt-8 flex lg:justify-end">
            <p className="inline-flex rounded-full border border-brand-600/30 px-4 py-2 text-sm font-semibold text-brand-600">
              We are not just hosting conversations. We are structuring access.
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
            >
              Request Institutional Briefing
            </Link>
            <Link
              href={partnershipHref}
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-600 bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
            >
              Partner with AfroChain
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
