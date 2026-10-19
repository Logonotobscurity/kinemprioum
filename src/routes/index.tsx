import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OFFERINGS, SESSIONS, SHELVES, shelfLabel, type ShelfId } from "@/data/catalog";
import { AgeGate } from "@/components/age-gate";
import { BookingDesk } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Founder, Steps } from "@/components/founder";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Shelf, featuredOfferings, offeringsFor } from "@/components/offerings";
import { Sessions } from "@/components/sessions";
import { Toasts } from "@/components/toasts";
import { cn } from "@/lib/cn";
import { offLabel, useHouse } from "@/lib/house";

export const Route = createFileRoute("/")({ component: Home });

type Filter = "all" | "sessions" | "highlights" | ShelfId;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sessions", label: "Sessions" },
  { id: "highlights", label: "Highlights" },
  ...SHELVES.map((shelf) => ({ id: shelf.id as Filter, label: shelf.label })),
];

function Home() {
  const hydrate = useHouse((s) => s.hydrate);
  const openBooking = useHouse((s) => s.openBooking);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const scrollTo = useRef<string | null>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const q = query.trim().toLowerCase();
  const searching = q.length > 1;

  useEffect(() => {
    const id = scrollTo.current;
    if (!id) return;
    scrollTo.current = null;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [filter, q]);

  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1);
      if (!id || id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (document.getElementById(id)) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (FILTERS.some((item) => item.id === id) || id === "founder") {
        scrollTo.current = id;
        setFilter("all");
        setQuery("");
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const results = useMemo(() => {
    if (!searching) return { sessions: [], offerings: [] };
    return {
      sessions: SESSIONS.filter((s) =>
        `${s.name} ${s.tag} ${s.summary}`.toLowerCase().includes(q),
      ),
      offerings: OFFERINGS.filter((o) => `${o.title} ${o.shelf}`.toLowerCase().includes(q)),
    };
  }, [q, searching]);

  const showSessions = !searching && (filter === "all" || filter === "sessions");
  const showHighlights = !searching && (filter === "all" || filter === "highlights");

  return (
    <>
      <AgeGate />
      <div className="house min-h-dvh bg-ink text-ivory">
      <a
        href="#sessions"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brass focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to sessions
      </a>
      <Header query={query} onQuery={setQuery} menuOpen={menuOpen} onMenu={setMenuOpen} />
      <Hero />

      <nav aria-label="Shelves" className="sticky top-16 z-30 border-b border-line bg-ink/95 backdrop-blur-md">
        <div className="chip-rail mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {FILTERS.map((item) => {
            const active = filter === item.id && !searching;
            return (
              <a
                key={item.id}
                href={item.id === "all" ? "#highlights" : `#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  const id = item.id === "all" ? "highlights" : item.id;
                  scrollTo.current = id;
                  setFilter(item.id);
                  setQuery("");
                  setMenuOpen(false);
                }}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center rounded-full border px-4 text-sm",
                  active
                    ? "border-brass bg-brass text-ink"
                    : "border-line text-mist",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {searching ? (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h2 className="font-display text-4xl text-ivory">
            Results for “{query.trim()}”
          </h2>
          {results.sessions.length + results.offerings.length === 0 ? (
            <p className="mt-4 text-mist">Nothing under that name. Try Hunt, Ritual, or Date.</p>
          ) : (
            <ul className="mt-6 grid gap-3">
              {results.sessions.map((session) => (
                <li key={session.id}>
                  <button
                    type="button"
                    onClick={() => openBooking(session.name, "Dungeon Session")}
                    className="flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-left"
                  >
                    <span>
                      <span className="block font-display text-2xl text-ivory">{session.name}</span>
                      <span className="text-xs tracking-widest text-mist uppercase">Session</span>
                    </span>
                    <span className="rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums">
                      {offLabel(session.original, session.price)}
                    </span>
                  </button>
                </li>
              ))}
              {results.offerings.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => openBooking(item.title, shelfLabel(item.shelf))}
                    className="flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-left"
                  >
                    <span>
                      <span className="block font-display text-2xl text-ivory">{item.title}</span>
                      <span className="text-xs tracking-widest text-mist uppercase">{shelfLabel(item.shelf)}</span>
                    </span>
                    <span className="rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums">
                      {offLabel(item.original, item.price)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          {showSessions && <Sessions />}
          {showHighlights && <Shelf id="highlights" items={featuredOfferings()} forceOpen={filter === "highlights"} />}
          {SHELVES.map((shelf) =>
            filter === "all" || filter === shelf.id ? (
              <Shelf
                key={shelf.id}
                id={shelf.id}
                items={offeringsFor(shelf.id)}
                forceOpen={filter === shelf.id}
              />
            ) : null,
          )}
        </>
      )}

      <Founder />
      <Steps />
      <Footer />
      <BookingDesk />
      <Toasts />
    </div>
    </>
  );
}
