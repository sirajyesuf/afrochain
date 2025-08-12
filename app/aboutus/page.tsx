import Image from 'next/image';
import { Metadata } from 'next';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "About AfroChain Summit 2025",
  description: "Discover the mission, values, and impact of AfroChain Summit - Africa's boldest Web3 & Blockchain event. Learn about our organizers, Kese Events, and how we're shaping Africa's on-chain future.",
  keywords: [
    "AfroChain about",
    "blockchain summit mission",
    "Web3 Africa vision",
    "Kese Events",
    "Ethiopia blockchain",
    "Africa Web3 community"
  ],
  openGraph: {
    title: "About AfroChain Summit 2025",
    description: "Discover the mission, values, and impact of AfroChain Summit - Africa's boldest Web3 & Blockchain event.",
    images: ['/5.jpg'],
  },
  twitter: {
    title: "About AfroChain Summit 2025",
    description: "Discover the mission, values, and impact of AfroChain Summit - Africa's boldest Web3 & Blockchain event.",
    images: ['/5.jpg'],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      {/* Redesigned Full-Screen Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="About AfroChain Hero">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/5.jpg"
            alt="About AfroChain Summit - Africa's Web3 Blockchain Event"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#245a9a]/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between py-24">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">About AfroChain Summit</h1>
            <div className="w-16 h-1 bg-[#245a9a] rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-white font-light mb-8 max-w-xl">
              AfroChain Summit is Africa&apos;s boldest Web3 & Blockchain event, uniting pioneers, visionaries, and builders to shape the continent&apos;s on-chain future. Discover our mission, values, and the impact we&apos;re making across Africa and beyond.
            </p>
            <a
              href="/contactus"
              className="bg-[#245a9a] hover:bg-[#245a9a]/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 text-base"
            >
              Contact Us
            </a>
          </div>
          {/* Right side - Empty for image focus on large screens */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </section>
      <AboutUs />
      {/* Redesigned Organized By Section */}
      <section className="py-20 px-4 bg-white" aria-label="Organized By Section">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-none bg-white p-8 md:p-14 flex flex-col items-center border border-[#245a9a]/20">
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#245a9a]/10 rounded-full p-4 shadow mb-6">
              <Image
                src="/keseevents-logo.png"
                alt="Kese Events Logo - Event Management & Live Streaming"
                width={120}
                height={120}
                className="rounded-full object-contain"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#245a9a] mb-1 text-center">Organized by</h2>
            <div className="w-16 h-1 bg-[#245a9a] rounded-full mb-4"></div>
            <div className="text-3xl font-serif font-bold text-[#245a9a] mb-1 text-center tracking-widest uppercase">Kese Events</div>
            <div className="text-[#245a9a]/80 text-base mb-6 text-center">Event Management & Live Streaming</div>
          </div>
          <div className="w-full border-l-4 border-[#245a9a] bg-[#245a9a]/5 p-6 mt-2 text-[#245a9a]/90 text-lg shadow-inner">
            Kese Events is an event management, live streaming, and ticketing company based in Addis Ababa, Ethiopia. They focus on creating memorable and impactful events, both in-person and virtually. Kese Events has a platform (website and app) that allows for event streaming, ticketing, and more, specifically targeting the African audience and showcasing their culture and talent to a global audience.
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
} 