import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SESSIONS, frameFor, type Session } from "@/data/catalog";
import { offLabel, useHouse } from "@/lib/house";
import { cn } from "@/lib/cn";

export function Sessions() {
  const rail = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const openBooking = useHouse((s) => s.openBooking);

  const sync = () => {
    const el = rail.current;
    const card = el?.querySelector<HTMLElement>(".snap-card");
    if (!el || !card) return;
    const step = card.offsetWidth + 16;
    setIndex(Math.round(el.scrollLeft / step));
  };

  const go = (dir: number) => {
    const el = rail.current;
    const card = el?.querySelector<HTMLElement>(".snap-card");
    if (!el || !card) return;
    const step = card.offsetWidth + 16;
    const last = SESSIONS.length - 1;
    const next = Math.round(el.scrollLeft / step) + dir;
    if (next > last) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (next < 0) el.scrollTo({ left: last * step, behavior: "smooth" });
    else el.scrollTo({ left: next * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(1), 4800);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="sessions" className="scroll-mt-36 border-t border-line py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4 px-4 sm:px-6">
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">Live & virtual</p>
            <h2 className="mt-2 font-display text-4xl text-ivory sm:text-5xl">Dungeon Sessions</h2>
            <p className="mt-2 max-w-md text-sm text-mist">
              Enquiry only. Limited slots. A yes is written before a time is kept.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous session"
              onClick={() => go(-1)}
              className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next session"
              onClick={() => go(1)}
              className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={rail}
          className="snap-rail mt-6"
          onScroll={sync}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {SESSIONS.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onEnquire={() => openBooking(session.name, "Dungeon Session")}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-center gap-1 px-4">
          {SESSIONS.map((session, i) => (
            <button
              key={session.id}
              type="button"
              aria-label={`Show ${session.name}`}
              onClick={() => {
                const el = rail.current;
                const card = el?.querySelector<HTMLElement>(".snap-card");
                if (!el || !card) return;
                el.scrollTo({ left: i * (card.offsetWidth + 16), behavior: "smooth" });
              }}
              className="grid h-11 w-6 place-items-center"
            >
              <span
                className={cn(
                  "h-1.5 rounded-full bg-line",
                  i === index ? "w-5 bg-brass" : "w-1.5",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SessionCard({ session, onEnquire }: { session: Session; onEnquire: () => void }) {
  return (
    <article className="snap-card overflow-hidden rounded-lg border border-line bg-panel">
      <div className="relative aspect-3/2">
        <img
          src={session.image}
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: frameFor(session.image) }}
          width={1280}
          height={853}
        />
        <span className="absolute top-3 left-3 rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums">
          {offLabel(session.original, session.price)}
        </span>
        <span className="absolute top-3 right-3 rounded-sm bg-ink/85 px-2 py-1 text-xs tracking-wide text-brass-2 uppercase">
          {session.badge}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xs tracking-widest text-mist uppercase">{session.tag}</p>
        <h3 className="font-display text-3xl leading-none text-ivory">{session.name}</h3>
        <p className="line-clamp-3 text-sm text-mist">{session.summary}</p>
        <div className="flex items-end justify-between gap-3">
          <p className="text-sm text-mist">
            {session.soldOut ? (
              <>
                Slots <span className="tabular-nums text-blush">0</span>
              </>
            ) : (
              <>
                Slots{" "}
                <span className={cn("tabular-nums", session.low ? "text-blush" : "text-ivory")}>
                  {session.spots.replace(/\s*slots?/i, "")}
                </span>
              </>
            )}
          </p>
          {(session.soldOut || session.low) && (
            <p className="text-xs text-blush">{session.soldOut ? "Waitlist" : "Few left"}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onEnquire}
          className="h-12 rounded-md bg-brass text-sm font-medium text-ink"
        >
          {session.soldOut ? "Join waitlist" : "Enquire"}
        </button>
      </div>
    </article>
  );
}
