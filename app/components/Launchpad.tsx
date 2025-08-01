export default function Launchpad() {
  return (
    <div  className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#245a9a]">
                NextChain Ethiopia Launch
              </h2>
              <div className="w-24 h-1 bg-[#245a9a] mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-[#245a9a]/90 leading-relaxed text-lg max-w-3xl mx-auto">
                AfroChain 2025 is also the official launchpad for NextChain Ethiopia, a year-round builder ecosystem tour across 15 universities, developer incubators, and policy hubs.
              </p>
              <p className="text-[#245a9a] leading-relaxed text-lg font-semibold">
                You&apos;ll meet the next 10,000 builders right here.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center border-2 border-[#245a9a] rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#245a9a] mb-2">15</div>
                <div className="text-[#245a9a] font-medium">Universities</div>
              </div>
              <div className="text-center border-2 border-[#245a9a] rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#245a9a] mb-2">3</div>
                <div className="text-[#245a9a] font-medium">Startup Cohorts</div>
              </div>
              <div className="text-center border-2 border-[#245a9a] rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#245a9a] mb-2">4</div>
                <div className="text-[#245a9a] font-medium">Hackathons</div>
              </div>
              <div className="text-center border-2 border-[#245a9a] rounded-xl p-6 bg-white shadow-sm w-32 h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#245a9a] mb-2">50+</div>
                <div className="text-[#245a9a] font-medium">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 