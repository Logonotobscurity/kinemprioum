import { create } from "zustand";

const KEY = "kinemprioum-enquiries";

export type Enquiry = {
  id: string;
  experience: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  at: string;
};

type Toast = { id: string; text: string };

type HouseState = {
  bookingOpen: boolean;
  view: "form" | "list" | "sent";
  experience: string;
  category: string;
  toasts: Toast[];
  enquiries: Enquiry[];
  hydrated: boolean;
  hydrate: () => void;
  openBooking: (experience: string, category?: string) => void;
  openList: () => void;
  closeBooking: () => void;
  markSent: () => void;
  toast: (text: string) => void;
  dismiss: (id: string) => void;
  addEnquiry: (entry: Omit<Enquiry, "id" | "at">) => Enquiry;
};

function readStored(): Enquiry[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (row): row is Enquiry =>
        !!row &&
        typeof row === "object" &&
        typeof (row as Enquiry).id === "string" &&
        typeof (row as Enquiry).name === "string",
    );
  } catch {
    return [];
  }
}

export const useHouse = create<HouseState>((set, get) => ({
  bookingOpen: false,
  view: "form",
  experience: "General Enquiry",
  category: "General",
  toasts: [],
  enquiries: [],
  hydrated: false,
  hydrate: () => set({ enquiries: readStored(), hydrated: true }),
  openBooking: (experience, category = "General") =>
    set({
      bookingOpen: true,
      view: "form",
      experience: experience || "General Enquiry",
      category,
    }),
  openList: () => set({ bookingOpen: true, view: "list" }),
  closeBooking: () => set({ bookingOpen: false }),
  markSent: () => set({ view: "sent" }),
  toast: (text) => {
    const id = crypto.randomUUID();
    set((s) => ({ toasts: [...s.toasts, { id, text }] }));
    window.setTimeout(() => get().dismiss(id), 3400);
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  addEnquiry: (entry) => {
    const enquiry: Enquiry = {
      ...entry,
      id: crypto.randomUUID(),
      at: new Date().toISOString(),
    };
    const enquiries = [enquiry, ...get().enquiries].slice(0, 40);
    set({ enquiries });
    try {
      localStorage.setItem(KEY, JSON.stringify(enquiries));
    } catch {
      /* private mode */
    }
    return enquiry;
  },
}));

export function offLabel(original: number, price: number) {
  const pct = Math.round((1 - price / original) * 100);
  return `-${pct}%`;
}

export const DESK_EMAIL = "enquiries.kinemporioum@aster.cx";

export function enquiryText(e: Pick<Enquiry, "experience" | "category" | "name" | "email" | "phone" | "message">) {
  return [
    `Experience: ${e.experience}`,
    `Category: ${e.category}`,
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    e.phone ? `Phone: ${e.phone}` : "",
    "",
    e.message || "(no note)",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function deskMailHref(e?: Pick<Enquiry, "experience" | "category" | "name" | "email" | "phone" | "message">) {
  if (!e) return `mailto:${DESK_EMAIL}`;
  return `mailto:${DESK_EMAIL}?subject=${encodeURIComponent(`Enquiry: ${e.experience}`)}&body=${encodeURIComponent(enquiryText(e))}`;
}
