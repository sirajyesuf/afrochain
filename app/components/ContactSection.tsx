'use client';

import { Card, CardContent } from '@/components/ui/card';
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
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-white"></div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact our friendly team</h2>
            <p className="text-lg text-gray-600">Let us know how we can help.</p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chat to sales */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat to sales</h3>
                <p className="text-gray-600 mb-4">Speak to our friendly team.</p>
                <button
                  onClick={() => handleEmailClick("sales@afrochain.com")}
                  className="text-gray-900 font-medium hover:text-teal-600 transition-colors underline"
                >
                  sales@afrochain.com
                </button>
              </CardContent>
            </Card>

            {/* Chat to support */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat to support</h3>
                <p className="text-gray-600 mb-4">We're here to help.</p>
                <button
                  onClick={() => handleEmailClick("support@afrochain.com")}
                  className="text-gray-900 font-medium hover:text-teal-600 transition-colors underline"
                >
                  support@afrochain.com
                </button>
              </CardContent>
            </Card>

            {/* Visit us */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit us</h3>
                <p className="text-gray-600 mb-4">Visit our office HQ.</p>
                <button
                  onClick={handleMapClick}
                  className="text-gray-900 font-medium hover:text-teal-600 transition-colors underline"
                >
                  View on Google Maps
                </button>
              </CardContent>
            </Card>

            {/* Call us */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call us</h3>
                <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
                <button
                  onClick={() => handlePhoneClick("+251911234567")}
                  className="text-gray-900 font-medium hover:text-teal-600 transition-colors underline"
                >
                  +251 911 234 567
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 