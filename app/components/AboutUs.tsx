import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7faff] py-16 lg:py-24"
      aria-labelledby="about-afrochain-title"
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#245a9a]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#dbe900]/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#0f2f56] p-7 md:p-10 text-white">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
              About AfroChain 2026
            </p>
            <h2
              id="about-afrochain-title"
              className="mt-3 text-3xl md:text-4xl font-bold leading-tight"
            >
              Strategic Platform for Africa&apos;s Digital Economy
            </h2>
            <p className="mt-4 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
              AfroChain is a high-level platform connecting blockchain, AI, and
              finance leaders to Ethiopia and the African market. It has evolved
              from a regional summit into a strategic forum for builders,
              policymakers, investors, and global institutions.
            </p>
            <p className="mt-4 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
              We are not just hosting conversations. We are structuring access.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-[#245a9a]">
            <span className="rounded-full bg-white px-4 py-2 border border-[#245a9a]/20">
              Government vision
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-[#245a9a]/20">
              Private sector execution
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-[#245a9a]/20">
              Global capital
            </span>
            <span className="rounded-full bg-white px-4 py-2 border border-[#245a9a]/20">
              African innovation
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <article className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-[#245a9a]">Why Ethiopia, Why Now</h3>
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
              <p className="mt-4 text-[#245a9a]/90 leading-relaxed">
                AfroChain 2026 sits at the intersection of policy direction and
                global execution.
              </p>
            </article>

            <aside className="lg:col-span-2 border-l-4 border-[#245a9a] pl-5 lg:pl-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#245a9a]/70">
                Access Model
              </p>
              <p className="mt-3 text-xl font-bold text-[#245a9a]">
                AfroChain is not an exhibition. It is a gateway.
              </p>
              <p className="mt-4 text-[#245a9a]/85 leading-relaxed">
                A single platform that connects policy stakeholders, institutions,
                investors, and execution partners.
              </p>
            </aside>
          </div>

          <div className="mt-10 border-t border-[#245a9a]/20 pt-8">
            <h3 className="text-2xl font-bold text-[#245a9a]">What AfroChain Unlocks</h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-bold text-[#245a9a]">For Builders</h4>
                <ul className="mt-3 space-y-2 text-[#245a9a]/90">
                  <li>Access to national priorities</li>
                  <li>Infrastructure-focused hackathons</li>
                  <li>Exposure to regulators and institutions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#245a9a]">For Investors</h4>
                <ul className="mt-3 space-y-2 text-[#245a9a]/90">
                  <li>Curated deal flow</li>
                  <li>Early-stage African startup access</li>
                  <li>Institutional roundtables</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#245a9a]">
                  For Global Organizations
                </h4>
                <ul className="mt-3 space-y-2 text-[#245a9a]/90">
                  <li>Market entry clarity</li>
                  <li>Policy-informed ecosystem access</li>
                  <li>Strategic partnership opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-lg bg-[#245a9a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678]"
            >
              Request Market Entry Briefing
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
