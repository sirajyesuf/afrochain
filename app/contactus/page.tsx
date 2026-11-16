import Footer from '@/app/components/Footer';
import React from 'react';
import ContactSection from '@/app/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact AfroChain 2027",
  description:
    "Contact the AfroChain 2027 team for partnerships, speaking, exhibiting, and collaboration opportunities across Blockchain, AI, and Finance.",
  keywords: [
    "contact AfroChain",
    "afrochain 2027 contact",
    "road to afrochain summit 2027",
    "blockchain summit contact",
    "ai summit africa contact",
    "Web3 Africa contact",
    "Ethiopia blockchain event",
    "AfroChain partnership",
    "blockchain conference inquiry",
  ],
  openGraph: {
    title: "Contact AfroChain 2027",
    description:
      "Contact the AfroChain 2027 team for partnerships, speaking, exhibiting, and collaboration opportunities.",
  },
  twitter: {
    title: "Contact AfroChain 2027",
    description:
      "Contact the AfroChain 2027 team for partnerships, speaking, exhibiting, and collaboration opportunities.",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-brand-600 via-brand-600/90 to-brand-600/80" aria-label="Contact Hero">
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24">
            <h1 className="type-h1 text-white mb-6 text-center">
              Contact <span className="">AfroChain</span>
            </h1>
            <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
            <p className="type-lead text-white/90 max-w-2xl text-center mb-8">
              Have a question, partnership inquiry, or want to get involved? Reach out to the AfroChain team below.
            </p>
          </div>
        </section>
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
