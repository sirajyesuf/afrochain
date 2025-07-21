import React from 'react';
import Image from 'next/image';

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

const Showcase = () => {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What We&apos;ve Done So Far
            </h2>
            <p className="mt-4 text-xl text-slate-400">
              Fastest-growing crypto user base in East Africa
            </p>
            <h3 className="mt-12 text-2xl font-bold text-white">Confirmed Speakers</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <div key={speaker.name}>
                  {speaker.type === 'person' ? (
                    <>
                      <div className={`rounded-lg p-1 ${speaker.bgColor}`}>
                        <div className="relative h-60 w-full">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-white">{speaker.name}</h4>
                      <p className="text-sm text-slate-400">{speaker.title}</p>
                    </>
                  ) : (
                    <>
                      <div className="flex h-60 items-center justify-center rounded-lg border border-slate-300 bg-white p-6 text-center">
                        <div className="relative h-28 w-full">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-white">{speaker.name}</h4>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-lg">
            <p className="absolute top-4 left-4 z-10 text-xl font-bold text-white">Venue</p>
            <Image
              src="/spacescience.png"
              alt="Venue"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase; 