'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#program', hasDropdown: true },
    { name: 'Attendee', href: '#audience', hasDropdown: true },
    { 
      name: 'Partners', 
      href: '#partners', 
      hasDropdown: true,
      submenu: [
        { name: 'Partners & Sponsors', href: '#partners' },
        { name: 'Exhibitors', href: '#exhibitors' },
      ]
    },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className="absolute w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              {/* Date Badge */}
              <div className="text-white text-center" suppressHydrationWarning>
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
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.name === 'Partners') {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <a
                        href={item.href}
                        className="text-white hover:text-teal-300 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer"
                      >
                        {item.name}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuItem asChild>
                        <a href="#partners" className="w-full">Partners & Sponsors</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#exhibitors" className="w-full">Exhibitors</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else {
                return (
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
                );
              }
            })}
            
            {/* CTA Button */}
            <a 
              href="https://forms.gle/Z1ppaNhjXZWVsqTT8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300"
            >
              Register for Event
            </a>
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
            <div className="fixed inset-0 z-50 bg-black/80 flex flex-col justify-center items-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white p-2 z-50"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
              <div className="w-full max-w-xs mx-auto px-4 py-8 space-y-4">
                {navigation.map((item) => {
                  if (item.name === 'Partners') {
                    return (
                      <DropdownMenu key={item.name}>
                        <DropdownMenuTrigger asChild>
                          <a
                            href={item.href}
                            className="block px-3 py-4 text-white text-lg font-semibold text-center hover:text-teal-300 transition-colors duration-300 rounded cursor-pointer"
                          >
                            {item.name}
                          </a>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          <DropdownMenuItem asChild>
                            <a href="#partners" className="w-full">Partners & Sponsors</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <a href="#exhibitors" className="w-full">Exhibitors</a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  } else {
                    return (
                      <div key={item.name} className="w-full">
                        <a
                          href={item.href}
                          className="block px-3 py-4 text-white text-lg font-semibold text-center hover:text-teal-300 transition-colors duration-300 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  }
                })}
                <a 
                  href="https://forms.gle/Z1ppaNhjXZWVsqTT8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-full text-lg font-bold transition-colors duration-300 mt-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register for Event
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;