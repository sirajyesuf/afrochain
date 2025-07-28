"use client"
import Image from "next/image"

const speakers = [
  {
    type: 'person',
    name: 'Dr. Leon Rebelsky',
    title: 'Market Trading, Crypto Development',
    image: '/drleonrebelsky.png',
    bgColor: 'bg-gradient-to-b from-yellow-300 to-lime-300',
  },
  {
    type: 'person',
    name: 'Mery Avestisyan',
    title: 'Global Business Development',
    image: '/mery.png',
    bgColor: 'bg-gradient-to-b from-yellow-300 to-lime-300',
  },
  {
    type: 'organization',
    name: 'Africa Blockchain Institute',
    image: '/africablockchain.png',
  },
  {
    type: 'organization',
    name: 'Ethiopian Blockchain Network',
    image: '/ethiopianblockchain.png',
  },
  {
    type: 'person',
    name: 'Kanessa Muluneh',
    title: 'Head of Coerman-Muluneh Family Office',
    image: '/kanessa.png',
    bgColor: 'bg-gradient-to-b from-yellow-300 to-lime-300',
  },
  {
    type: 'organization',
    name: 'MInT',
    image: '/mint.png',
  },
  {
    type: 'organization',
    name: 'Project Catalyst',
    image: '/projectcatalyst.png',
  },
];

export default function SpeakersSection() {
  return (
    <div id="speakers" className="bg-white py-16 lg:py-24">
      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 10s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`}</style>
      <div className="container mx-auto px-4">
        {/* Topics Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm text-[#245a9a] mb-4">— Topics Covered In 2025.</p>

          {/* Horizontal Scrolling Topics */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center space-x-8 text-4xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-gray-300">ng.</span>
                <span className="text-[#245a9a]">Web3.</span>
                <span className="text-[#245a9a]">Blockchain.</span>
                <span className="text-[#245a9a]">DeFi.</span>
                <span className="text-[#245a9a]">NFTs.</span>
                <span className="text-[#245a9a]">Innovation.</span>
                <span className="text-[#245a9a]">Fintech.</span>
                <span className="text-[#245a9a]">Smart Contracts.</span>
                <span className="text-[#245a9a]">Sustainability.</span>
                <span className="text-[#245a9a]">Digital Identity.</span>
                <span className="text-gray-300">ng.</span>
                <span className="text-[#245a9a]">Web3.</span>
                <span className="text-[#245a9a]">Blockchain.</span>
                <span className="text-[#245a9a]">DeFi.</span>
                <span className="text-[#245a9a]">NFTs.</span>
                <span className="text-[#245a9a]">Innovation.</span>
                <span className="text-[#245a9a]">Fintech.</span>
                <span className="text-[#245a9a]">Smart Contracts.</span>
                <span className="text-[#245a9a]">Sustainability.</span>
                <span className="text-[#245a9a]">Digital Identity.</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#245a9a] font-medium">
            — Network With Game-Changers And Thought Leaders At AfroChain 2025.
          </p>
        </div>

        {/* Featured Speakers */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#245a9a] mb-12">Featured Speakers of 2025</h2>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <div key={index}>
              {speaker.type === 'person' ? (
                <>
                  <div className="flex h-60 items-center justify-center rounded-lg border border-[#245a9a] bg-white p-4 text-center hover:border-[#245a9a]/80 transition-colors duration-300">
                    <div className="relative h-56 w-full">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="rounded-md object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-[#245a9a]">{speaker.name}</h4>
                  <p className="text-sm text-[#245a9a]/80">{speaker.title}</p>
                </>
              ) : (
                <>
                  <div className="flex h-60 items-center justify-center rounded-lg border border-[#245a9a] bg-white p-6 text-center hover:border-[#245a9a]/80 transition-colors duration-300">
                    <div className="relative h-56 w-full">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="rounded-md object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-[#245a9a]">{speaker.name}</h4>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 