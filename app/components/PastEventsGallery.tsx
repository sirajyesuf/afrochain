import Image from "next/image";

/**
 * Past-events gallery: two auto-scrolling rows of square photos moving in
 * opposite directions. Rows are duplicated once so the 50%-translate
 * keyframes loop seamlessly. The global prefers-reduced-motion rule freezes
 * the animation, leaving a static photo wall.
 */
const photos = [
  "IMG_20261023_164423_464.webp",
  "IMG_20261023_164423_561.webp",
  "IMG_20261023_164423_717.webp",
  "IMG_20261023_164423_720.webp",
  "IMG_20261023_164423_827.webp",
  "IMG_20261023_164423_860.webp",
  "IMG_20261023_164424_050.webp",
  "IMG_20261023_164424_139.webp",
  "IMG_20261023_164431_174.webp",
  "IMG_20261023_164431_328.webp",
  "IMG_20261023_164431_334.webp",
  "IMG_20261023_164431_365.webp",
  "IMG_20261023_164431_460.webp",
  "IMG_20261023_164431_574.webp",
  "IMG_20261023_164431_783.webp",
  "IMG_20261023_164431_855.webp",
  "IMG_20261023_164432_081.webp",
  "IMG_20261023_164432_139.webp",
  "IMG_20261023_164439_178.webp",
  "IMG_20261023_164439_197.webp",
  "IMG_20261023_164439_389.webp",
  "IMG_20261023_164439_440.webp",
  "IMG_20261023_164439_800.webp",
  "IMG_20261023_164439_824.webp",
  "IMG_20261023_164439_870.webp",
  "IMG_20261023_164439_984.webp",
  "IMG_20261023_164440_175.webp",
  "IMG_20261023_164440_183.webp",
];

const rowOne = photos.slice(0, Math.ceil(photos.length / 2));
const rowTwo = photos.slice(Math.ceil(photos.length / 2));

type MarqueeRowProps = {
  files: string[];
  reverse?: boolean;
  duration: string;
};

function MarqueeRow({ files, reverse = false, duration }: MarqueeRowProps) {
  const loop = [...files, ...files];

  return (
    <div className="relative overflow-hidden">
      <ul
        className={`marquee ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {loop.map((file, index) => (
          <li
            key={`${file}-${index}`}
            className="mr-3 shrink-0 sm:mr-4"
          >
            <Image
              src={`/past-events/web/${file}`}
              alt="AfroChain past event moment"
              width={800}
              height={800}
              loading="lazy"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              className="h-40 w-40 rounded-2xl border border-[#245a9a]/10 object-cover transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-48 md:h-56 md:w-56"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PastEventsGallery() {
  return (
    <section
      id="past-events"
      className="scroll-mt-8 bg-[#f6f9ff] py-16 lg:py-24"
      aria-labelledby="past-events-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest text-[#245a9a]/85 uppercase">
              Our Journey So Far
            </p>
            <h2
              id="past-events-title"
              className="mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#245a9a] leading-tight whitespace-nowrap sm:tracking-normal"
            >
              <span className="whitespace-nowrap">Moments from</span>{" "}
              <span className="whitespace-nowrap text-[#dbe900]">
                Past Events
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee bleeds edge-to-edge; side fades blend rows into the section. */}
      <div className="relative mt-10 lg:mt-14">
        <div className="flex flex-col gap-3 sm:gap-4">
          <MarqueeRow files={rowOne} duration="42s" />
          <MarqueeRow files={rowTwo} reverse duration="56s" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f6f9ff] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f6f9ff] to-transparent sm:w-24"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
