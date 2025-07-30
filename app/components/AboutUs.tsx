import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {/* Top Left - Conference presentation */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/1.JPG"
                alt="Conference presentation with speaker presenting to audience"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right - Group photo */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/2.JPG"
                alt="Professional group photo of attendees at business event"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Left - Exhibition booth */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/3.JPG"
                alt="Technology exhibition booth with interactive displays"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Right - Networking session */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/4.JPG"
                alt="Business networking session with professionals discussing"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Speaker presentation */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/5.JPG"
                alt="Professional speaker presenting at podium with microphone"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right - Innovation showcase */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/5.jpg"
                alt="Innovation showcase with entrepreneurs presenting their ideas"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-[#245a9a] font-medium">Where Collaboration Transforms Vision into Reality.</p>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#245a9a] leading-tight">About AfroChain</h1>
              <div className="w-16 h-0.5 bg-[#245a9a] mb-2"></div>
            </div>

            <div className="space-y-6">
              <p className="text-[#245a9a]/90 leading-relaxed text-lg">
                AfroChain 2025 is Ethiopia&apos;s flagship blockchain summit — a two-day experience blending tech, culture, policy, and community. Powered by Kese Events and supported by leading partners, AfroChain brings together builders, dreamers, and doers shaping the decentralized future of Africa.
              </p>
              <p className="text-[#245a9a]/90 leading-relaxed text-lg">
                Whether you&apos;re a developer, founder, policymaker, investor, or creator — 
                <span className="font-bold text-[#245a9a]">this is where Africa builds on-chain.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#245a9a] hover:bg-[#245a9a]/90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-base">
                  Become A Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
