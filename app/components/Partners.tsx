import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: "Tether",
    url: "https://tether.to",
    logo: "/tether.png",
  },
  {
    name: "Sorted Wallet",
    url: "https://sortedwallet.com",
    logo: "/sorted.png",
  },
  {
    name: "Project Catalyst",
    url: "https://projectcatalyst.io",
    logo: "/projectcatalyst.png",
  },
  {
    name: "MINT",
    url: "https://mint.gov.et",
    logo: "/mint.png",
  },
  {
    name: "Africa Blockchain Institute",
    url: "https://africablockchaininstitute.org",
    logo: "/africablockchain.png",
  },
];

export default function PartnersSponsorSection() {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Our Partners</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Partnering For Positive Change
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering Potential Through Collaboration And Innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">Join Us To Make A Positive Impact</p>
            </div>
          </div>

          {/* Right Partners Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Row 1 */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg">
                <div className="p-6 lg:p-8 flex items-center justify-center h-24 lg:h-32">
                  <Image src={partners[0]?.logo} alt={partners[0]?.name} width={100} height={60} className="object-contain max-h-16" />
                </div>
              </div>
              {/* Hover Link */}
              <a
                href={partners[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="group relative">
              <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg">
                <div className="p-6 lg:p-8 flex items-center justify-center h-24 lg:h-32">
                  <Image src={partners[4]?.logo} alt={partners[4]?.name} width={100} height={60} className="object-contain max-h-16" />
                </div>
              </div>
              {/* Hover Link */}
              <a
                href={partners[4]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Row 2 */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg">
                <div className="p-6 lg:p-8 flex items-center justify-center h-24 lg:h-32">
                  <Image src={partners[1]?.logo} alt={partners[1]?.name} width={100} height={60} className="object-contain max-h-16" />
                </div>
              </div>
              {/* Hover Link */}
              <a
                href={partners[1]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="group relative">
              <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg">
                <div className="p-6 lg:p-8 flex items-center justify-center h-24 lg:h-32">
                  <Image src={partners[2]?.logo} alt={partners[2]?.name} width={100} height={60} className="object-contain max-h-16" />
                </div>
              </div>
              {/* Hover Link */}
              <a
                href={partners[2]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Row 3 */}
            <div className="group relative">
              <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg">
                <div className="p-6 lg:p-8 flex items-center justify-center h-24 lg:h-32">
                  <Image src={partners[3]?.logo} alt={partners[3]?.name} width={100} height={60} className="object-contain max-h-16" />
                </div>
              </div>
              {/* Hover Link */}
              <a
                href={partners[3]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* More Coming Soon Card */}
            <div className="bg-white border-2 border-dashed border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 rounded-lg">
              <div className="p-6 lg:p-8 flex flex-col items-center justify-center h-24 lg:h-32 space-y-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="text-lg text-gray-400">+</div>
                </div>
                <div className="text-sm font-medium text-gray-500 text-center">More Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 