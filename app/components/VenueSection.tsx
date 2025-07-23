"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Building, ExternalLink } from "lucide-react"

export default function VenueSection() {
  const handleMapClick = () => {
    window.open(
      "https://maps.app.goo.gl/NtfA1ZrZszkyU1eFA",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <div  className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">Venue</h2>
            <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/venue.png"
                    alt="Ethiopian Science Museum in Addis Ababa, Ethiopia"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black rounded-full opacity-30 animate-bounce delay-500"></div>
              </div>
            </div>

            {/* Right side - Details */}
            <div className="space-y-8">
              {/* Venue Details Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-black">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black uppercase tracking-wide">Event Dates</p>
                      <p className="text-xl font-bold text-black">August 30–31, 2025</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-black">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black uppercase tracking-wide">Venue</p>
                      <p className="text-xl font-bold text-black">Addis Ababa Science  Museum</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-black">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black uppercase tracking-wide">Location</p>
                      <p className="text-xl font-bold text-black">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="pt-4">
                <Button
                  onClick={handleMapClick}
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  View on Google Maps
                  <ExternalLink className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 