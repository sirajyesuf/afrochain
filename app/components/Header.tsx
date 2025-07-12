'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#program', hasDropdown: true },
    { name: 'Attendee', href: '#audience', hasDropdown: true },
    { name: 'Partners', href: '#partners', hasDropdown: true },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className={`absolute w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              {/* Date Badge */}
              <div className="text-white text-center">
                <div className="text-2xl font-bold leading-none">30</div>
                <div className="text-2xl font-bold leading-none">31</div>
                <div className="text-xs uppercase tracking-wide">AUG</div>
                <div className="text-xs">2025</div>
              </div>
              
              {/* Logo and Title */}
              <div>
                <h1 className="text-white text-2xl font-bold">
                  AFROCHAIN
                </h1>
                <div className="text-white text-sm opacity-90">
                  ADDIS ABABA, ETHIOPIA
                </div>
              </div>
              
              {/* Partner Logo Placeholder */}
              <div className="text-white text-xs opacity-75 ml-4">
                NEXTCHAIN<br/>
                ETHIOPIA
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-white hover:text-teal-300 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </div>
            ))}
            
            {/* CTA Button */}
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300">
              Pre-register Interest
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white text-sm font-medium hover:text-teal-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-300 mt-4">
                Pre-register Interest
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;