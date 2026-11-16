export default function Launchpad() {
  return (
    <div  className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="type-h2 text-brand-600">
                NextChain Ethiopia Launch
              </h2>
              <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-body leading-relaxed text-lg max-w-3xl mx-auto">
                AfroChain 2027 is also the official launchpad for NextChain Ethiopia, a year-round builder ecosystem tour across 15 universities, developer incubators, and policy hubs.
              </p>
              <p className="type-lead text-brand-600 font-semibold">
                You&apos;ll meet the next 10,000 builders right here.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center border-2 border-brand-600 rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">15</div>
                <div className="text-brand-600 font-semibold">Universities</div>
              </div>
              <div className="text-center border-2 border-brand-600 rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">3</div>
                <div className="text-brand-600 font-semibold">Startup Cohorts</div>
              </div>
              <div className="text-center border-2 border-brand-600 rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">4</div>
                <div className="text-brand-600 font-semibold">Hackathons</div>
              </div>
              <div className="text-center border-2 border-brand-600 rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-2">50+</div>
                <div className="text-brand-600 font-semibold">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 