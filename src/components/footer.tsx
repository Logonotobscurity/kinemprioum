import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SHELVES } from "@/data/catalog";
import { DESK_EMAIL, useHouse } from "@/lib/house";

const POLICIES: { id: string; title: string; body: string[] }[] = [
  {
    id: "delivery",
    title: "Delivery",
    body: [
      "Study briefs are sent by email after an enquiry is accepted. Live and virtual sessions are scheduled with a written time, place or link, and a consent note.",
      "There is no silent checkout. Terms are confirmed by the desk.",
    ],
  },
  {
    id: "refund",
    title: "Refunds",
    body: [
      "A deposit for a live session is refundable until 72 hours before the agreed time. Inside that window it is kept, unless the house cancels.",
      "If the house cancels, the deposit is returned in full. A study brief, once delivered, is final.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    body: [
      "The enquiry form stays in your browser until you send it. It is not an account, and this page does not post it to a server.",
      `Email the desk opens your mail app, addressed to ${DESK_EMAIL}. Do not include anything you would not put in a letter.`,
    ],
  },
  {
    id: "terms",
    title: "Terms",
    body: [
      "Kinemprioum offers private adult experiences and study. Listings are invitations to enquire, not a contract.",
      "You must be 18 or older. The house may refuse any enquiry. Settlement is discussed only after acceptance.",
    ],
  },
  {
    id: "consent",
    title: "Consent & safety",
    body: [
      "Every live session starts from a written yes. Either person can stop. Aftercare is part of the time, not an extra.",
      "No one is pressured, recorded, or surprised. If a boundary is unclear, the session does not begin.",
    ],
  },
];

export function Footer() {
  const openBooking = useHouse((s) => s.openBooking);
  const [policy, setPolicy] = useState<string | null>(null);
  const active = POLICIES.find((p) => p.id === policy);

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-2">
          <p className="font-display text-3xl tracking-wide text-ivory">
            KINEMP<span className="text-brass">R</span>IOUM
          </p>
          <p className="text-sm text-mist">The Inner Sanctum · Dungeon experiences</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs tracking-widest text-brass uppercase">Navigate</h2>
            <ul className="mt-3 text-sm">
              <li><a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href="#top">Home</a></li>
              <li><a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href="#founder">About the house</a></li>
              <li><a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href="#sessions">Dungeon sessions</a></li>
              <li><a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href="#highlights">Study</a></li>
              <li>
                <button type="button" className="flex min-h-11 items-center text-ivory hover:text-brass-2" onClick={() => openBooking("General Enquiry", "General")}>
                  Request an experience
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-brass uppercase">Experiences</h2>
            <ul className="mt-3 text-sm">
              <li><a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href="#sessions">The Hunt</a></li>
              {SHELVES.slice(0, 5).map((shelf) => (
                <li key={shelf.id}>
                  <a className="flex min-h-11 items-center text-ivory hover:text-brass-2" href={`#${shelf.id}`}>{shelf.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-brass uppercase">Policies</h2>
            <ul className="mt-3 text-sm">
              {POLICIES.map((item) => (
                <li key={item.id}>
                  <button type="button" className="flex min-h-11 items-center text-ivory hover:text-brass-2" onClick={() => setPolicy(item.id)}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-brass uppercase">Contact</h2>
            <ul className="mt-3 text-sm text-ivory">
              <li>
                <a className="flex min-h-11 items-center break-all hover:text-brass-2" href={`mailto:${DESK_EMAIL}`}>
                  {DESK_EMAIL}
                </a>
              </li>
              <li>
                <button type="button" className="flex min-h-11 items-center hover:text-brass-2" onClick={() => openBooking("General Enquiry", "General")}>
                  Book via form
                </button>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-mist">© 2026 Kinemprioum · All rights reserved</p>
        <p className="mt-3 text-xs text-mist">Settlement is discussed after an enquiry is accepted.</p>
      </div>

      <Dialog.Root open={policy != null} onOpenChange={(open) => !open && setPolicy(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80" />
          <Dialog.Content className="desk-dialog">
            <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
              <Dialog.Title className="font-display text-3xl text-ivory">{active?.title}</Dialog.Title>
              <Dialog.Description className="sr-only">House policy</Dialog.Description>
              <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory" aria-label="Close">
                <X className="size-5" />
              </Dialog.Close>
            </div>
            <div className="space-y-4 overflow-y-auto px-4 py-5 text-sm text-mist sm:px-5">
              {active?.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </footer>
  );
}
