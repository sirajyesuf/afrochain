import { impactStats } from "@/app/data/impact";

/**
 * Impact figures closing the past-events section: one single bordered card
 * holding all six figures, separated by hairlines. Six across on desktop,
 * three across on smaller screens (two rows, with a rule between them).
 *
 * Since the whole band is one surface, the dividers are drawn per cell:
 * a left border for every cell that is not first in its row, and a top border
 * for the second mobile row only (removed again at lg).
 */
export default function ImpactStats() {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto mt-10 max-w-6xl lg:mt-14">
        <dl className="grid grid-cols-3 overflow-hidden rounded-xl border border-[#245a9a]/15 bg-white lg:grid-cols-6">
          {impactStats.map((stat, index) => {
            // left rule on any cell that is not first in its row
            const leftRule = index % 3 === 0 ? "" : "border-l";
            // index 3 starts the second mobile row but sits mid-row on desktop
            const desktopLeftRule = index === 3 ? "lg:border-l" : "";
            // rule between the two mobile rows, gone once all six fit one row
            const topRule = index >= 3 ? "border-t lg:border-t-0" : "";

            return (
              <div
                key={stat.label}
                // flex-col keeps the markup order valid (dt before dd) while the
                // order-* classes make the number read first visually.
                className={`flex min-w-0 flex-col items-center border-[#245a9a]/12 px-2 py-5 text-center sm:px-3 lg:py-6 ${leftRule} ${desktopLeftRule} ${topRule}`}
              >
                <dt className="order-2 mt-2 text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#245a9a]/65 sm:text-[10px] lg:text-[11px]">
                  {stat.label}
                </dt>
                <dd className="order-1 text-xl font-bold leading-none tracking-tight text-[#0f2f56] tabular-nums sm:text-2xl lg:text-3xl">
                  {stat.value}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
