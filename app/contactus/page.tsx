import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black flex flex-col">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src="/web31.png"
            alt="Contact AfroChain"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-10" />
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg text-center">
              Contact <span className="text-yellow-400">AfroChain</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl text-center mb-8">
              Have a question, partnership inquiry, or want to get involved? Reach out to the AfroChain team below.
            </p>
          </div>
        </section>
        {/* Contact Section with Cards */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
