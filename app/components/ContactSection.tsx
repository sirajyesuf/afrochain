'use client';

import { MessageCircle, HelpCircle, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactSection() {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/African+Union+Conference+Center+Addis+Ababa+Ethiopia",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#245a9a] mb-4">Contact our friendly team</h2>
            <div className="w-16 h-1 bg-[#245a9a] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#245a9a]/80">Let us know how we can help.</p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chat to sales */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#245a9a]/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#245a9a]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#245a9a] mb-2">Chat to sales</h3>
              <p className="text-[#245a9a]/70 mb-4">Speak to our friendly team.</p>
              <button
                onClick={() => handleEmailClick("sales@afrochain.com")}
                className="text-[#245a9a] font-medium hover:text-[#245a9a]/70 transition-colors underline"
              >
                sales@afrochain.com
              </button>
            </div>

            {/* Chat to support */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#245a9a]/10 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-[#245a9a]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#245a9a] mb-2">Chat to support</h3>
              <p className="text-[#245a9a]/70 mb-4">We&apos;re here to help.</p>
              <button
                onClick={() => handleEmailClick("support@afrochain.com")}
                className="text-[#245a9a] font-medium hover:text-[#245a9a]/70 transition-colors underline"
              >
                support@afrochain.com
              </button>
            </div>

            {/* Visit us */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#245a9a]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#245a9a]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#245a9a] mb-2">Visit us</h3>
              <p className="text-[#245a9a]/70 mb-4">Visit our office HQ.</p>
              <button
                onClick={handleMapClick}
                className="text-[#245a9a] font-medium hover:text-[#245a9a]/70 transition-colors underline"
              >
                View on Google Maps
              </button>
            </div>

            {/* Call us */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#245a9a]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#245a9a]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#245a9a] mb-2">Call us</h3>
              <p className="text-[#245a9a]/70 mb-4">Mon-Fri from 8am to 5pm.</p>
              <button
                onClick={() => handlePhoneClick("+251911234567")}
                className="text-[#245a9a] font-medium hover:text-[#245a9a]/70 transition-colors underline"
              >
                +251 911 234 567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 