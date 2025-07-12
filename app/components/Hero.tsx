import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/web31.png')`
             }}>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-amber-200 border-none">
        <div className="max-w-6xl">
          {/* Main Heading - Left Aligned */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Be part of the <span className="uppercase">LARGEST</span> Blockchain Program in <span className="text-teal-400">Ethiopia!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            <span className="font-semibold text-white">AFROCHAIN</span> is Ethiopia's largest blockchain education initiative centered around empowering students, developers, and startups with cutting-edge blockchain technology.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl uppercase tracking-wide">
            Pre-register Interest for 2025
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
