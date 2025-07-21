import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="absolute top-1/2 left-1/2 w-screen h-full object-cover -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/pizzaday2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay for better text readability - stronger on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>



      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-none border-red-500">
          {/* Left side - Text content */}
          <div className="text-left order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg">
              🌍 Africa&apos;s Boldest <span className="text-yellow-400">Web3 & Blockchain</span> Summit.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide mb-6 sm:mb-8 max-w-5xl">
              Join the pioneers building Africa&apos;s on-chain future. Two days of hackathons, keynotes, music, partnerships & bold ideas — right from the heart of Ethiopia.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="https://forms.gle/Z1ppaNhjXZWVsqTT8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base"
              >
                Register for Event
              </a>
              <a 
                href="https://forms.gle/Z1ppaNhjXZWVsqTT8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base"
              >
                Become a Sponsor
              </a>
              <a 
                href="https://forms.gle/Z1ppaNhjXZWVsqTT8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base"
              >
                Apply to Speak
              </a>
            </div>
          </div>

          {/* Right side - Logos */}
          <div className="flex flex-col items-start justify-start lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="flex flex-row items-center gap-2 sm:gap-6 rounded-lg p-4">
              <Image
                src="/keseevents-logo.png"
                alt="Kese Events and AfroChain 2025 Logos"
                width={100}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-yellow-400 rounded-lg p-[1px]"
              />

              <Image
                src="/afrochainwithwhitebg.png"
                alt="AfroChain 2025 Logo"
                width={100}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-yellow-400 rounded-lg p-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
