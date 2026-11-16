import React from "react";
import PartnersGrid from "@/app/components/PartnersGrid";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { partners } from "@/app/data/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Sponsors - AfroChain 2027",
  description:
    "Partner with AfroChain 2027 and collaborate with organizations advancing Blockchain, AI, and Finance across Ethiopia and Africa.",
  keywords: [
    "AfroChain partners",
    "AfroChain 2027 sponsors",
    "afrochain 2027",
    "road to afrochain summit 2027",
    "blockchain summit sponsors",
    "ai summit partners africa",
    "finance innovation partners africa",
    "Web3 Africa partners",
    "blockchain conference sponsors",
    "Ethiopia blockchain partners",
    "become a sponsor",
  ],
  openGraph: {
    title: "Partners & Sponsors - AfroChain 2027",
    description:
      "Partner with AfroChain 2027 and collaborate with organizations advancing Blockchain, AI, and Finance across Africa.",
    images: ["/keseevents-logo.png", "/afrochainwithwhitebg.png"],
  },
  twitter: {
    title: "Partners & Sponsors - AfroChain 2027",
    description:
      "Partner with AfroChain 2027 and collaborate with organizations advancing Blockchain, AI, and Finance across Africa.",
    images: ["/keseevents-logo.png", "/afrochainwithwhitebg.png"],
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section for Partners Page */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-600"
        aria-label="Partners Hero"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/70 to-brand-600/40"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="type-h1 text-white mb-4 drop-shadow-lg mt-8">
            🤝 Our Partners & Sponsors
          </h1>
          <p className="text-lg md:text-xl text-brand-100 font-normal mb-6 max-w-2xl mx-auto">
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
              className="bg-brand-600 hover:bg-brand-600/90 text-white font-bold py-2 px-6 rounded-lg border-2 border-brand-600 transition-colors duration-200 text-base shadow"
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
            <p className="type-eyebrow text-brand-100 mb-4">
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
                      className="group flex items-center justify-center w-24 h-14 rounded-lg bg-white p-2 shadow hover:shadow-lg hover:ring-2 hover:ring-brand-100 transition-all duration-300"
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
