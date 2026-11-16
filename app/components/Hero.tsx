import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PROGRAM } from "@/app/data/events";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="AfroChain 2027 Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&h=1080&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-brand-600/85 to-brand-600/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-36">
        <div className="max-w-5xl">
          <p className="inline-flex max-w-full items-center rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.16em] text-white/95 uppercase sm:rounded-full">
            {PROGRAM.edition}
            <span className="hidden sm:inline">
              {" "}| 4 Events | Addis Ababa &amp; Kenya
            </span>
          </p>

          <h1 className="type-h1 mt-6 text-white drop-shadow-lg">
            Africa&apos;s Strategic Gateway for{" "}
            <span className="text-brand-100">Blockchain, AI, and Finance</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-normal tracking-wide max-w-4xl">
            The Road to AfroChain Summit 2027 is a four-event programme
            connecting policymakers, infrastructure builders, investors, and
            global institutions to Ethiopia&apos;s next phase of digital and
            financial modernization.
          </p>

          <p className="mt-4 text-sm sm:text-base font-semibold tracking-[0.12em] text-brand-100 uppercase">
            {PROGRAM.strapline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#blockchain"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-brand-600 transition-colors duration-200"
            >
            AI
            </a>
            <a
              href="#ai"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-brand-600 transition-colors duration-200"
            >
              Blockchain
            </a>
            <a
              href="#finance"
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-brand-600 transition-colors duration-200"
            >
              Finance
            </a>
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-start sm:gap-3">
            <Link
              href="#partnership-opportunities"
              className="bg-transparent text-white font-bold py-2.5 px-5 rounded-lg border-2 border-white transition-colors duration-200 text-sm hover:bg-white hover:text-brand-600 inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-100"
            >
              Partner with AfroChain
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
