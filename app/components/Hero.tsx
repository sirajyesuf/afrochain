import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[75vh] flex items-center justify-start bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/web31.png')`
             }}>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Main Heading - Left Aligned */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-lg">
            Unlocking <span className="text-yellow-400">Africa&apos;s</span> On-Chain Future.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            August 30 and 31, 2025 | Addis Ababa, Ethiopia
          </p>

          <p className="text-md md:text-lg text-gray-300 font-light tracking-wide mt-4">
            Organized by Kese Events
          </p>

          <div className="mt-8">
            <Image
              src="/keseevents.png"
              alt="Kese Events and AfroChain 2025 Logos"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
