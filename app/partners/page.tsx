import React from 'react';
import Header from '../components/Header';
import PartnersSponsorSection from '../components/Partners';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function PartnersPage() {
  return (
    <>
      <Header />
      {/* Hero Section for Partners Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="absolute top-1/2 left-1/2 w-screen h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/pizzaday2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🤝 Our Partners & Sponsors
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-6 max-w-2xl mx-auto">
            We are grateful for the support and collaboration of our partners and sponsors who make Afrochain possible. Discover the innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa. Explore their projects, connect, and get inspired!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg border-2 border-teal-600 transition-colors duration-200 text-base shadow"
            >
              Become a Partner
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
              alt="Kese Events Logo"
              width={80}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-yellow-400 rounded-lg p-[1px] bg-white"
            />
            <Image
              src="/afrochainwithwhitebg.png"
              alt="AfroChain Logo"
              width={80}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-yellow-400 rounded-lg p-[1px] bg-white"
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
