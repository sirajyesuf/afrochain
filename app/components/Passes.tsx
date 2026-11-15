import { Check, ExternalLink } from "lucide-react";
import { PASS_DISCLAIMER, passes } from "@/app/data/passes";

export default function Passes() {
  return (
    <section
      id="passes"
      className="scroll-mt-8 bg-[#eaf2fb] py-16 lg:py-24"
      aria-labelledby="passes-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest text-[#245a9a]/80 uppercase">
              Admission
            </p>
            <h2
              id="passes-title"
              className="mt-3 text-3xl font-bold leading-tight text-[#245a9a] md:text-4xl lg:text-5xl"
            >
              Choose Your AfroChain Pass
            </h2>
            <p className="mt-4 text-base text-[#245a9a]/90 leading-relaxed md:text-lg">
              One summit, two levels of access. See exactly what each pass
              includes before you register.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            {passes.map((pass) => {
              const featured = Boolean(pass.featured);

              return (
                <article
                  key={pass.id}
                  className={`flex flex-col rounded-2xl border p-5 sm:p-6 lg:p-7 ${
                    featured
                      ? "border-transparent bg-[#0f2f56] text-white"
                      : "border-[#245a9a]/20 bg-white text-[#245a9a]"
                  }`}
                >
                  {pass.badge && (
                    <span className="inline-flex w-fit items-center rounded-full bg-[#dbe900] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f2f56]">
                      {pass.badge}
                    </span>
                  )}

                  <h3
                    className={`mt-3 text-sm font-bold uppercase tracking-[0.16em] ${
                      featured ? "text-white/70" : "text-[#245a9a]/70"
                    }`}
                  >
                    {pass.name}
                  </h3>

                  <p
                    className={`mt-1.5 text-3xl font-bold leading-tight lg:text-4xl ${
                      featured ? "text-white" : "text-[#245a9a]"
                    }`}
                  >
                    {pass.price}
                  </p>

                  {pass.priceNote && (
                    <p
                      className={`mt-2 text-[13px] leading-snug sm:text-sm ${
                        featured ? "text-white/80" : "text-[#245a9a]/80"
                      }`}
                    >
                      {pass.priceNote}
                    </p>
                  )}

                  <p
                    className={`mt-2.5 text-[13px] font-medium leading-snug sm:text-sm ${
                      featured ? "text-white/90" : "text-[#245a9a]/90"
                    }`}
                  >
                    {pass.scope}
                  </p>

                  <p
                    className={`mt-5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                      featured ? "text-white/70" : "text-[#245a9a]/70"
                    }`}
                  >
                    Includes
                  </p>

                  <ul
                    className={`mt-2.5 flex flex-col gap-2 text-[13px] leading-snug sm:text-sm sm:leading-relaxed ${
                      featured ? "text-white/90" : "text-[#245a9a]/90"
                    }`}
                  >
                    {pass.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                            featured ? "text-[#dbe900]" : "text-[#245a9a]"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2.5">
                    {pass.ctas.map((cta) => {
                      const base =
                        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-colors duration-200 sm:px-5 sm:py-3 sm:text-sm";
                      const tone = featured
                        ? cta.variant === "primary"
                          ? "bg-[#dbe900] text-[#0f2f56] hover:bg-[#e6f21a]"
                          : "border-2 border-white/70 text-white hover:bg-white hover:text-[#0f2f56]"
                        : cta.variant === "primary"
                          ? "bg-[#245a9a] text-white hover:bg-[#1c4678]"
                          : "border-2 border-[#245a9a] text-[#245a9a] hover:bg-[#245a9a] hover:text-white";

                      // The amount always rides inside the button, so the
                      // price travels with the action at every screen size.
                      const button = (
                        <>
                          {cta.note && <span>{cta.note} &middot; </span>}
                          {cta.label}
                        </>
                      );

                      return (
                        <div
                          key={cta.label}
                          className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
                        >
                          <a
                            href={cta.href}
                            target={cta.external ? "_blank" : undefined}
                            rel={cta.external ? "noopener noreferrer" : undefined}
                            className={`${base} ${tone}`}
                          >
                            {button}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-[#245a9a]/15 border-l-4 border-l-[#dbe900] bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#245a9a]">
              Important distinction
            </h3>
            <p className="mt-2 text-[#245a9a]/90 leading-relaxed">
              {PASS_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
