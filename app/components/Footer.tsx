"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, Facebook, Linkedin, Twitter, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#014dbd] border-none  font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link href="/">
                <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
                  AfroChain
                </h3>
              </Link>
              <p className="text-white text-base leading-relaxed max-w-md font-medium">
                The premier blockchain and Web3 conference in East Africa,
                bringing together innovators, developers, and thought leaders to
                shape the future of decentralized technology.
              </p>
            </div>
            {/* Contact Info */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-base text-white font-semibold">
                  afrochaineth@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-base text-white font-semibold">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aboutus"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#speakers"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/#venue"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Venue
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#hackathon"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Hackathon
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibitors"
                  className="text-base text-white font-medium hover:underline focus:underline transition"
                >
                  Exhibitors
                </Link>
              </li>
            </ul>
          </div>
          {/* Social & Legal */}
          <div>
            <h4 className="text-xl font-bold text-white mb-5">Connect</h4>
            <div className="flex gap-4 mt-2 mb-8">
              <a
                href="https://t.me/afrochaineth2025"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578206168052&mibextid=ZbWKwL"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/afrochain-eth-91671b375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOTY3jDx0SPy0UeVmzzftNg%3D%3D"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Afrochaineth"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-white font-medium">
              © {currentYear} AfroChain. All rights reserved.
            </p>
            <p className="text-base text-white font-medium">
              Made with ❤️ in Ethiopia
            </p>
          </div>
        </div>
      </div>
      {/* White gradient divider above footer */}
      <div className="w-full h-4 bg-gradient-to-t from-[#014bd] to-white/0"></div>
    </footer>
  );
}
