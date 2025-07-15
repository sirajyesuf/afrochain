import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const videoId = 'CqY8zQGjqUM';

  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
          style={{ minWidth: '177.77vh', minHeight: '100vw' }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Hero Video Background"
        ></iframe>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
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

          <div className="mt-8 flex flex-row items-center justify-center gap-4 rounded-lg p-4">
            <Image
              src="/keseevents-logo.png"
              alt="Kese Events and AfroChain 2025 Logos"
              width={100}
              height={100}
            />

            <Image
              src="/AfrochainLogo.png"
              alt="AfroChain 2025 Logo"
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
