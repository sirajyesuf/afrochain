import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import ContactSection from '../components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact AfroChain Summit 2025",
  description: "Get in touch with the AfroChain team. Have questions about the summit, partnership inquiries, or want to get involved? Contact us today for Africa's boldest Web3 & Blockchain event.",
  keywords: [
    "contact AfroChain",
    "blockchain summit contact",
    "Web3 Africa contact",
    "Ethiopia blockchain event",
    "AfroChain partnership",
    "blockchain conference inquiry"
  ],
  openGraph: {
    title: "Contact AfroChain Summit 2025",
    description: "Get in touch with the AfroChain team. Have questions about the summit, partnership inquiries, or want to get involved?",
  },
  twitter: {
    title: "Contact AfroChain Summit 2025",
    description: "Get in touch with the AfroChain team. Have questions about the summit, partnership inquiries, or want to get involved?",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#245a9a] via-[#245a9a]/90 to-[#245a9a]/80" aria-label="Contact Hero">
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              Contact <span className="">AfroChain</span>
            </h1>
            <div className="w-16 h-1 bg-yellow-300 rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl text-center mb-8">
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
