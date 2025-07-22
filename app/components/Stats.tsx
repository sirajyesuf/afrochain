import React from 'react';
import { Building2, GraduationCap, Users } from 'lucide-react';



// const oldStats = [
//   { name: 'Participants', value: '1,200+' },
//   { name: 'Companies', value: '300+' },
//   { name: 'Countries Represented', value: '25' },
//   { name: 'Speakers', value: '150+' },
// ];

const newStats = [
  { name: 'Institutes', value: '10', icon: Building2 },
  { name: 'Universities', value: '15', icon: GraduationCap },
  { name: 'Attendees', value: '2000', icon: Users },
];

const Stats = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our <span className="text-blue-600">Impact</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We are on a mission to empower the next generation of African innovators.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-3">
              {newStats.map((stat) => (
                <div key={stat.name} className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-500/10 p-4">
                    <stat.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
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