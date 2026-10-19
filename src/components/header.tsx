import { Menu, Search, X } from "lucide-react";
import { useHouse } from "@/lib/house";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#sessions", label: "Sessions" },
  { href: "#highlights", label: "Study" },
  { href: "#founder", label: "The House" },
];

type Props = {
  query: string;
  onQuery: (value: string) => void;
  menuOpen: boolean;
  onMenu: (open: boolean) => void;
};

export function Header({ query, onQuery, menuOpen, onMenu }: Props) {
  const openBooking = useHouse((s) => s.openBooking);
  const openList = useHouse((s) => s.openList);
  const count = useHouse((s) => s.enquiries.length);
  const hydrated = useHouse((s) => s.hydrated);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <a href="#top" className="shrink-0 font-display text-2xl tracking-wide text-ivory">
          KINEMP<span className="text-brass">R</span>IOUM
        </a>

        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-mist hover:text-ivory">
              {link.label}
            </a>
          ))}
        </nav>

        <label className="relative ml-auto hidden min-w-0 flex-1 max-w-xs md:block">
          <span className="sr-only">Search the house</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" />
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search sessions and study"
            className="h-11 w-full rounded-md border border-line bg-ink-2 pr-3 pl-9 text-sm text-ivory placeholder:text-mist/80"
          />
        </label>

        {hydrated && count > 0 && (
          <button
            type="button"
            onClick={openList}
            className="hidden h-11 items-center rounded-md border border-line px-3 text-sm text-brass-2 sm:inline-flex"
          >
            List
            <span className="ml-2 tabular-nums">{count}</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => openBooking("General Enquiry", "General")}
          className="hidden h-11 items-center rounded-md bg-brass px-4 text-sm font-medium text-ink sm:inline-flex"
        >
          Enquire
        </button>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => onMenu(!menuOpen)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-ink px-4 py-4 lg:hidden">
          <label className="relative block">
            <span className="sr-only">Search the house</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" />
            <input
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search"
              className="h-12 w-full rounded-md border border-line bg-ink-2 pr-3 pl-9 text-base text-ivory"
            />
          </label>
          <div className="mt-3 grid gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onMenu(false)}
                className="flex h-12 items-center text-lg text-ivory"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {hydrated && count > 0 && (
              <button
                type="button"
                className="h-12 rounded-md border border-line text-sm text-brass-2"
                onClick={() => {
                  onMenu(false);
                  openList();
                }}
              >
                Your list ({count})
              </button>
            )}
            <button
              type="button"
              className={cn(
                "h-12 rounded-md bg-brass text-sm font-medium text-ink",
                !(hydrated && count > 0) && "col-span-2",
              )}
              onClick={() => {
                onMenu(false);
                openBooking("General Enquiry", "General");
              }}
            >
              Enquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
