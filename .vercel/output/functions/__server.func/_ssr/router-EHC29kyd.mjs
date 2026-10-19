import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-EHC29kyd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SHELVES = [
	{
		id: "approach",
		label: "Approach",
		kicker: "The first minute",
		lede: "How to enter a room, open a conversation, and leave the other person glad you did."
	},
	{
		id: "seduction",
		label: "Seduction Arts",
		kicker: "Tempo",
		lede: "Timing, attention, and the difference between pursuit and an invitation."
	},
	{
		id: "devotion",
		label: "Devotion",
		kicker: "After the spark",
		lede: "Letters, repair, and the small ceremonies that keep a private bond alive."
	},
	{
		id: "bonds",
		label: "Bonds",
		kicker: "Two people",
		lede: "Agreements, hard talks, and calendars that still belong to both of you."
	},
	{
		id: "intimacy",
		label: "Intimacy",
		kicker: "Adults only",
		lede: "Pace, permission, and language for desire. Consent is the first term."
	},
	{
		id: "attraction",
		label: "Attraction",
		kicker: "Presence",
		lede: "Stillness, voice, and the signals people actually answer."
	},
	{
		id: "date",
		label: "The Date",
		kicker: "The evening",
		lede: "How a night is built, read, and ended without theatre."
	}
];
var OFFERINGS = [
	{
		id: "a1",
		shelf: "approach",
		title: "First Twelve Minutes",
		image: "/experiences/notebook.jpg",
		original: 89,
		price: 36,
		sold: 40,
		featured: true
	},
	{
		id: "a2",
		shelf: "approach",
		title: "Room Reading",
		image: "/experiences/marble.jpg",
		original: 120,
		price: 72,
		sold: 18
	},
	{
		id: "a3",
		shelf: "approach",
		title: "The Quiet Open",
		image: "/experiences/notebook.jpg",
		original: 64,
		price: 48,
		priority: true
	},
	{
		id: "a4",
		shelf: "approach",
		title: "Barlight",
		image: "/experiences/wine.jpg",
		original: 150,
		price: 90,
		sold: 11
	},
	{
		id: "a5",
		shelf: "approach",
		title: "Voice, Not Volume",
		image: "/experiences/marble.jpg",
		original: 80,
		price: 56
	},
	{
		id: "a6",
		shelf: "approach",
		title: "A Clean Exit",
		image: "/experiences/corridor.jpg",
		original: 45,
		price: 32,
		sold: 27,
		priority: true
	},
	{
		id: "s1",
		shelf: "seduction",
		title: "Charisma Studio",
		image: "/experiences/silk.jpg",
		original: 420,
		price: 96,
		sold: 64,
		featured: true
	},
	{
		id: "s2",
		shelf: "seduction",
		title: "Tempo & Tension",
		image: "/experiences/candles.jpg",
		original: 220,
		price: 99,
		sold: 22
	},
	{
		id: "s3",
		shelf: "seduction",
		title: "The Long Look",
		image: "/experiences/silk.jpg",
		original: 89,
		price: 54,
		sold: 17
	},
	{
		id: "s4",
		shelf: "seduction",
		title: "Silk & Timing",
		image: "/experiences/sheets.jpg",
		original: 175,
		price: 117
	},
	{
		id: "s5",
		shelf: "seduction",
		title: "After the Laugh",
		image: "/experiences/wine.jpg",
		original: 47,
		price: 34,
		sold: 2,
		priority: true
	},
	{
		id: "s6",
		shelf: "seduction",
		title: "Invitation, Not Chase",
		image: "/experiences/rose.jpg",
		original: 110,
		price: 66,
		featured: true
	},
	{
		id: "d1",
		shelf: "devotion",
		title: "Letters After Midnight",
		image: "/experiences/rose.jpg",
		original: 60,
		price: 36,
		priority: true
	},
	{
		id: "d2",
		shelf: "devotion",
		title: "Keeping the Flame",
		image: "/experiences/candles.jpg",
		original: 140,
		price: 84,
		sold: 19,
		featured: true
	},
	{
		id: "d3",
		shelf: "devotion",
		title: "Repair in One Evening",
		image: "/experiences/tea.jpg",
		original: 90,
		price: 54
	},
	{
		id: "d4",
		shelf: "devotion",
		title: "Without Performance",
		image: "/experiences/rose.jpg",
		original: 75,
		price: 48
	},
	{
		id: "d5",
		shelf: "devotion",
		title: "The Return",
		image: "/experiences/corridor.jpg",
		original: 200,
		price: 110,
		sold: 8
	},
	{
		id: "d6",
		shelf: "devotion",
		title: "Small Ceremonies",
		image: "/experiences/incense.jpg",
		original: 40,
		price: 28,
		priority: true,
		sold: 31
	},
	{
		id: "b1",
		shelf: "bonds",
		title: "Two Calendars",
		image: "/experiences/tea.jpg",
		original: 120,
		price: 72,
		sold: 14
	},
	{
		id: "b2",
		shelf: "bonds",
		title: "A Soft Room for Hard Talk",
		image: "/experiences/notebook.jpg",
		original: 160,
		price: 96,
		featured: true
	},
	{
		id: "b3",
		shelf: "bonds",
		title: "Jealousy, Named",
		image: "/experiences/tea.jpg",
		original: 80,
		price: 52,
		sold: 9
	},
	{
		id: "b4",
		shelf: "bonds",
		title: "Distance Without Drift",
		image: "/experiences/wine.jpg",
		original: 95,
		price: 57,
		sold: 6
	},
	{
		id: "b5",
		shelf: "bonds",
		title: "Agreements You Can Keep",
		image: "/experiences/marble.jpg",
		original: 130,
		price: 78
	},
	{
		id: "b6",
		shelf: "bonds",
		title: "The Weekly Table",
		image: "/experiences/tea.jpg",
		original: 50,
		price: 35,
		priority: true
	},
	{
		id: "i1",
		shelf: "intimacy",
		title: "Desire, Spoken Plainly",
		image: "/experiences/sheets.jpg",
		original: 150,
		price: 90,
		sold: 21,
		featured: true
	},
	{
		id: "i2",
		shelf: "intimacy",
		title: "Pace & Permission",
		image: "/experiences/silk.jpg",
		original: 180,
		price: 108
	},
	{
		id: "i3",
		shelf: "intimacy",
		title: "The Aftercare Hour",
		image: "/experiences/candles.jpg",
		original: 70,
		price: 42,
		priority: true
	},
	{
		id: "i4",
		shelf: "intimacy",
		title: "The Unhurried Night",
		image: "/experiences/sheets.jpg",
		original: 220,
		price: 132,
		sold: 9
	},
	{
		id: "i5",
		shelf: "intimacy",
		title: "A Curiosity Menu",
		image: "/experiences/notebook.jpg",
		original: 60,
		price: 39,
		sold: 5
	},
	{
		id: "i6",
		shelf: "intimacy",
		title: "Private Briefing",
		image: "/experiences/marble.jpg",
		original: 260,
		price: 156,
		unavailable: true
	},
	{
		id: "t1",
		shelf: "attraction",
		title: "Signal & Stillness",
		image: "/experiences/marble.jpg",
		original: 89,
		price: 36,
		sold: 40,
		featured: true
	},
	{
		id: "t2",
		shelf: "attraction",
		title: "Presence Under Pressure",
		image: "/experiences/corridor.jpg",
		original: 320,
		price: 148,
		sold: 22
	},
	{
		id: "t3",
		shelf: "attraction",
		title: "The Low Voice",
		image: "/experiences/silk.jpg",
		original: 89,
		price: 54,
		sold: 17
	},
	{
		id: "t4",
		shelf: "attraction",
		title: "Essentials Circle",
		image: "/experiences/incense.jpg",
		original: 175,
		price: 117
	},
	{
		id: "t5",
		shelf: "attraction",
		title: "Chemistry in Conversation",
		image: "/experiences/wine.jpg",
		original: 47,
		price: 34,
		sold: 2,
		priority: true
	},
	{
		id: "t6",
		shelf: "attraction",
		title: "Text Without Theatre",
		image: "/experiences/notebook.jpg",
		original: 28,
		price: 18
	},
	{
		id: "t7",
		shelf: "attraction",
		title: "The Short Note",
		image: "/experiences/rose.jpg",
		original: 18,
		price: 12,
		sold: 5
	},
	{
		id: "t8",
		shelf: "attraction",
		title: "How the Evening Turns",
		image: "/experiences/candles.jpg",
		original: 46,
		price: 38,
		sold: 2
	},
	{
		id: "e1",
		shelf: "date",
		title: "Night, Rewritten",
		image: "/experiences/corridor.jpg",
		original: 197,
		price: 89,
		featured: true
	},
	{
		id: "e2",
		shelf: "date",
		title: "First Date Architecture",
		image: "/experiences/wine.jpg",
		original: 99,
		price: 49,
		sold: 23
	},
	{
		id: "e3",
		shelf: "date",
		title: "Trust Your Read",
		image: "/experiences/tea.jpg",
		original: 49,
		price: 39
	},
	{
		id: "e4",
		shelf: "date",
		title: "Dating After Fifty",
		image: "/experiences/rose.jpg",
		original: 180,
		price: 126
	},
	{
		id: "e5",
		shelf: "date",
		title: "The Second Glass",
		image: "/experiences/wine.jpg",
		original: 20,
		price: 14,
		priority: true
	},
	{
		id: "e6",
		shelf: "date",
		title: "Anyone in the Room",
		image: "/experiences/marble.jpg",
		original: 40,
		price: 28,
		sold: 4
	},
	{
		id: "e7",
		shelf: "date",
		title: "An Evening That Lands",
		image: "/experiences/candles.jpg",
		original: 26,
		price: 18,
		unavailable: true,
		sold: 2
	},
	{
		id: "e8",
		shelf: "date",
		title: "City After Dark",
		image: "/experiences/corridor.jpg",
		original: 75,
		price: 45,
		sold: 12
	}
];
var SESSIONS = [
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
		low: true
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
		low: false
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
		low: false
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
		low: true
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
		low: false
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
		low: true
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
		low: false
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
		soldOut: true
	}
];
function shelfLabel(id) {
	return SHELVES.find((s) => s.id === id)?.label ?? id;
}
var KEY = "kinemprioum-enquiries";
function readStored() {
	if (typeof localStorage === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((row) => !!row && typeof row === "object" && typeof row.id === "string" && typeof row.name === "string");
	} catch {
		return [];
	}
}
var useHouse = create((set, get) => ({
	bookingOpen: false,
	view: "form",
	experience: "General Enquiry",
	category: "General",
	toasts: [],
	enquiries: [],
	hydrated: false,
	hydrate: () => set({
		enquiries: readStored(),
		hydrated: true
	}),
	openBooking: (experience, category = "General") => set({
		bookingOpen: true,
		view: "form",
		experience: experience || "General Enquiry",
		category
	}),
	openList: () => set({
		bookingOpen: true,
		view: "list"
	}),
	closeBooking: () => set({ bookingOpen: false }),
	markSent: () => set({ view: "sent" }),
	toast: (text) => {
		const id = crypto.randomUUID();
		set((s) => ({ toasts: [...s.toasts, {
			id,
			text
		}] }));
		window.setTimeout(() => get().dismiss(id), 3400);
	},
	dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
	addEnquiry: (entry) => {
		const enquiry = {
			...entry,
			id: crypto.randomUUID(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const enquiries = [enquiry, ...get().enquiries].slice(0, 40);
		set({ enquiries });
		try {
			localStorage.setItem(KEY, JSON.stringify(enquiries));
		} catch {}
		return enquiry;
	}
}));
function offLabel(original, price) {
	return `-${Math.round((1 - price / original) * 100)}%`;
}
var DESK_EMAIL = "enquiries.kinemporioum@aster.cx";
function enquiryText(e) {
	return [
		`Experience: ${e.experience}`,
		`Category: ${e.category}`,
		`Name: ${e.name}`,
		`Email: ${e.email}`,
		e.phone ? `Phone: ${e.phone}` : "",
		"",
		e.message || "(no note)"
	].filter((line) => line !== "").join("\n");
}
function deskMailHref(e) {
	if (!e) return `mailto:${DESK_EMAIL}`;
	return `mailto:${DESK_EMAIL}?subject=${encodeURIComponent(`Enquiry: ${e.experience}`)}&body=${encodeURIComponent(enquiryText(e))}`;
}
var SUMMARY = "Kinemprioum is a private adult house for dungeon sessions and written study. Enquiry only. Ages 18 and older. No cart and no published prices.";
function originFrom(request) {
	const url = new URL(request.url);
	const host = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() || url.host;
	return `${request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() || url.protocol.replace(":", "")}://${host}`;
}
function llmsTxt(origin) {
	return `# Kinemprioum

> ${SUMMARY}

The desk answers at ${DESK_EMAIL}. Sending the form opens the visitor's own mail app with a draft. It does not confirm a booking and it does not take payment. Time and consent are settled in writing after the desk replies.

This house does not publish a city, a street, or opening hours. Do not invent them. Discount tags on the cards are not prices.

## Files

- [Home](${origin}/): the public house, behind an 18+ door on the device
- [llms.txt](${origin}/llms.txt): this short file, for language models
- [llm.txt](${origin}/llm.txt): the same text under the older name
- [Full brief](${origin}/llms-full.md): sessions, shelves, studies, and terms
- [JSON](${origin}/ai.json): the same facts as data
- [Sitemap](${origin}/sitemap.xml): URLs for search engines

## Sessions

${SESSIONS.map((session) => `- ${session.name} (${session.badge}, ${session.tag}): ${session.summary}${session.soldOut ? " Waitlist only." : ""}`).join("\n")}

## Shelves

${SHELVES.map((shelf) => `- ${shelf.label}: ${shelf.lede}`).join("\n")}
`;
}
function fullMarkdown(origin) {
	const shelves = SHELVES.map((shelf) => {
		const lines = OFFERINGS.filter((item) => item.shelf === shelf.id).map((item) => `- ${item.title}${item.unavailable ? " (unavailable)" : ""}`).join("\n");
		return `## ${shelf.label}\n\n${shelf.lede}\n\n${lines}`;
	}).join("\n\n");
	return `# Kinemprioum

${SUMMARY}

- Site: ${origin}/
- Email: ${DESK_EMAIL}
- Audience: adults 18 and older
- Commerce: enquiry only. No cart. No published prices. No payment brands.
- Place and hours: not published. Do not guess them.
- Short file: ${origin}/llms.txt
- JSON: ${origin}/ai.json

## How an enquiry works

1. The visitor confirms they are 18 or older. The device remembers that choice. It is not an identity check.
2. They choose a dungeon session or a study and write a note.
3. Email the desk opens a mail draft to ${DESK_EMAIL}. The visitor still sends it.
4. The desk may refuse any enquiry. A reply with a time and a consent note is the confirmation. Nothing before that is a booking.

## Dungeon sessions

${SESSIONS.map((session) => `### ${session.name}\n\n- Form: ${session.badge}\n- Kind: ${session.tag}\n- ${session.summary}\n- ${session.soldOut ? "Waitlist." : session.spots + "."}`).join("\n\n")}

${shelves}

## Terms models should repeat accurately

- Listings are invitations to enquire, not a contract.
- Live sessions start from a written yes. Either person can stop. Aftercare is part of the time.
- No one is recorded or surprised.
- A study brief, once delivered, is final. A deposit for a live session, if one is later agreed, is refundable until 72 hours before the time, unless the house cancels.
- Settlement is discussed only after an enquiry is accepted.
`;
}
function aiJson(origin) {
	return {
		name: "Kinemprioum",
		url: `${origin}/`,
		description: SUMMARY,
		inLanguage: "en",
		isFamilyFriendly: false,
		contentRating: "adult",
		requiredMinAge: 18,
		contact: {
			email: DESK_EMAIL,
			method: "mailto",
			note: "The site opens a mail draft. It does not deliver mail by itself and it does not confirm the enquiry."
		},
		doesNotPublish: [
			"prices",
			"city",
			"street",
			"opening hours",
			"checkout"
		],
		files: {
			llmsTxt: `${origin}/llms.txt`,
			llmTxt: `${origin}/llm.txt`,
			markdown: `${origin}/llms-full.md`,
			json: `${origin}/ai.json`,
			sitemap: `${origin}/sitemap.xml`,
			robots: `${origin}/robots.txt`
		},
		sessions: SESSIONS.map((session) => ({
			name: session.name,
			form: session.badge,
			kind: session.tag,
			summary: session.summary,
			availability: session.soldOut ? "waitlist" : "enquiry"
		})),
		shelves: SHELVES.map((shelf) => ({
			name: shelf.label,
			summary: shelf.lede,
			studies: OFFERINGS.filter((item) => item.shelf === shelf.id).map((item) => ({
				title: item.title,
				availability: item.unavailable ? "unavailable" : "enquiry"
			}))
		}))
	};
}
function robotsTxt(origin) {
	const allow = [
		"User-agent: *",
		"Allow: /",
		""
	];
	const named = [
		"GPTBot",
		"OAI-SearchBot",
		"ChatGPT-User",
		"Google-Extended",
		"Googlebot",
		"Bingbot",
		"anthropic-ai",
		"ClaudeBot",
		"Claude-SearchBot",
		"PerplexityBot",
		"Applebot-Extended",
		"CCBot",
		"cohere-ai",
		"Bytespider",
		"Meta-ExternalAgent",
		"Amazonbot"
	].flatMap((bot) => [
		`User-agent: ${bot}`,
		"Allow: /",
		""
	]);
	return [
		"# Kinemprioum. Adults 18+. Enquiry only.",
		`# Model brief: ${origin}/llms.txt`,
		`# Also: ${origin}/llm.txt  ${origin}/llms-full.md  ${origin}/ai.json`,
		"",
		...allow,
		...named,
		`Sitemap: ${origin}/sitemap.xml`,
		""
	].join("\n");
}
function sitemapXml(origin) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		"/",
		"/llms.txt",
		"/llm.txt",
		"/llms-full.md",
		"/ai.json"
	].map((path) => `  <url>
    <loc>${origin}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.4"}</priority>
  </url>`).join("\n")}
</urlset>
`;
}
function jsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				name: "Kinemprioum",
				description: SUMMARY,
				inLanguage: "en",
				isFamilyFriendly: false,
				audience: {
					"@type": "PeopleAudience",
					requiredMinAge: 18
				}
			},
			{
				"@type": "Organization",
				name: "Kinemprioum",
				email: DESK_EMAIL,
				description: SUMMARY
			},
			{
				"@type": "ItemList",
				name: "Dungeon sessions",
				itemListElement: SESSIONS.map((session, index) => ({
					"@type": "ListItem",
					position: index + 1,
					item: {
						"@type": "Service",
						name: session.name,
						description: session.summary,
						audience: {
							"@type": "PeopleAudience",
							requiredMinAge: 18
						}
					}
				}))
			}
		]
	};
}
function documentResponse(body, contentType) {
	return new Response(body, { headers: {
		"content-type": `${contentType}; charset=utf-8`,
		"cache-control": "public, max-age=3600",
		"x-robots-tag": "index, follow"
	} });
}
var styles_default = "/assets/styles-CZrTy3HY.css";
var APP_NAME = "Kinemprioum";
var DESCRIPTION = "Kinemprioum is a private adult house for dungeon sessions and written study. Enquiry only, for ages 18 and older. No cart and no published prices.";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "rating",
				content: "adult"
			},
			{
				name: "theme-color",
				content: "#0C0A09"
			},
			{
				property: "og:title",
				content: "Kinemprioum — private sessions and adult study"
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/og.jpg"
			},
			{
				property: "og:locale",
				content: "en"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Kinemprioum — private sessions and adult study"
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			},
			{
				name: "twitter:image",
				content: "/og.jpg"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "alternate",
				type: "text/plain",
				href: "/llms.txt",
				title: "LLM brief"
			},
			{
				rel: "alternate",
				type: "text/markdown",
				href: "/llms-full.md",
				title: "Full brief"
			},
			{
				rel: "alternate",
				type: "application/json",
				href: "/ai.json",
				title: "Machine-readable site"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(jsonLd())
		}]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "try{if(localStorage.getItem(\"kinemprioum-adult\")===\"1\")document.documentElement.dataset.adult=\"1\"}catch(e){}" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter = () => import("./routes-DPnNgEf_.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route$5 = createFileRoute("/ai.json")({ server: { handlers: { GET: async ({ request }) => documentResponse(JSON.stringify(aiJson(originFrom(request)), null, 2), "application/json") } } });
var Route$4 = createFileRoute("/llm.txt")({ server: { handlers: { GET: async ({ request }) => documentResponse(llmsTxt(originFrom(request)), "text/plain") } } });
var Route$3 = createFileRoute("/llms-full.md")({ server: { handlers: { GET: async ({ request }) => documentResponse(fullMarkdown(originFrom(request)), "text/markdown") } } });
var Route$2 = createFileRoute("/llms.txt")({ server: { handlers: { GET: async ({ request }) => documentResponse(llmsTxt(originFrom(request)), "text/plain") } } });
var Route$1 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async ({ request }) => documentResponse(robotsTxt(originFrom(request)), "text/plain") } } });
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => documentResponse(sitemapXml(originFrom(request)), "application/xml") } } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AiDotjsonRoute: Route$5.update({
		id: "/ai.json",
		path: "/ai.json",
		getParentRoute: () => Route$7
	}),
	LlmDottxtRoute: Route$4.update({
		id: "/llm.txt",
		path: "/llm.txt",
		getParentRoute: () => Route$7
	}),
	LlmsFullDotmdRoute: Route$3.update({
		id: "/llms-full.md",
		path: "/llms-full.md",
		getParentRoute: () => Route$7
	}),
	LlmsDottxtRoute: Route$2.update({
		id: "/llms.txt",
		path: "/llms.txt",
		getParentRoute: () => Route$7
	}),
	RobotsDottxtRoute: Route$1.update({
		id: "/robots.txt",
		path: "/robots.txt",
		getParentRoute: () => Route$7
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { offLabel as a, SESSIONS as c, enquiryText as i, SHELVES as l, DESK_EMAIL as n, useHouse as o, deskMailHref as r, OFFERINGS as s, router_exports as t, shelfLabel as u };
