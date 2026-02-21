import { ExternalLink } from "lucide-react";

const Hackathon = () => {
  return (
    <section
      className="bg-[#eaf2fb] py-16 lg:py-24"
      aria-labelledby="hackathon-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#245a9a]/20 bg-white p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#245a9a]/75">
                Program
              </p>
              <h2
                id="hackathon-title"
                className="mt-2 text-3xl md:text-5xl font-bold text-[#245a9a] leading-tight"
              >
                AfroChain Hackathon
              </h2>
              <p className="mt-5 text-base md:text-lg text-[#245a9a]/90 leading-relaxed max-w-3xl">
                A high-intensity builder sprint for teams delivering practical
                blockchain and Web3 solutions aligned with digital economy
                priorities in Ethiopia and across Africa.
              </p>
              <p className="mt-4 text-[#245a9a]/85 leading-relaxed max-w-3xl">
                Build with mentors, ecosystem operators, and institutional
                stakeholders to move from concept to deployable products.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://forms.gle/vrpvDxoufARBNnPLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#245a9a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c4678]"
                >
                  Register to Build
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://forms.gle/vrpvDxoufARBNnPLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#245a9a] bg-white px-6 py-3 text-sm font-semibold text-[#245a9a] transition-colors duration-200 hover:bg-[#245a9a] hover:text-white"
                >
                  Sponsor the Hackathon
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#245a9a]/15 bg-[#f6f9ff] p-5">
                  <p className="text-3xl font-bold text-[#245a9a]">100+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#245a9a]/70">
                    Developers
                  </p>
                </div>
                <div className="rounded-xl border border-[#245a9a]/15 bg-[#f6f9ff] p-5">
                  <p className="text-3xl font-bold text-[#245a9a]">48h</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#245a9a]/70">
                    Build Window
                  </p>
                </div>
                <div className="rounded-xl border border-[#245a9a]/15 bg-[#f6f9ff] p-5 sm:col-span-2">
                  <p className="text-3xl font-bold text-[#245a9a]">300K+ ETB</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#245a9a]/70">
                    Prize Pool
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <p className="flex flex-wrap w-fit rounded-full border border-[#245a9a]/25 px-4 py-2 text-[#245a9a] font-semibold">
                  Build Bold. Build On-Chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
