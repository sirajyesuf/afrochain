import React from "react";
import Header from "@/app/components/Header";
import PartnersGrid from "@/app/components/PartnersGrid";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { partners } from "@/app/data/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Sponsors - AfroChain Summit 2026",
  description:
    "Partner with AfroChain Summit 2026 and collaborate with organizations advancing Blockchain, AI, and Finance across Ethiopia and Africa.",
  keywords: [
    "AfroChain partners",
    "AfroChain Summit 2026 sponsors",
    "blockchain summit sponsors",
    "ai summit partners africa",
    "finance innovation partners africa",
    "Web3 Africa partners",
    "blockchain conference sponsors",
    "Ethiopia blockchain partners",
    "become a sponsor",
  ],
  openGraph: {
    title: "Partners & Sponsors - AfroChain Summit 2026",
    description:
      "Partner with AfroChain Summit 2026 and collaborate with organizations advancing Blockchain, AI, and Finance across Africa.",
    images: ["/keseevents-logo.png", "/afrochainwithwhitebg.png"],
  },
  twitter: {
    title: "Partners & Sponsors - AfroChain Summit 2026",
    description:
      "Partner with AfroChain Summit 2026 and collaborate with organizations advancing Blockchain, AI, and Finance across Africa.",
    images: ["/keseevents-logo.png", "/afrochainwithwhitebg.png"],
  },
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      {/* Hero Section for Partners Page */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#245a9a]"
        aria-label="Partners Hero"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#245a9a]/40"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg mt-8">
            🤝 Our Partners & Sponsors
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-6 max-w-2xl mx-auto">
            We are grateful for the support and collaboration of our partners
            and sponsors who make Afrochain possible. Discover the innovators,
            builders, and organizations shaping the future of Web3 and
            blockchain in Africa. Explore their projects, connect, and get
            inspired!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://forms.gle/vrpvDxoufARBNnPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#245a9a] hover:bg-[#245a9a]/90 text-white font-bold py-2 px-6 rounded-lg border-2 border-[#245a9a] transition-colors duration-200 text-base shadow"
            >
              Become a Partner or Sponsor
            </a>
            <a
              href="/contactus"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-2 px-6 rounded-lg border-2 border-white transition-colors duration-200 text-base shadow"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-10">
            <p className="text-sm font-semibold text-[#dbe900] tracking-wider uppercase mb-4">
              2026 Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {partners
                .filter((partner) => partner.year === "2026")
                .map((partner) => {
                  const tile = (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={40}
                      className="object-contain max-h-10"
                    />
                  );
                  return partner.url ? (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={partner.name}
                      className="group flex items-center justify-center w-24 h-14 rounded-lg bg-white p-2 shadow hover:shadow-lg hover:ring-2 hover:ring-[#dbe900] transition-all duration-300"
                    >
                      {tile}
                    </a>
                  ) : (
                    <div
                      key={partner.name}
                      title={partner.name}
                      className="group flex items-center justify-center w-24 h-14 rounded-lg bg-white p-2 shadow"
                    >
                      {tile}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      {/* Partners & Sponsors Section */}
      <PartnersGrid />
      <Footer />
    </>
  );
}
