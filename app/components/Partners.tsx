"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/app/data/partners";

export default function PartnersSponsorSection() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-scroll {
          will-change: transform;
          backface-visibility: hidden;
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-[#245a9a]/80 tracking-wider uppercase">
            Afrochain 2026 Partners
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#245a9a] leading-tight">
            Partnering For Positive Change
          </h2>
          <p className="text-lg text-[#245a9a]/90 leading-relaxed max-w-2xl mx-auto">
            Empowering Potential Through Collaboration And Innovation. Join Us
            To Make A Positive Impact.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-scroll w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {partners.map((partner) => {
                const tile = (
                  <>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-10 lg:max-h-12"
                    />
                  </>
                );
                return partner.url ? (
                  <a
                    key={`${copy}-${partner.name}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={partner.name}
                    className="mx-3 lg:mx-4 flex items-center justify-center h-16 lg:h-20 w-36 lg:w-48 rounded-lg border border-[#245a9a]/15 bg-white hover:border-[#dbe900] hover:shadow-md transition-all duration-300"
                  >
                    {tile}
                  </a>
                ) : (
                  <div
                    key={`${copy}-${partner.name}`}
                    title={partner.name}
                    className="mx-3 lg:mx-4 flex items-center justify-center h-16 lg:h-20 w-36 lg:w-48 rounded-lg border border-[#245a9a]/15 bg-white"
                  >
                    {tile}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
