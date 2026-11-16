import { Check, ExternalLink } from "lucide-react";
import { PASS_DISCLAIMER, passes } from "@/app/data/passes";

export default function Passes() {
  return (
    <section
      id="passes"
      className="scroll-mt-8 bg-surface-2 py-16 lg:py-24"
      aria-labelledby="passes-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow text-muted-ink">
              Admission
            </p>
            <h2
              id="passes-title"
              className="type-h2 mt-3 text-brand-600"
            >
              Choose Your AfroChain Pass
            </h2>
            <p className="mt-4 text-base text-body leading-relaxed md:text-lg">
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
                      ? "border-transparent bg-ink-900 text-white"
                      : "border-brand-600/20 bg-white text-brand-600"
                  }`}
                >
                  {pass.badge && (
                    <span className="inline-flex w-fit items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink-900">
                      {pass.badge}
                    </span>
                  )}

                  <h3
                    className={`mt-3 text-sm font-bold uppercase tracking-[0.16em] ${
                      featured ? "text-white/70" : "text-muted-ink"
                    }`}
                  >
                    {pass.name}
                  </h3>

                  <p
                    className={`mt-1.5 text-3xl font-bold leading-tight lg:text-4xl ${
                      featured ? "text-white" : "text-brand-600"
                    }`}
                  >
                    {pass.price}
                  </p>

                  {pass.priceNote && (
                    <p
                      className={`mt-2 text-sm leading-snug sm:text-sm ${
                        featured ? "text-white/80" : "text-body"
                      }`}
                    >
                      {pass.priceNote}
                    </p>
                  )}

                  <p
                    className={`mt-2.5 text-sm font-semibold leading-snug sm:text-sm ${
                      featured ? "text-white/90" : "text-body"
                    }`}
                  >
                    {pass.scope}
                  </p>

                  <p
                    className={`mt-5 text-xs font-bold uppercase tracking-[0.16em] ${
                      featured ? "text-white/70" : "text-muted-ink"
                    }`}
                  >
                    Includes
                  </p>

                  <ul
                    className={`mt-2.5 flex flex-col gap-2 text-sm leading-snug sm:text-sm sm:leading-relaxed ${
                      featured ? "text-white/90" : "text-body"
                    }`}
                  >
                    {pass.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                            featured ? "text-brand-100" : "text-brand-600"
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
                        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-5 sm:py-3 sm:text-sm";
                      const tone = featured
                        ? cta.variant === "primary"
                          ? "bg-white text-ink-900 hover:bg-brand-100"
                          : "border-2 border-white/70 text-white hover:bg-white hover:text-ink-900"
                        : cta.variant === "primary"
                          ? "bg-brand-600 text-white hover:bg-brand-700"
                          : "border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white";

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

          <div className="mt-6 rounded-2xl border border-brand-600/15 border-l-4 border-l-[#245a9a] bg-white p-5 sm:p-6">
            <h3 className="type-h3 text-brand-600">
              Important distinction
            </h3>
            <p className="mt-2 text-body leading-relaxed">
              {PASS_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
