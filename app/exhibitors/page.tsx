import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";

export default function ExhibitorsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black flex flex-col">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden">
          {/* Big Web3 Image */}
          <Image
            src="/web31.png"
            alt="Web3 Network"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-10" />
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg text-center">
              Meet the <span className="text-yellow-400">Exhibitors</span> of AfroChain 2025
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl text-center mb-8">
              Discover the innovators, builders, and organizations shaping the future of Web3 and blockchain in Africa. Explore their projects, connect, and get inspired!
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="https://forms.gle/TzdZAjkXtdkwZAMa8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-base shadow-md text-center"
              >
                REGISTER AS EXHIBITOR
              </a>
              <a
                href="/contactus"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-2 px-6 rounded-lg transition-colors duration-200 text-base shadow-md text-center"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </section>
        {/* Exhibitor Benefit Section */}
        <section className="bg-white py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="text-teal-700 font-semibold mb-2 text-sm uppercase tracking-wider">Get your company a visit</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-black">Exhibitor Benefit</h2>
                <p className="text-black text-lg leading-relaxed mb-2">
                  Exhibitors at <span className="font-bold">AfroChain 2025</span> have the opportunity to showcase their products or services to a diverse audience of startups, investors, policymakers, and industry leaders from across Africa and beyond. Depending on their chosen package, exhibitors may receive benefits such as booth space, promotional opportunities, and access to exclusive networking events. By participating in AfroChain 2025, exhibitors can increase their visibility, connect with potential partners or customers, and gain insights into emerging trends and opportunities within the Web3 and blockchain ecosystem.
                </p>
              </div>
              {/* Right: Benefits List */}
              <ul className="space-y-6 border-l border-gray-200 pl-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal-700">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#14b8a6" strokeWidth="2" fill="#fff"/><path d="M7 13l3 3 7-7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-black">Showcase products or services to a diverse audience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal-700">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#14b8a6" strokeWidth="2" fill="#fff"/><path d="M7 13l3 3 7-7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-black">Receive benefits like booth space, promotional opportunities, and access to networking events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal-700">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#14b8a6" strokeWidth="2" fill="#fff"/><path d="M7 13l3 3 7-7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-black">Increase visibility and brand recognition within the tech ecosystem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-teal-700">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#14b8a6" strokeWidth="2" fill="#fff"/><path d="M7 13l3 3 7-7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-black">Connect with potential partners, customers, and investors.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Exhibitors List Placeholder */}
        <section className="flex-1 bg-white py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Exhibitors Coming Soon</h2>
            <p className="text-gray-600">Stay tuned for the full list of AfroChain 2025 exhibitors.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 