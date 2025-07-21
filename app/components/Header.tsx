'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const navigation = [
    { name: 'About Us', href: '/aboutus' },
    {
      name: 'Programs',
      hasDropdown: true,
      submenu: [
        { name: 'Hackathon', href: '#hackathon' },
        { name: 'Launchpad', href: '#launchpad' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Venue', href: '#venue' },
      ]
    },
    {
      name: 'Partners',
      hasDropdown: true,
      submenu: [
        { name: 'Partners & Sponsors', href: '/partners' },
        { name: 'Exhibitors', href: '/exhibitors' },
      ]
    },
    { name: 'Contact us', href: '/contactus' },
  ];

  // Helper to render submenu links for Programs
  const renderProgramLink = (sub: { name: string; href: string }) => {
    // If on homepage, use anchor; else, use Link to homepage with hash
    if (pathname === '/' || pathname === '') {
      return (
        <a href={sub.href} className="w-full">{sub.name}</a>
      );
    } else {
      return (
        <Link href={`/#${String(sub.href).replace('#', '')}`} scroll={true} className="w-full">{sub.name}</Link>
      );
    }
  };

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
              <Link href="/" scroll={true} className="flex flex-col items-start focus:outline-none">
                <h1 className="text-white text-2xl font-bold">
                  AFROCHAIN
                </h1>
                <div className="text-white text-sm opacity-90">
                  ADDIS ABABA, ETHIOPIA
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.hasDropdown && item.submenu) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <span className="text-white hover:text-teal-300 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer">
                        {item.name}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.name === 'Programs'
                        ? item.submenu.map((sub) => (
                            <DropdownMenuItem asChild key={sub.name}>
                              {renderProgramLink(sub)}
                            </DropdownMenuItem>
                          ))
                        : item.submenu.map((sub) => (
                            <DropdownMenuItem asChild key={sub.name}>
                              <Link href={sub.href} scroll={true} className="w-full">{sub.name}</Link>
                            </DropdownMenuItem>
                          ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href || '/'}
                      scroll={true}
                      className="text-white hover:text-teal-300 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.name}
                    </Link>
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
                  if (item.hasDropdown && item.submenu) {
                    return (
                      <DropdownMenu key={item.name}>
                        <DropdownMenuTrigger asChild>
                          <span className="block px-3 py-4 text-white text-lg font-semibold text-center hover:text-teal-300 transition-colors duration-300 rounded cursor-pointer">
                            {item.name}
                            <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          {item.name === 'Programs'
                            ? item.submenu.map((sub) => (
                                <DropdownMenuItem asChild key={sub.name}>
                                  {renderProgramLink(sub)}
                                </DropdownMenuItem>
                              ))
                            : item.submenu.map((sub) => (
                                <DropdownMenuItem asChild key={sub.name}>
                                  <Link href={sub.href || ''} scroll={true} className="w-full">{sub.name}</Link>
                                </DropdownMenuItem>
                              ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  } else {
                    return (
                      <div key={item.name} className="w-full">
                        <Link
                          href={item.href || '/'}
                          scroll={true}
                          className="block px-3 py-4 text-white text-lg font-semibold text-center hover:text-teal-300 transition-colors duration-300 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
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