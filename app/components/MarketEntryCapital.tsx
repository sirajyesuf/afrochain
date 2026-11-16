"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      "Investment Forum Briefing Request - AfroChain 2027",
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
      id="investment-forum"
      className="bg-white py-16 lg:py-24 scroll-mt-8"
      aria-labelledby="market-entry-capital-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="type-eyebrow text-muted-ink">
              AfroChain Investment Forum &middot; Dec 17&ndash;18, 2026
            </p>
            <h2
              id="market-entry-capital-title"
              className="type-h2 mt-3 text-brand-600"
            >
              Structured Access to Ethiopia&apos;s Evolving Digital Economy
            </h2>
            <p className="mt-5 type-lead text-body">
              The AfroChain Investment Forum is a dedicated institutional
              platform for international organizations exploring market entry,
              capital deployment, and strategic partnerships in Ethiopia.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-brand-600/30 bg-surface-1 px-4 py-2 text-center text-sm font-semibold text-brand-600 sm:rounded-full">
                Invitation or VIP Pass &middot; Addis Ababa, Ethiopia
              </p>
              <Link
                href="/#passes"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline decoration-[#245a9a]/30 underline-offset-4 transition-colors duration-200 hover:decoration-[#245a9a]"
              >
                Get VIP Pass
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-brand-600/20 bg-surface-1 p-6">
              <h3 className="type-h3 text-brand-600">Why Ethiopia</h3>
              <ul className="mt-4 space-y-2 text-body">
                <li>Africa&apos;s second most populous country</li>
                <li>Expanding digital infrastructure and innovation base</li>
                <li>National roadmap through Digital Ethiopia 2030</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-600/20 bg-surface-1 p-6">
              <h3 className="type-h3 text-brand-600">
                What&apos;s Changed
              </h3>
              <ul className="mt-4 space-y-2 text-body">
                <li>Greater clarity for foreign currency account structures</li>
                <li>Improved frameworks for capital repatriation</li>
                <li>Enhanced pathways for cross-border participation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-600/20 bg-surface-1 p-6">
              <h3 className="type-h3 text-brand-600">
                How to Start
              </h3>
              <ul className="mt-4 space-y-2 text-body">
                <li>Assess sector eligibility and operating structure</li>
                <li>Set up compliant registration and banking pathways</li>
                <li>Align with local partners and national priorities</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-600/20 bg-surface-1 p-6">
              <h3 className="type-h3 text-brand-600">
                Who You Meet at AfroChain
              </h3>
              <ul className="mt-4 space-y-2 text-body">
                <li>Policy stakeholders and financial institutions</li>
                <li>Fintech operators and infrastructure providers</li>
                <li>Startup founders, advisors, and VC representatives</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-600/25 bg-surface-1 p-5">
            <p className="type-eyebrow text-muted-ink">
              Institutional Access Statement
            </p>
            <p className="mt-2 text-brand-600 font-semibold">
              AfroChain provides structured access to policy, institutions, and
              execution partners in one platform.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-600/20 bg-white p-6 lg:p-8">
            <h3 className="type-h3 text-brand-600">
              Request an Investment Forum Briefing
            </h3>
            <p className="mt-2 text-body">
              Submit your details to initiate an institutional briefing with the
              AfroChain team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-brand-600 mb-2"
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
                  className="w-full rounded-lg border border-brand-600/30 px-4 py-3 outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="block text-sm font-semibold text-brand-600 mb-2"
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
                  className="w-full rounded-lg border border-brand-600/30 px-4 py-3 outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label
                  htmlFor="interestArea"
                  className="block text-sm font-semibold text-brand-600 mb-2"
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
                  className="w-full rounded-lg border border-brand-600/30 px-4 py-3 outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-semibold text-brand-600 mb-2"
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
                  className="w-full rounded-lg border border-brand-600/30 px-4 py-3 outline-none focus:border-brand-600"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-brand-600 mb-2"
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
                  className="w-full rounded-lg border border-brand-600/30 px-4 py-3 outline-none focus:border-brand-600"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
                >
                  Request an Investment Forum Briefing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
