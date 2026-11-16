import Footer from "@/app/components/Footer";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibitors - AfroChain Summit 2027",
  description:
    "Exhibit at AfroChain Summit 2027 and showcase solutions in Blockchain, AI, and Finance to investors, institutions, and builders from across Africa.",
  keywords: [
    "AfroChain exhibitors",
    "AfroChain Summit 2027 exhibitors",
    "afrochain 2027",
    "road to afrochain summit 2027",
    "blockchain summit exhibitors",
    "ai summit exhibitors africa",
    "fintech summit exhibitors africa",
    "Web3 Africa exhibitors",
    "blockchain conference exhibitors",
    "Ethiopia blockchain exhibitors",
    "register as exhibitor",
  ],
  openGraph: {
    title: "Exhibitors - AfroChain Summit 2027",
    description:
      "Exhibit at AfroChain Summit 2027 and showcase solutions in Blockchain, AI, and Finance to investors and institutions across Africa.",
    images: ["/web31.png"],
  },
  twitter: {
    title: "Exhibitors - AfroChain Summit 2027",
    description:
      "Exhibit at AfroChain Summit 2027 and showcase solutions in Blockchain, AI, and Finance to investors and institutions across Africa.",
    images: ["/web31.png"],
  },
};

export default function ExhibitorsPage() {
  return (
    <>
      <main className="min-h-screen bg-ink-900 flex flex-col">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden"
          aria-label="Exhibitors Hero"
        >
          {/* Big Web3 Image */}
          <Image
            src="/web31.png"
            alt="Web3 Network - Blockchain Technology Network"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/70 to-brand-600/40 z-10" />
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24 mt-8">
            <h1 className="type-h1 text-white mb-6 drop-shadow-lg text-center">
              Meet the <span className="text-brand-100">Exhibitors</span> of
              AfroChain Summit 2027
            </h1>
            <p className="type-lead text-brand-100 max-w-2xl text-center mb-8">
              Discover the innovators, builders, and organizations shaping the
              future of Web3 and blockchain in Africa. Explore their projects,
              connect, and get inspired!
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="https://forms.gle/vrpvDxoufARBNnPLA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 hover:bg-brand-600/90 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-base shadow-md text-center"
              >
                REGISTER AS EXHIBITOR
              </a>
              <a
                href="/contactus"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-600 font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-base shadow-md text-center"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </section>
        {/* Exhibitor Benefit Section */}
        <section className="bg-white py-16" aria-label="Exhibitor Benefits">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="type-h2 text-brand-600 mb-2">
              Exhibitor Benefits
            </h2>
            <div className="w-16 h-1 bg-brand-600 rounded-full mb-6"></div>
            <p className="type-lead text-body mb-8">
              Exhibitors at{" "}
              <span className="font-bold text-brand-600">AfroChain Summit 2027</span>{" "}
              can showcase their products or services to a diverse audience of
              startups, investors, policymakers, and industry leaders from
              across Africa and beyond. Enjoy exclusive opportunities,
              visibility, and networking.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#245a9a"
                      strokeWidth="2"
                      fill="#fff"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#245a9a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base text-brand-600 font-semibold">
                  Showcase products or services to a diverse audience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#245a9a"
                      strokeWidth="2"
                      fill="#fff"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#245a9a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base text-brand-600 font-semibold">
                  Receive booth space, promotional opportunities, and access to
                  networking events.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#245a9a"
                      strokeWidth="2"
                      fill="#fff"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#245a9a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base text-brand-600 font-semibold">
                  Increase visibility and brand recognition within the tech
                  ecosystem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#245a9a"
                      strokeWidth="2"
                      fill="#fff"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#245a9a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base text-brand-600 font-semibold">
                  Connect with potential partners, customers, and investors.
                </span>
              </li>
            </ul>
          </div>
        </section>
        {/* Exhibitors List Placeholder */}
        <section className="flex-1 bg-white py-16" aria-label="Exhibitors List">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="type-h2 mb-4 text-brand-600">
              Exhibitors Coming Soon
            </h2>
            <p className="text-body">
              Stay tuned for the full list of AfroChain Summit 2027 exhibitors.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
