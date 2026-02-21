"use client";

import { FormEvent, useState } from "react";

type BriefingForm = {
  companyName: string;
  sector: string;
  interestArea: string;
  timeline: string;
  email: string;
};

const initialForm: BriefingForm = {
  companyName: "",
  sector: "",
  interestArea: "",
  timeline: "",
  email: "",
};

export default function MarketEntryCapital() {
  const [form, setForm] = useState<BriefingForm>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      "Market Entry Briefing Request - AfroChain 2026",
    );
    const body = encodeURIComponent(
      `Company Name: ${form.companyName}
Sector: ${form.sector}
Interest Area: ${form.interestArea}
Timeline: ${form.timeline}
Email: ${form.email}`,
    );

    window.location.href = `mailto:afrochaineth@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="market-entry-capital"
      className="bg-white py-16 lg:py-24 scroll-mt-28"
      aria-labelledby="market-entry-capital-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-widest text-[#245a9a]/80 uppercase">
              Ethiopia Market Entry and Capital Forum
            </p>
            <h2
              id="market-entry-capital-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-[#245a9a]"
            >
              Structured Access to Ethiopia&apos;s Evolving Digital Economy
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#245a9a]/90 leading-relaxed">
              AfroChain 2026 includes a dedicated institutional platform for
              international organizations exploring market entry, capital
              deployment, and strategic partnerships in Ethiopia.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#245a9a]/20 bg-[#f6f9ff] p-6">
              <h3 className="text-xl font-bold text-[#245a9a]">Why Ethiopia</h3>
              <ul className="mt-4 space-y-2 text-[#245a9a]/90">
                <li>Africa&apos;s second most populous country</li>
                <li>Expanding digital infrastructure and innovation base</li>
                <li>National roadmap through Digital Ethiopia 2030</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#245a9a]/20 bg-[#f6f9ff] p-6">
              <h3 className="text-xl font-bold text-[#245a9a]">
                What&apos;s Changed
              </h3>
              <ul className="mt-4 space-y-2 text-[#245a9a]/90">
                <li>Greater clarity for foreign currency account structures</li>
                <li>Improved frameworks for capital repatriation</li>
                <li>Enhanced pathways for cross-border participation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#245a9a]/20 bg-[#f6f9ff] p-6">
              <h3 className="text-xl font-bold text-[#245a9a]">
                How to Start
              </h3>
              <ul className="mt-4 space-y-2 text-[#245a9a]/90">
                <li>Assess sector eligibility and operating structure</li>
                <li>Set up compliant registration and banking pathways</li>
                <li>Align with local partners and national priorities</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#245a9a]/20 bg-[#f6f9ff] p-6">
              <h3 className="text-xl font-bold text-[#245a9a]">
                Who You Meet at AfroChain
              </h3>
              <ul className="mt-4 space-y-2 text-[#245a9a]/90">
                <li>Policy stakeholders and financial institutions</li>
                <li>Fintech operators and infrastructure providers</li>
                <li>Startup founders, advisors, and VC representatives</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#245a9a]/25 bg-[#f6f9ff] p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#245a9a]/70 uppercase">
              Institutional Access Statement
            </p>
            <p className="mt-2 text-[#245a9a] font-medium">
              AfroChain provides structured access to policy, institutions, and
              execution partners in one platform.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#245a9a]/20 bg-white p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-[#245a9a]">
              Request Institutional Briefing
            </h3>
            <p className="mt-2 text-[#245a9a]/80">
              Submit your details to initiate an institutional briefing with the
              AfroChain team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-[#245a9a] mb-2"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      companyName: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#245a9a]/30 px-4 py-3 outline-none focus:border-[#245a9a]"
                />
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="block text-sm font-semibold text-[#245a9a] mb-2"
                >
                  Sector
                </label>
                <input
                  id="sector"
                  type="text"
                  required
                  value={form.sector}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, sector: event.target.value }))
                  }
                  className="w-full rounded-lg border border-[#245a9a]/30 px-4 py-3 outline-none focus:border-[#245a9a]"
                />
              </div>

              <div>
                <label
                  htmlFor="interestArea"
                  className="block text-sm font-semibold text-[#245a9a] mb-2"
                >
                  Interest Area
                </label>
                <input
                  id="interestArea"
                  type="text"
                  required
                  value={form.interestArea}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      interestArea: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#245a9a]/30 px-4 py-3 outline-none focus:border-[#245a9a]"
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-semibold text-[#245a9a] mb-2"
                >
                  Timeline
                </label>
                <input
                  id="timeline"
                  type="text"
                  required
                  value={form.timeline}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      timeline: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#245a9a]/30 px-4 py-3 outline-none focus:border-[#245a9a]"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#245a9a] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="w-full rounded-lg border border-[#245a9a]/30 px-4 py-3 outline-none focus:border-[#245a9a]"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-[#245a9a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678]"
                >
                  Request Institutional Briefing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
