import React from 'react';
import Header from '@/app/components/Header';
import PartnersSponsorSection from '@/app/components/Partners';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Partners & Sponsors - AfroChain Summit 2025",
  description: "Discover our partners and sponsors who make AfroChain possible. Connect with innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa. Become a partner today!",
  keywords: [
    "AfroChain partners",
    "blockchain summit sponsors",
    "Web3 Africa partners",
    "blockchain conference sponsors",
    "Ethiopia blockchain partners",
    "become a sponsor"
  ],
  openGraph: {
    title: "Partners & Sponsors - AfroChain Summit 2025",
    description: "Discover our partners and sponsors who make AfroChain possible. Connect with innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa.",
    images: ['/keseevents-logo.png', '/afrochainwithwhitebg.png'],
  },
  twitter: {
    title: "Partners & Sponsors - AfroChain Summit 2025",
    description: "Discover our partners and sponsors who make AfroChain possible. Connect with innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa.",
    images: ['/keseevents-logo.png', '/afrochainwithwhitebg.png'],
  },
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      {/* Hero Section for Partners Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#245a9a]" aria-label="Partners Hero">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#245a9a]/40"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg mt-8">
            🤝 Our Partners & Sponsors
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-6 max-w-2xl mx-auto">
            We are grateful for the support and collaboration of our partners and sponsors who make Afrochain possible. Discover the innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa. Explore their projects, connect, and get inspired!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://forms.gle/yxBFYDFu6tMWGQvC9"
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
          <div className="flex flex-row items-center justify-center gap-6 mt-8">
            <Image
              src="/keseevents-logo.png"
              alt="Kese Events Logo - Event Management & Live Streaming"
              width={80}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#245a9a] rounded-lg p-[1px] bg-white"
            />
            <Image
              src="/afrochainwithwhitebg.png"
              alt="AfroChain Logo - Africa's Web3 Blockchain Summit"
              width={80}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#245a9a] rounded-lg p-[1px] bg-white"
            />
          </div>
        </div>
      </section>
      {/* Partners & Sponsors Section */}
      <PartnersSponsorSection />
      <Footer />
    </>
  );
}
