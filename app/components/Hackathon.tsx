import { ExternalLink } from "lucide-react";

const Hackathon = () => {
  return (
    <section
      className="bg-surface-2 py-16 lg:py-24"
      aria-labelledby="hackathon-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-600/20 bg-white p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="type-eyebrow text-muted-ink">
                Program &middot; AfroChain Summit 2027
              </p>
              <h2
                id="hackathon-title"
                className="type-h2 mt-2 text-brand-600"
              >
                AfroChain Hackathon
              </h2>
              <p className="mt-3 inline-flex max-w-full items-center rounded-2xl border border-brand-600/25 bg-surface-1 px-4 py-2 text-center text-sm font-semibold text-brand-600 sm:rounded-full">
                March 25&ndash;27, 2027 &middot; Addis Ababa
              </p>
              <p className="mt-5 type-lead text-body max-w-3xl">
                A high-intensity builder sprint for teams delivering practical
                blockchain and Web3 solutions aligned with digital economy
                priorities in Ethiopia and across Africa.
              </p>
              <p className="mt-4 text-body leading-relaxed max-w-3xl">
                Build with mentors, ecosystem operators, and institutional
                stakeholders to move from concept to deployable products.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://forms.gle/vrpvDxoufARBNnPLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
                >
                  Register to Build
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://forms.gle/vrpvDxoufARBNnPLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-600 bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
                >
                  Sponsor the Hackathon
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-brand-600/15 bg-surface-1 p-5">
                  <p className="text-3xl font-bold text-brand-600">100+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-ink">
                    Developers
                  </p>
                </div>
                <div className="rounded-xl border border-brand-600/15 bg-surface-1 p-5">
                  <p className="text-3xl font-bold text-brand-600">48h</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-ink">
                    Build Window
                  </p>
                </div>
                <div className="rounded-xl border border-brand-600/15 bg-surface-1 p-5 sm:col-span-2">
                  <p className="text-3xl font-bold text-brand-600">300K+ ETB</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-ink">
                    Prize Pool
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
