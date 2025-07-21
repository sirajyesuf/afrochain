"use client"

import { useState, useEffect } from "react"
import { Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2025")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <h3 className="text-2xl font-bold text-black mb-2">AfroChain</h3>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                The premier blockchain and Web3 conference in East Africa, bringing together innovators, 
                developers, and thought leaders to shape the future of decentralized technology.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">info@afrochain.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/aboutus" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#speakers" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/#venue" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Venue
                </a>
              </li>
              <li>
                <a href="/partners" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Partners
                </a>
              </li>
              <li>
                <a href="/#hackathon" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Hackathon
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="/exhibitors" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                  Exhibitors
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/afrochaineth2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center"
                >
                  Telegram
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61578206168052&mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center"
                >
                  Facebook
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/afrochain-eth-91671b375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOTY3jDx0SPy0UeVmzzftNg%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Afrochaineth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center"
                >
                  X (Twitter)
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <a href="/privacy" className="text-xs text-gray-500 hover:text-black transition-colors duration-200 block">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-gray-500 hover:text-black transition-colors duration-200 block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} AfroChain. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Made with ❤️ in Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 