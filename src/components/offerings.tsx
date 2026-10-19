import { useState } from "react";
import { OFFERINGS, SHELVES, offeringFomo, shelfLabel, slotsLeft, type Offering, type ShelfId } from "@/data/catalog";
import { offLabel, useHouse } from "@/lib/house";
import { cn } from "@/lib/cn";

export function Shelf({
  id,
  items,
  forceOpen,
}: {
  id: ShelfId | "highlights";
  items: Offering[];
  forceOpen?: boolean;
}) {
  const meta =
    id === "highlights"
      ? {
          label: "Highlights",
          kicker: "From the shelves",
          lede: "A short cut of what the desk is asked for most.",
        }
      : SHELVES.find((s) => s.id === id)!;

  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;
  const open = forceOpen || expanded;
  const canToggle = !forceOpen && items.length > 4;

  return (
    <section id={id === "highlights" ? "highlights" : id} className="scroll-mt-36 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-brass uppercase">{meta.kicker}</p>
          <h2 className="mt-2 font-display text-4xl text-ivory sm:text-5xl">{meta.label}</h2>
          <p className="mt-2 text-sm text-mist sm:text-base">{meta.lede}</p>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "min-w-0",
                !open && index >= 4 && "hidden",
                !open && index >= 4 && index < 8 && "xl:block",
              )}
            >
              <OfferingCard item={item} />
            </li>
          ))}
        </ul>
        {canToggle && (
          <div className={cn("mt-6 flex justify-center", !open && items.length <= 8 && "xl:hidden")}>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="h-12 rounded-md border border-line px-5 text-sm text-ivory"
            >
              {expanded ? "Show less" : "Reveal more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function OfferingCard({ item }: { item: Offering }) {
  const openBooking = useHouse((s) => s.openBooking);
  const label = shelfLabel(item.shelf);
  const slots = slotsLeft(item);
  const fomo = offeringFomo(item);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel">
      <div className="relative aspect-3/2">
        <img
          src={item.image}
          alt=""
          width={1280}
          height={853}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums">
          {offLabel(item.original, item.price)}
        </span>
        {item.unavailable && (
          <span className="absolute top-3 right-3 rounded-sm bg-ink/85 px-2 py-1 text-xs text-ivory">
            Unavailable
          </span>
        )}
        {item.priority && !item.unavailable && (
          <span className="absolute top-3 right-3 rounded-sm bg-brass px-2 py-1 text-xs font-medium text-ink">
            Priority
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs tracking-widest text-mist uppercase">{label}</p>
        <h3 className="font-display text-2xl leading-tight text-ivory">{item.title}</h3>
        <div className="mt-auto flex items-end justify-between gap-3">
          <p className="text-sm text-mist">
            Slots <span className={cn("tabular-nums", slots <= 3 ? "text-blush" : "text-ivory")}>{slots}</span>
          </p>
          {fomo && (
            <p className={cn("text-xs", fomo.hot ? "text-blush" : "text-brass-2")}>{fomo.text}</p>
          )}
        </div>
        <button
          type="button"
          disabled={item.unavailable}
          onClick={() => openBooking(item.title, label)}
          className={cn(
            "h-12 rounded-md text-sm font-medium",
            item.unavailable ? "border border-line text-mist" : "bg-ivory text-ink",
          )}
        >
          {item.unavailable ? "Unavailable" : "Enquire"}
        </button>
      </div>
    </article>
  );
}

export function featuredOfferings() {
  return OFFERINGS.filter((item) => item.featured);
}

export function offeringsFor(id: ShelfId) {
  return OFFERINGS.filter((item) => item.shelf === id);
}
