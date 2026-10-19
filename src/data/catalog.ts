export type ShelfId =
  | "approach"
  | "seduction"
  | "devotion"
  | "bonds"
  | "intimacy"
  | "attraction"
  | "date";

export type Offering = {
  id: string;
  shelf: ShelfId;
  title: string;
  image: string;
  original: number;
  price: number;
  sold?: number;
  unavailable?: boolean;
  priority?: boolean;
  featured?: boolean;
};

export type Session = {
  id: string;
  name: string;
  tag: string;
  badge: "Live" | "Virtual" | "Private";
  summary: string;
  image: string;
  original: number;
  price: number;
  spots: string;
  low: boolean;
  soldOut?: boolean;
};

export const SHELVES: {
  id: ShelfId;
  label: string;
  kicker: string;
  lede: string;
}[] = [
  {
    id: "approach",
    label: "Approach",
    kicker: "The first minute",
    lede: "How to enter a room, open a conversation, and leave the other person glad you did.",
  },
  {
    id: "seduction",
    label: "Seduction Arts",
    kicker: "Tempo",
    lede: "Timing, attention, and the difference between pursuit and an invitation.",
  },
  {
    id: "devotion",
    label: "Devotion",
    kicker: "After the spark",
    lede: "Letters, repair, and the small ceremonies that keep a private bond alive.",
  },
  {
    id: "bonds",
    label: "Bonds",
    kicker: "Two people",
    lede: "Agreements, hard talks, and calendars that still belong to both of you.",
  },
  {
    id: "intimacy",
    label: "Intimacy",
    kicker: "Adults only",
    lede: "Pace, permission, and language for desire. Consent is the first term.",
  },
  {
    id: "attraction",
    label: "Attraction",
    kicker: "Presence",
    lede: "Stillness, voice, and the signals people actually answer.",
  },
  {
    id: "date",
    label: "The Date",
    kicker: "The evening",
    lede: "How a night is built, read, and ended without theatre.",
  },
];

export const OFFERINGS: Offering[] = [
  { id: "a1", shelf: "approach", title: "First Twelve Minutes", image: "/experiences/notebook.jpg", original: 89, price: 36, sold: 40, featured: true },
  { id: "a2", shelf: "approach", title: "Room Reading", image: "/experiences/marble.jpg", original: 120, price: 72, sold: 18 },
  { id: "a3", shelf: "approach", title: "The Quiet Open", image: "/experiences/wine.jpg", original: 64, price: 48, priority: true },
  { id: "a4", shelf: "approach", title: "Barlight", image: "/experiences/corridor.jpg", original: 150, price: 90, sold: 11 },
  { id: "a5", shelf: "approach", title: "Voice, Not Volume", image: "/experiences/silk.jpg", original: 80, price: 56 },
  { id: "a6", shelf: "approach", title: "A Clean Exit", image: "/experiences/candles.jpg", original: 45, price: 32, sold: 27, priority: true },

  { id: "s1", shelf: "seduction", title: "Charisma Studio", image: "/experiences/silk.jpg", original: 420, price: 96, sold: 64, featured: true },
  { id: "s2", shelf: "seduction", title: "Tempo & Tension", image: "/experiences/sheets.jpg", original: 220, price: 99, sold: 22 },
  { id: "s3", shelf: "seduction", title: "The Long Look", image: "/experiences/tea.jpg", original: 89, price: 54, sold: 17 },
  { id: "s4", shelf: "seduction", title: "Silk & Timing", image: "/experiences/incense.jpg", original: 175, price: 117 },
  { id: "s5", shelf: "seduction", title: "After the Laugh", image: "/experiences/notebook.jpg", original: 47, price: 34, sold: 2, priority: true },
  { id: "s6", shelf: "seduction", title: "Invitation, Not Chase", image: "/experiences/rose.jpg", original: 110, price: 66, featured: true },

  { id: "d1", shelf: "devotion", title: "Letters After Midnight", image: "/experiences/wine.jpg", original: 60, price: 36, priority: true },
  { id: "d2", shelf: "devotion", title: "Keeping the Flame", image: "/experiences/candles.jpg", original: 140, price: 84, sold: 19, featured: true },
  { id: "d3", shelf: "devotion", title: "Repair in One Evening", image: "/experiences/corridor.jpg", original: 90, price: 54 },
  { id: "d4", shelf: "devotion", title: "Without Performance", image: "/experiences/marble.jpg", original: 75, price: 48 },
  { id: "d5", shelf: "devotion", title: "The Return", image: "/experiences/sheets.jpg", original: 200, price: 110, sold: 8 },
  { id: "d6", shelf: "devotion", title: "Small Ceremonies", image: "/experiences/notebook.jpg", original: 40, price: 28, priority: true, sold: 31 },

  { id: "b1", shelf: "bonds", title: "Two Calendars", image: "/experiences/incense.jpg", original: 120, price: 72, sold: 14 },
  { id: "b2", shelf: "bonds", title: "A Soft Room for Hard Talk", image: "/experiences/tea.jpg", original: 160, price: 96, featured: true },
  { id: "b3", shelf: "bonds", title: "Jealousy, Named", image: "/experiences/silk.jpg", original: 80, price: 52, sold: 9 },
  { id: "b4", shelf: "bonds", title: "Distance Without Drift", image: "/experiences/wine.jpg", original: 95, price: 57, sold: 6 },
  { id: "b5", shelf: "bonds", title: "Agreements You Can Keep", image: "/experiences/candles.jpg", original: 130, price: 78 },
  { id: "b6", shelf: "bonds", title: "The Weekly Table", image: "/experiences/corridor.jpg", original: 50, price: 35, priority: true },

  { id: "i1", shelf: "intimacy", title: "Desire, Spoken Plainly", image: "/experiences/sheets.jpg", original: 150, price: 90, sold: 21, featured: true },
  { id: "i2", shelf: "intimacy", title: "Pace & Permission", image: "/experiences/rose.jpg", original: 180, price: 108 },
  { id: "i3", shelf: "intimacy", title: "The Aftercare Hour", image: "/experiences/marble.jpg", original: 70, price: 42, priority: true },
  { id: "i4", shelf: "intimacy", title: "The Unhurried Night", image: "/experiences/notebook.jpg", original: 220, price: 132, sold: 9 },
  { id: "i5", shelf: "intimacy", title: "A Curiosity Menu", image: "/experiences/incense.jpg", original: 60, price: 39, sold: 5 },
  { id: "i6", shelf: "intimacy", title: "Private Briefing", image: "/experiences/tea.jpg", original: 260, price: 156, unavailable: true },

  { id: "t1", shelf: "attraction", title: "Signal & Stillness", image: "/experiences/marble.jpg", original: 89, price: 36, sold: 40, featured: true },
  { id: "t2", shelf: "attraction", title: "Presence Under Pressure", image: "/experiences/corridor.jpg", original: 320, price: 148, sold: 22 },
  { id: "t3", shelf: "attraction", title: "The Low Voice", image: "/experiences/silk.jpg", original: 89, price: 54, sold: 17 },
  { id: "t4", shelf: "attraction", title: "Essentials Circle", image: "/experiences/candles.jpg", original: 175, price: 117 },
  { id: "t5", shelf: "attraction", title: "Chemistry in Conversation", image: "/experiences/wine.jpg", original: 47, price: 34, sold: 2, priority: true },
  { id: "t6", shelf: "attraction", title: "Text Without Theatre", image: "/experiences/notebook.jpg", original: 28, price: 18 },
  { id: "t7", shelf: "attraction", title: "The Short Note", image: "/experiences/rose.jpg", original: 18, price: 12, sold: 5 },
  { id: "t8", shelf: "attraction", title: "How the Evening Turns", image: "/experiences/sheets.jpg", original: 46, price: 38, sold: 2 },

  { id: "e1", shelf: "date", title: "Night, Rewritten", image: "/experiences/corridor.jpg", original: 197, price: 89, featured: true },
  { id: "e2", shelf: "date", title: "First Date Architecture", image: "/experiences/tea.jpg", original: 99, price: 49, sold: 23 },
  { id: "e3", shelf: "date", title: "Trust Your Read", image: "/experiences/incense.jpg", original: 49, price: 39 },
  { id: "e4", shelf: "date", title: "Dating After Fifty", image: "/experiences/rose.jpg", original: 180, price: 126 },
  { id: "e5", shelf: "date", title: "The Second Glass", image: "/experiences/marble.jpg", original: 20, price: 14, priority: true },
  { id: "e6", shelf: "date", title: "Anyone in the Room", image: "/experiences/silk.jpg", original: 40, price: 28, sold: 4 },
  { id: "e7", shelf: "date", title: "An Evening That Lands", image: "/experiences/candles.jpg", original: 26, price: 18, unavailable: true, sold: 2 },
  { id: "e8", shelf: "date", title: "City After Dark", image: "/experiences/wine.jpg", original: 75, price: 45, sold: 12 },
];

export const SESSIONS: Session[] = [
  {
    id: "hunt",
    name: "The Hunt",
    tag: "Live encounter",
    badge: "Live",
    summary: "A guided night through attention, pursuit, and the moment you stop chasing and start choosing.",
    image: "/experiences/corridor.jpg",
    original: 680,
    price: 420,
    spots: "3 slots",
    low: true,
  },
  {
    id: "seduction-arts",
    name: "Seduction Arts",
    tag: "Salon",
    badge: "Live",
    summary: "A small room. Voice, timing, and how an invitation is made without pressure.",
    image: "/experiences/silk.jpg",
    original: 520,
    price: 360,
    spots: "5 slots",
    low: false,
  },
  {
    id: "magnetism",
    name: "Dark Magnetism",
    tag: "Virtual circle",
    badge: "Virtual",
    summary: "A remote studio on presence: stillness, eye-line, and the story your body already tells.",
    image: "/experiences/marble.jpg",
    original: 240,
    price: 180,
    spots: "8 slots",
    low: false,
  },
  {
    id: "ritual",
    name: "The Ritual",
    tag: "Live encounter",
    badge: "Live",
    summary: "A structured evening of consent, pace, and ceremony. Terms are written before anyone arrives.",
    image: "/experiences/candles.jpg",
    original: 780,
    price: 540,
    spots: "2 slots",
    low: true,
  },
  {
    id: "devotion-session",
    name: "Devotion",
    tag: "Private pair",
    badge: "Private",
    summary: "For two. A hosted hour on repair, devotion, and what you are actually asking of each other.",
    image: "/experiences/rose.jpg",
    original: 400,
    price: 300,
    spots: "4 slots",
    low: false,
  },
  {
    id: "rites",
    name: "Sacred Rites",
    tag: "Live encounter",
    badge: "Live",
    summary: "Incense, quiet, and a rite you design. Nothing begins without a shared yes.",
    image: "/experiences/incense.jpg",
    original: 640,
    price: 480,
    spots: "2 slots",
    low: true,
  },
  {
    id: "veil",
    name: "The Veil",
    tag: "Virtual",
    badge: "Virtual",
    summary: "A filmed-nothing, audio-first session for people who want the dark without the room.",
    image: "/experiences/wine.jpg",
    original: 190,
    price: 150,
    spots: "12 slots",
    low: false,
  },
  {
    id: "after",
    name: "After Hours",
    tag: "Closed",
    badge: "Private",
    summary: "The late sitting is full this cycle. Leave an enquiry and the desk will name the next date.",
    image: "/experiences/sheets.jpg",
    original: 320,
    price: 260,
    spots: "Waitlist",
    low: true,
    soldOut: true,
  },
];

export function shelfLabel(id: ShelfId) {
  return SHELVES.find((s) => s.id === id)?.label ?? id;
}

export function frameFor(image: string) {
  const file = image.split("/").pop() ?? "";
  const focus: Record<string, string> = {
    "hero.jpg": "70% 58%",
    "corridor.jpg": "center 38%",
    "silk.jpg": "62% 58%",
    "notebook.jpg": "40% 58%",
    "wine.jpg": "center 64%",
    "candles.jpg": "center 72%",
    "rose.jpg": "34% 46%",
    "tea.jpg": "72% 70%",
    "marble.jpg": "center 42%",
    "sheets.jpg": "38% 52%",
    "incense.jpg": "center 58%",
    "signet.jpg": "center 42%",
  };
  return focus[file] ?? "center";
}

export function slotsLeft(item: Pick<Offering, "id" | "sold" | "unavailable">) {
  if (item.unavailable) return 0;
  if (item.sold == null) {
    const n = [...item.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return 6 + (n % 5);
  }
  if (item.sold >= 40) return 1;
  if (item.sold >= 25) return 2;
  if (item.sold >= 15) return 3;
  if (item.sold >= 8) return 5;
  return 7;
}

export function offeringFomo(item: Offering) {
  const slots = slotsLeft(item);
  if (item.unavailable || slots === 0) return { text: "Waitlist", hot: true };
  if (slots === 1) return { text: "Last slot", hot: true };
  if (slots <= 3) return { text: `Only ${slots} left`, hot: true };
  if (item.sold != null && item.sold >= 10) return { text: `${item.sold} taken`, hot: false };
  if (item.priority) return { text: "Priority", hot: false };
  return null;
}
