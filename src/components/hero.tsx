import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useHouse } from "@/lib/house";
import { cn } from "@/lib/cn";

const SCENES = [
  {
    id: "chair",
    label: "The chair",
    src: "/experiences/hero-chair.jpg",
    position: "62% 64%",
    alt: "An empty oxblood chair and a single candle in a dark salon",
  },
  {
    id: "table",
    label: "The table",
    src: "/experiences/hero-table.jpg",
    position: "center 58%",
    alt: "Two glasses and a candle on a table beside a rainy window",
  },
  {
    id: "walk",
    label: "The walk",
    src: "/experiences/hero-walk.jpg",
    position: "40% 52%",
    alt: "A lantern lighting a wet stone corridor at night",
  },
] as const;

export function Hero() {
  const openBooking = useHouse((s) => s.openBooking);
  const stage = useRef<HTMLElement>(null);
  const reduced = useRef(false);
  const held = useRef(false);
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = media.matches;
    const el = stage.current;
    if (!el || media.matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = el.offsetHeight || 1;
        const progress = Math.min(1, Math.max(0, window.scrollY / height));
        el.style.setProperty("--scroll", progress.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const timer = window.setInterval(() => {
      if (held.current || document.hidden) return;
      setScene((current) => (current + 1) % SCENES.length);
    }, 7000);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
  }, []);

  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced.current || event.pointerType === "touch") return;
    const el = stage.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };

  const choose = (index: number) => {
    held.current = true;
    setScene(index);
  };

  return (
    <section
      id="top"
      ref={stage}
      className="stage hero-stage relative overflow-hidden"
      onPointerMove={onMove}
      onPointerLeave={() => {
        stage.current?.style.setProperty("--px", "0");
        stage.current?.style.setProperty("--py", "0");
      }}
    >
      {SCENES.map((item, index) => (
        <img
          key={item.id}
          src={item.src}
          alt={index === scene ? item.alt : ""}
          aria-hidden={index === scene ? undefined : true}
          className="hero-still absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: item.position, opacity: index === scene ? 1 : 0 }}
          width={1792}
          height={1008}
        />
      ))}
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/25" />
      <div className="hero-copy stage relative mx-auto flex max-w-7xl flex-col justify-end px-4 pt-8 pb-10 sm:px-6 sm:pb-14">
        <p className="text-xs tracking-widest text-brass uppercase">The Inner Sanctum</p>
        <h1 className="mt-3 max-w-3xl font-display text-6xl leading-none text-ivory sm:text-7xl lg:text-8xl">
          Private rooms. Clear terms.
        </h1>
        <p className="mt-5 max-w-xl text-base text-ivory/90 sm:text-lg">
          Dungeon sessions and adult study. Enquiry only. Limited slots. Nothing is added to a cart.
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
        <div className="mt-8 flex flex-col gap-6 border-t border-ivory/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid grid-cols-2 gap-4 text-sm sm:min-w-64">
            <div>
              <dt className="text-mist">Access</dt>
              <dd className="mt-1 text-ivory">18+ enquiry</dd>
            </div>
            <div>
              <dt className="text-mist">Circle</dt>
              <dd className="mt-1 text-ivory">Limited slots</dd>
            </div>
          </dl>
          <div role="tablist" aria-label="Rooms in the house" className="flex flex-wrap gap-2">
            {SCENES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === scene}
                onClick={() => choose(index)}
                className={cn(
                  "h-11 rounded-md border px-3 text-sm",
                  index === scene
                    ? "border-brass bg-brass text-ink"
                    : "border-ivory/25 bg-ink/40 text-ivory",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <a
          href="#sessions"
          className="mt-8 hidden items-center gap-3 self-start text-xs tracking-widest text-brass uppercase sm:inline-flex"
        >
          <span className="hero-scroll-line block h-10 w-px bg-brass" aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
