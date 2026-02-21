import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="AfroChain 2026 Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/web31.png"
          alt="Digital infrastructure and network visualization"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f56]/95 via-[#245a9a]/85 to-[#245a9a]/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28">
        <div className="max-w-5xl">
          <p className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.16em] text-white/95 uppercase">
            AfroChain 2026 | Addis Ababa, Ethiopia
          </p>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            Africa&apos;s Strategic Gateway for{" "}
            <span className="text-[#dbe900]">Blockchain, AI, and Finance</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide max-w-4xl">
            AfroChain 2026 is an independent platform connecting policymakers,
            infrastructure builders, investors, and global institutions to
            Ethiopia&apos;s next phase of digital and financial modernization.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#blockchain"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#245a9a] transition-colors duration-200"
            >
              Blockchain
            </a>
            <a
              href="#ai"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#245a9a] transition-colors duration-200"
            >
              Artificial Intelligence
            </a>
            <a
              href="#finance"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#245a9a] transition-colors duration-200"
            >
              Finance
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <a
              href="/contactus"
              className="bg-white text-[#245a9a] font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base border-2 border-white hover:bg-transparent hover:text-white"
              aria-label="Request market entry briefing"
            >
              Request Market Entry Briefing
            </a>
            <a
              href="https://forms.gle/vrpvDxoufARBNnPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base hover:bg-white hover:text-[#245a9a]"
              aria-label="Join AfroChain 2026"
            >
              Join AfroChain 2026
            </a>
            <a
              href="/partners"
              className="bg-transparent text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-sm sm:text-base hover:bg-white hover:text-[#245a9a]"
              aria-label="Partner with AfroChain"
            >
              Partner with AfroChain
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white">
              Government Vision
            </div>
            <div className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white">
              Private Sector Execution
            </div>
            <div className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white">
              Global Capital
            </div>
            <div className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white">
              African Innovation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
