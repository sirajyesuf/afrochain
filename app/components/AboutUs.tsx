import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#f8fbff] py-16 lg:py-24"
      aria-labelledby="about-afrochain-title"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#e9f2ff] to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-sm border border-[#245a9a]/15">
            <div className="lg:col-span-3 bg-[#0f2f56] p-7 md:p-10 text-white">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
                About AfroChain 2026
              </p>
              <h2
                id="about-afrochain-title"
                className="mt-3 text-3xl md:text-4xl font-bold leading-tight"
              >
                Building Institutional Pathways into Ethiopia and Africa
              </h2>
            </div>
            <div className="lg:col-span-2 bg-white p-7 md:p-10">
              <p className="text-[#245a9a]/90 leading-relaxed">
                AfroChain is a high-level digital economy platform connecting
                blockchain, AI, and finance leaders to Ethiopia and the African
                market.
              </p>
              <p className="mt-4 text-[#245a9a]/90 leading-relaxed">
                It has evolved from a regional summit into a strategic forum for
                infrastructure builders, policymakers, investors, and global
                institutions shaping Africa&apos;s digital future.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-sm border border-[#245a9a]/15">
            <div className="lg:col-span-3 bg-white p-7 md:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#245a9a]/70">
                Why Ethiopia, Why Now
              </p>
              <h3 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-[#245a9a]">
                Building Institutional Entry Points Into Africa&apos;s Next Major
                Digital Economy
              </h3>
              <p className="mt-4 text-[#245a9a]/90 leading-relaxed">
                Ethiopia has launched Digital Ethiopia 2030, making digital
                infrastructure, financial modernization, AI, and entrepreneurship
                national priorities.
              </p>
              <p className="mt-4 text-[#245a9a]/90 leading-relaxed">
                National Bank of Ethiopia forex reforms are improving clarity
                for capital flow, foreign participation, and cross-border
                financial activity.
              </p>
              {/* <div className="mt-5 rounded-lg bg-[#f4f8ff] px-4 py-3">
                <p className="text-[#245a9a] font-semibold">
                  AfroChain 2026 sits at the intersection of policy direction and
                  global execution.
                </p>
              </div> */}
            </div>
            <div className="lg:col-span-2 bg-[#0f2f56] p-7 md:p-10 text-white space-y-5">
              <div className="rounded-xl border border-none p-6">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
                  Access Model
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight">
                  AfroChain is a gateway, not an exhibition.
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

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-sm border border-[#245a9a]/15">
            <div className="lg:col-span-3 bg-white p-7 md:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#245a9a]/70">
                What AfroChain Unlocks
              </p>
              <h3 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-[#245a9a]">
                Three Access Lanes, One Institutional Platform
              </h3>
              <p className="mt-4 text-[#245a9a]/90 leading-relaxed">
                AfroChain delivers role-specific value for builders, investors,
                and international organizations entering Ethiopia&apos;s evolving
                digital economy.
              </p>
            </div>
            <div className="lg:col-span-2 bg-[#0f2f56] p-7 md:p-10 text-white">
              <div className="grid grid-cols-1 gap-5">
              <article className="rounded-xl border border-white/20 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">For Builders</h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-white/20 px-2 text-xs font-bold">
                    01
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-white/90">
                  <li>Access to national priorities</li>
                  <li>Infrastructure-focused hackathons</li>
                  <li>Exposure to regulators and institutions</li>
                </ul>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">For Investors</h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-white/20 px-2 text-xs font-bold">
                    02
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-white/90">
                  <li>Curated deal flow</li>
                  <li>Early-stage African startup access</li>
                  <li>Institutional roundtables</li>
                </ul>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">
                    For Global Organizations
                  </h4>
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-white/20 px-2 text-xs font-bold">
                    03
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-white/90">
                  <li>Market entry clarity</li>
                  <li>Policy-informed ecosystem access</li>
                  <li>Strategic partnership opportunities</li>
                </ul>
              </article>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="inline-flex rounded-full border border-[#245a9a]/30 px-4 py-2 text-sm font-semibold text-[#245a9a]">
              We are not just hosting conversations. We are structuring access.
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-lg bg-[#245a9a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678]"
            >
              Request Institutional Briefing
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#245a9a] bg-white px-6 py-3 text-sm font-semibold text-[#245a9a] transition-colors duration-200 hover:bg-[#245a9a] hover:text-white"
            >
              Partner with AfroChain
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
