import React from "react";
import Image from "next/image";
import { partners } from "@/app/data/partners";

export default function PartnersGrid() {
  const legacyPartners = partners.filter((partner) => partner.year === "2025");

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <p className="type-eyebrow text-muted-ink">
            Afrochain 2025 Partners
          </p>
          <h2 className="type-h2 text-brand-600">
            Partnering For Positive Change
          </h2>
          <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
            Empowering Potential Through Collaboration And Innovation. Join Us
            To Make A Positive Impact.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {legacyPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="group flex flex-col items-center justify-center rounded-lg border border-brand-600/15 bg-white p-6 hover:border-brand-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center h-20 lg:h-24 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-14 lg:max-h-16"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-brand-600 text-center group-hover:text-body">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
