import React from 'react';

// --- Icon components ---
const BullseyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v3.375m-3.375-3.375h3.375m-3.375 0V6.375m3.375 3.375h3.375m-3.375 0h-3.375m3.375 0v3.375m-3.375-3.375H6.375m3.375 0v3.375m3.375-3.375v3.375m0-3.375h3.375M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const CurrencyDollarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BuildingLibraryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c-.318.054-.636.098-.957.133A9.006 9.006 0 014.5 12c0-1.657.44-3.223 1.218-4.572A9.036 9.036 0 0112 4.5c1.657 0 3.223.44 4.572 1.218a9.036 9.036 0 017.218 7.218c.261.64.445 1.304.588 1.987M15 11.25a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


// const oldStats = [
//   { name: 'Participants', value: '1,200+' },
//   { name: 'Companies', value: '300+' },
//   { name: 'Countries Represented', value: '25' },
//   { name: 'Speakers', value: '150+' },
// ];

const newStats = [
  { name: 'Target', value: '$40,000', icon: BullseyeIcon },
  { name: 'Raised', value: '$15,000', icon: CurrencyDollarIcon },
  { name: 'Needed', value: '$25,000', icon: CurrencyDollarIcon },
  { name: 'Institutes', value: '10+', icon: BuildingLibraryIcon },
  { name: 'Attendees', value: '2000+', icon: UsersIcon },
];

const Stats = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Funding and <span className="text-yellow-500">Impact</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We are on a mission to empower the next generation of African innovators.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-5">
              {newStats.map((stat) => (
                <div key={stat.name} className="flex flex-col items-center">
                  <div className="rounded-full bg-yellow-500/10 p-4">
                    <stat.icon className="h-8 w-8 text-yellow-500" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Event Statistics
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {oldStats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div> */}
    </>
  );
};

export default Stats; 