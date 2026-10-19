import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SHELVES } from "@/data/catalog";
import { DESK_EMAIL, deskMailHref, enquiryText, useHouse, type Enquiry } from "@/lib/house";

const CATEGORIES = ["General", "Dungeon Session", ...SHELVES.map((s) => s.label)];

export function BookingDesk() {
  const open = useHouse((s) => s.bookingOpen);
  const view = useHouse((s) => s.view);
  const experience = useHouse((s) => s.experience);
  const category = useHouse((s) => s.category);
  const enquiries = useHouse((s) => s.enquiries);
  const closeBooking = useHouse((s) => s.closeBooking);
  const addEnquiry = useHouse((s) => s.addEnquiry);
  const markSent = useHouse((s) => s.markSent);
  const toast = useHouse((s) => s.toast);
  const openList = useHouse((s) => s.openList);
  const openBooking = useHouse((s) => s.openBooking);

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && closeBooking()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80" />
        <Dialog.Content className="desk-dialog" aria-describedby="desk-blurb">
          <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <Dialog.Title className="font-display text-3xl leading-none text-ivory">
                {view === "list" ? "Your list" : "Request"}
              </Dialog.Title>
              <p id="desk-blurb" className="mt-1 truncate text-sm text-mist">
                {view === "list" ? "Kept on this device" : experience}
              </p>
            </div>
            <Dialog.Close
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line text-ivory"
              aria-label="Close"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>

          {view === "form" && (
            <EnquiryForm
              key={`${experience}-${category}`}
              experience={experience}
              category={category}
              onSave={(entry) => {
                addEnquiry(entry);
                markSent();
                window.location.href = deskMailHref(entry);
                toast("Opening your mail app.");
              }}
            />
          )}
          {view === "sent" && <SentNote experience={experience} onList={openList} onAnother={() => openBooking(experience, category)} />}
          {view === "list" && (
            <EnquiryList
              enquiries={enquiries}
              onNew={() => openBooking("General Enquiry", "General")}
              onCopy={async (entry) => {
                const text = enquiryText(entry);
                try {
                  await navigator.clipboard.writeText(text);
                  toast("Copied. Send it to the desk.");
                } catch {
                  toast("Copy blocked. Select the text from the form instead.");
                }
              }}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function EnquiryForm({
  experience,
  category,
  onSave,
}: {
  experience: string;
  category: string;
  onSave: (entry: Omit<Enquiry, "id" | "at">) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cat, setCat] = useState(category);
  const [message, setMessage] = useState("");
  const [adult, setAdult] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) {
          setError("Name and email are required.");
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
          setError("Enter a real email so the desk can reply.");
          return;
        }
        if (!adult) {
          setError("Confirm you are 18 or older.");
          return;
        }
        setError("");
        onSave({
          experience,
          category: cat,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        });
      }}
    >
      <Field id="fName" label="Name" value={name} onChange={setName} autoComplete="name" />
      <Field id="fEmail" label="Email" value={email} onChange={setEmail} type="email" autoComplete="email" />
      <Field id="fPhone" label="Phone (optional)" value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
      <label className="block text-sm text-mist">
        Category
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="mt-1 h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-ivory"
        >
          {CATEGORIES.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-mist">
        Note
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Timing, boundaries, or the question you actually have."
          className="mt-1 w-full rounded-md border border-line bg-ink px-3 py-3 text-base text-ivory placeholder:text-mist/70"
        />
      </label>
      <label className="flex min-h-12 items-center gap-3 text-sm text-ivory">
        <input
          id="fAdult"
          type="checkbox"
          checked={adult}
          onChange={(e) => setAdult(e.target.checked)}
          className="size-5 accent-brass"
        />
        I am 18 or older and I agree to be contacted about this enquiry.
      </label>
      {error && <p className="text-sm text-blush">{error}</p>}
      <button type="submit" className="mt-auto h-12 rounded-md bg-brass text-sm font-medium text-ink">
        Email the desk
      </button>
      <p className="text-xs text-mist">
        Opens your mail app, already addressed to {DESK_EMAIL}. You still tap send there.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm text-mist" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-ivory"
      />
    </label>
  );
}

function SentNote({
  experience,
  onList,
  onAnother,
}: {
  experience: string;
  onList: () => void;
  onAnother: () => void;
}) {
  const enquiries = useHouse((s) => s.enquiries);
  const latest = enquiries[0];
  const toast = useHouse((s) => s.toast);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-5">
      <p className="font-display text-4xl text-ivory">Held.</p>
      <p className="text-sm text-mist">
        A draft for {experience} should be open in your mail app, addressed to {DESK_EMAIL}.
        If nothing opened, use Open mail. A copy also stays on this device.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          className="h-12 flex-1 rounded-md bg-brass text-sm font-medium text-ink"
          onClick={async () => {
            if (!latest) return;
            try {
              await navigator.clipboard.writeText(enquiryText(latest));
              toast("Copied.");
            } catch {
              toast("Copy was blocked in this browser.");
            }
          }}
        >
          Copy for email
        </button>
        <a
          className="inline-flex h-12 flex-1 items-center justify-center rounded-md border border-line text-sm text-ivory"
          href={latest ? deskMailHref(latest) : deskMailHref()}
        >
          Open mail
        </a>
      </div>
      <button type="button" onClick={onList} className="h-12 rounded-md border border-line text-sm text-ivory">
        View your list
      </button>
      <button type="button" onClick={onAnother} className="text-sm text-mist underline">
        Write another
      </button>
    </div>
  );
}

function EnquiryList({
  enquiries,
  onNew,
  onCopy,
}: {
  enquiries: Enquiry[];
  onNew: () => void;
  onCopy: (entry: Enquiry) => void;
}) {
  if (enquiries.length === 0) {
    return (
      <div className="flex flex-1 flex-col gap-4 px-4 py-6 sm:px-5">
        <p className="text-sm text-mist">Nothing held yet.</p>
        <button type="button" onClick={onNew} className="h-12 rounded-md bg-brass text-sm font-medium text-ink">
          New enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <ul className="divide-y divide-line">
        {enquiries.map((entry) => (
          <li key={entry.id} className="px-4 py-4 sm:px-5">
            <p className="font-display text-2xl text-ivory">{entry.experience}</p>
            <p className="mt-1 text-sm text-mist">
              {entry.name} · {entry.category}
            </p>
            <p className="text-xs text-mist tabular-nums">
              {new Date(entry.at).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
            <button type="button" onClick={() => onCopy(entry)} className="mt-2 h-11 text-sm text-brass-2">
              Copy
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-auto p-4 sm:p-5">
        <button type="button" onClick={onNew} className="h-12 w-full rounded-md bg-brass text-sm font-medium text-ink">
          New enquiry
        </button>
      </div>
    </div>
  );
}
