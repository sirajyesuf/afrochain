import React from 'react';
import Image from 'next/image';

const Hackathon = () => {
  return (
    <section  className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🚀 AfroChain Hackathon 2025
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 100+ developers in building the future of Web3 and blockchain solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Stats */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 text-center relative overflow-hidden border-2 border-gray-200 shadow-lg">
              {/* Background Pattern */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gray-100 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-50 rounded-full"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="text-6xl mb-4">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">100+ Developers</h3>
                  <p className="text-gray-600">Building the future of Web3</p>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-4">300K+ ETB</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">In Prizes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">48h</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Build Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Build Bold. Build On-Chain.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The AfroChain Hackathon, in collaboration with Xerxis Web3 Devs and our strategic partners, brings
                together 100+ developers to create innovative blockchain solutions. Participants will leverage
                cutting-edge tools like Lisk and Cardano to build the next generation of decentralized applications.
                Join us for an intensive development experience featuring substantial prizes, expert mentorship, and
                unparalleled visibility in the Web3 ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://forms.gle/JyExpoRFWumUkzWW9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-black text-black hover:text-gray-600 hover:border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-transparent flex items-center justify-center"
                >
                  Register to Build
                  <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="mailto:sponsor@afrochain.com?subject=Hackathon Sponsorship Inquiry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-black text-black hover:text-gray-600 hover:border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-transparent flex items-center justify-center"
                >
                  Sponsor the Hackathon
                  <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Powered by:</h4>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <Image
                    src="/lisk.png"
                    alt="Lisk"
                    width={80}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <Image
                    src="/cardano.png"
                    alt="Cardano"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <Image
                    src="/xerxist.png"
                    alt="Xerxis Web3"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon; 