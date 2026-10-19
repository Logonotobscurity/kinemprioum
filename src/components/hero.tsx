import { useHouse } from "@/lib/house";

export function Hero() {
  const openBooking = useHouse((s) => s.openBooking);

  return (
    <section id="top" className="stage relative">
      <img
        src="/experiences/hero.jpg"
        alt="A candlelit private salon with an empty oxblood chair"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/75 to-ink/35" />
      <div className="stage relative mx-auto flex max-w-7xl flex-col justify-end px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
        <p className="text-xs tracking-widest text-brass uppercase">The Inner Sanctum</p>
        <h1 className="mt-3 max-w-3xl font-display text-6xl leading-none text-ivory sm:text-7xl lg:text-8xl">
          Private rooms. Clear terms.
        </h1>
        <p className="mt-5 max-w-xl text-base text-ivory/90 sm:text-lg">
          Dungeon sessions and adult study. Enquiry only.
          Limited slots. Nothing is added to a cart.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#sessions"
            className="inline-flex h-12 items-center justify-center rounded-md bg-brass px-5 text-sm font-medium text-ink"
          >
            View sessions
          </a>
          <button
            type="button"
            onClick={() => openBooking("General Enquiry", "General")}
            className="inline-flex h-12 items-center justify-center rounded-md border border-ivory/30 bg-ink/40 px-5 text-sm text-ivory"
          >
            Request an experience
          </button>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-ivory/15 pt-6 text-sm">
          <div>
            <dt className="text-mist">Access</dt>
            <dd className="mt-1 text-ivory">18+ enquiry</dd>
          </div>
          <div>
            <dt className="text-mist">Circle</dt>
            <dd className="mt-1 text-ivory">Limited slots</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
