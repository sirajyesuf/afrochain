'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  // Video URLs from uploadthing
  const videoUrls = [
    'https://muyc54jxq7.ufs.sh/f/dSfsdchAUJ4pxnWGxmQSYdZWIlTk4D9uAsXHMO6hy5Nng8BR',
    'https://muyc54jxq7.ufs.sh/f/dSfsdchAUJ4prw5nmxTPKVGmvRrXaC4HeNUSkAEOIDb5zTYh',
    'https://muyc54jxq7.ufs.sh/f/dSfsdchAUJ4pygdpS9OVn1ChkmXY5LBt3Du7oT2e9izwcMRA'
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Change video every 10 seconds
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
        setIsTransitioning(false);
      }, 500); // Fade transition duration
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videoUrls.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Video container with transition effect */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <video
            key={currentVideoIndex}
            className="absolute top-1/2 left-1/2 w-screen h-full object-cover -translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Video indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {videoUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentVideoIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
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
                href="https://forms.gle/yxBFYDFu6tMWGQvC9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base"
              >
                Become a Sponsor
              </a>
              <a 
                href="#" 
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
            <div className="flex flex-row items-center gap-6 rounded-lg p-4">
              {[
                { src: "/keseevents-logo.png", alt: "Kese Events" },
                { src: "/afrochainwithwhitebg.png", alt: "AfroChain 2025" },
                { src: "/tether.png", alt: "Tether USDT" },
                { src: "/sorted.png", alt: "Sorted Wallet" },
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className="w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow border border-gray-200"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="object-contain max-h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
