import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronRight, i as Menu, o as ChevronLeft, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as offLabel, c as SESSIONS, i as enquiryText, l as SHELVES, n as DESK_EMAIL, o as useHouse, r as deskMailHref, s as OFFERINGS, u as shelfLabel } from "./router-EHC29kyd.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPnNgEf_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "kinemprioum-adult";
function confirmAdult() {
	try {
		localStorage.setItem(KEY, "1");
	} catch {}
	document.documentElement.dataset.adult = "1";
}
function AgeGate() {
	const [left, setLeft] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "age-gate flex min-h-dvh flex-col justify-center bg-ink px-6 py-16 text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-3xl tracking-wide",
				children: [
					"KINEMP",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brass",
						children: "R"
					}),
					"IOUM"
				]
			}), left ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-5xl leading-none",
					children: "This door stays shut."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-mist",
					children: "The house is only for adults. You can turn back if that was a mistake."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLeft(false),
					className: "mt-8 h-12 w-full rounded-md border border-line text-sm text-ivory sm:w-auto sm:px-6",
					children: "Return"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs tracking-widest text-brass uppercase",
					children: "Adults only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl leading-none sm:text-6xl",
					children: "You must be 18 or older."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-mist",
					children: "Private sessions and study sit behind this door. Confirm your age to enter. This device remembers the answer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: confirmAdult,
						className: "h-12 rounded-md bg-brass px-5 text-sm font-medium text-ink",
						children: "Enter — I am 18 or older"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLeft(true),
						className: "h-12 rounded-md border border-line px-5 text-sm text-ivory",
						children: "Leave"
					})]
				})
			] })]
		})
	});
}
var CATEGORIES = [
	"General",
	"Dungeon Session",
	...SHELVES.map((s) => s.label)
];
function BookingDesk() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => !next && closeBooking(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "desk-dialog",
			"aria-describedby": "desk-blurb",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 border-b border-line px-4 py-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-3xl leading-none text-ivory",
							children: view === "list" ? "Your list" : "Request"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "desk-blurb",
							className: "mt-1 truncate text-sm text-mist",
							children: view === "list" ? "Kept on this device" : experience
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line text-ivory",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				view === "form" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
					experience,
					category,
					onSave: (entry) => {
						addEnquiry(entry);
						markSent();
						window.location.href = deskMailHref(entry);
						toast("Opening your mail app.");
					}
				}, `${experience}-${category}`),
				view === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SentNote, {
					experience,
					onList: openList,
					onAnother: () => openBooking(experience, category)
				}),
				view === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryList, {
					enquiries,
					onNew: () => openBooking("General Enquiry", "General"),
					onCopy: async (entry) => {
						const text = enquiryText(entry);
						try {
							await navigator.clipboard.writeText(text);
							toast("Copied. Send it to the desk.");
						} catch {
							toast("Copy blocked. Select the text from the form instead.");
						}
					}
				})
			]
		})] })
	});
}
function EnquiryForm({ experience, category, onSave }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(category);
	const [message, setMessage] = (0, import_react.useState)("");
	const [adult, setAdult] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-5",
		onSubmit: (e) => {
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
				message: message.trim()
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "fName",
				label: "Name",
				value: name,
				onChange: setName,
				autoComplete: "name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "fEmail",
				label: "Email",
				value: email,
				onChange: setEmail,
				type: "email",
				autoComplete: "email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "fPhone",
				label: "Phone (optional)",
				value: phone,
				onChange: setPhone,
				type: "tel",
				autoComplete: "tel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm text-mist",
				children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: cat,
					onChange: (e) => setCat(e.target.value),
					className: "mt-1 h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-ivory",
					children: CATEGORIES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm text-mist",
				children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: message,
					onChange: (e) => setMessage(e.target.value),
					rows: 4,
					placeholder: "Timing, boundaries, or the question you actually have.",
					className: "mt-1 w-full rounded-md border border-line bg-ink px-3 py-3 text-base text-ivory placeholder:text-mist/70"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-12 items-center gap-3 text-sm text-ivory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "fAdult",
					type: "checkbox",
					checked: adult,
					onChange: (e) => setAdult(e.target.checked),
					className: "size-5 accent-brass"
				}), "I am 18 or older and I agree to be contacted about this enquiry."]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-blush",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-auto h-12 rounded-md bg-brass text-sm font-medium text-ink",
				children: "Email the desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-mist",
				children: [
					"Opens your mail app, already addressed to ",
					DESK_EMAIL,
					". You still tap send there."
				]
			})
		]
	});
}
function Field({ id, label, value, onChange, type = "text", autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-mist",
		htmlFor: id,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			value,
			autoComplete,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 h-12 w-full rounded-md border border-line bg-ink px-3 text-base text-ivory"
		})]
	});
}
function SentNote({ experience, onList, onAnother }) {
	const latest = useHouse((s) => s.enquiries)[0];
	const toast = useHouse((s) => s.toast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl text-ivory",
				children: "Held."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-mist",
				children: [
					"A draft for ",
					experience,
					" should be open in your mail app, addressed to ",
					DESK_EMAIL,
					". If nothing opened, use Open mail. A copy also stays on this device."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-12 flex-1 rounded-md bg-brass text-sm font-medium text-ink",
					onClick: async () => {
						if (!latest) return;
						try {
							await navigator.clipboard.writeText(enquiryText(latest));
							toast("Copied.");
						} catch {
							toast("Copy was blocked in this browser.");
						}
					},
					children: "Copy for email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "inline-flex h-12 flex-1 items-center justify-center rounded-md border border-line text-sm text-ivory",
					href: latest ? deskMailHref(latest) : deskMailHref(),
					children: "Open mail"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onList,
				className: "h-12 rounded-md border border-line text-sm text-ivory",
				children: "View your list"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAnother,
				className: "text-sm text-mist underline",
				children: "Write another"
			})
		]
	});
}
function EnquiryList({ enquiries, onNew, onCopy }) {
	if (enquiries.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-4 px-4 py-6 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-mist",
			children: "Nothing held yet."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onNew,
			className: "h-12 rounded-md bg-brass text-sm font-medium text-ink",
			children: "New enquiry"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line",
			children: enquiries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "px-4 py-4 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-ivory",
						children: entry.experience
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-mist",
						children: [
							entry.name,
							" · ",
							entry.category
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-mist tabular-nums",
						children: new Date(entry.at).toLocaleString(void 0, {
							dateStyle: "medium",
							timeStyle: "short"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onCopy(entry),
						className: "mt-2 h-11 text-sm text-brass-2",
						children: "Copy"
					})
				]
			}, entry.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-auto p-4 sm:p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onNew,
				className: "h-12 w-full rounded-md bg-brass text-sm font-medium text-ink",
				children: "New enquiry"
			})
		})]
	});
}
var POLICIES = [
	{
		id: "delivery",
		title: "Delivery",
		body: ["Study briefs are sent by email after an enquiry is accepted. Live and virtual sessions are scheduled with a written time, place or link, and a consent note.", "There is no silent checkout. Terms are confirmed by the desk."]
	},
	{
		id: "refund",
		title: "Refunds",
		body: ["A deposit for a live session is refundable until 72 hours before the agreed time. Inside that window it is kept, unless the house cancels.", "If the house cancels, the deposit is returned in full. A study brief, once delivered, is final."]
	},
	{
		id: "privacy",
		title: "Privacy",
		body: ["The enquiry form stays in your browser until you send it. It is not an account, and this page does not post it to a server.", `Email the desk opens your mail app, addressed to ${DESK_EMAIL}. Do not include anything you would not put in a letter.`]
	},
	{
		id: "terms",
		title: "Terms",
		body: ["Kinemprioum offers private adult experiences and study. Listings are invitations to enquire, not a contract.", "You must be 18 or older. The house may refuse any enquiry. Settlement is discussed only after acceptance."]
	},
	{
		id: "consent",
		title: "Consent & safety",
		body: ["Every live session starts from a written yes. Either person can stop. Aftercare is part of the time, not an extra.", "No one is pressured, recorded, or surprised. If a boundary is unclear, the session does not begin."]
	}
];
function Footer() {
	const openBooking = useHouse((s) => s.openBooking);
	const [policy, setPolicy] = (0, import_react.useState)(null);
	const active = POLICIES.find((p) => p.id === policy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl tracking-wide text-ivory",
						children: [
							"KINEMP",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brass",
								children: "R"
							}),
							"IOUM"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: "The Inner Sanctum · Dungeon experiences"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
									href: "#top",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
									href: "#founder",
									children: "About the house"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
									href: "#sessions",
									children: "Dungeon sessions"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
									href: "#highlights",
									children: "Study"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
									onClick: () => openBooking("General Enquiry", "General"),
									children: "Request an experience"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: "Experiences"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
								href: "#sessions",
								children: "The Hunt"
							}) }), SHELVES.slice(0, 5).map((shelf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
								href: `#${shelf.id}`,
								children: shelf.label
							}) }, shelf.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: "Policies"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 text-sm",
							children: POLICIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex min-h-11 items-center text-ivory hover:text-brass-2",
								onClick: () => setPolicy(item.id),
								children: item.title
							}) }, item.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 text-sm text-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "flex min-h-11 items-center break-all hover:text-brass-2",
								href: `mailto:${DESK_EMAIL}`,
								children: DESK_EMAIL
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex min-h-11 items-center hover:text-brass-2",
								onClick: () => openBooking("General Enquiry", "General"),
								children: "Book via form"
							}) })]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 border-t border-line pt-6 text-sm text-mist",
					children: "© 2026 Kinemprioum · All rights reserved"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-mist",
					children: "Settlement is discussed after an enquiry is accepted."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: policy != null,
			onOpenChange: (open) => !open && setPolicy(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "desk-dialog",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-4 py-3 sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-3xl text-ivory",
							children: active?.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: "House policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 overflow-y-auto px-4 py-5 text-sm text-mist sm:px-5",
					children: active?.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para))
				})]
			})] })
		})]
	});
}
function Founder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "founder",
		className: "scroll-mt-36 border-t border-line py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/experiences/signet.jpg",
					alt: "An antique brass signet ring on black velvet",
					width: 1280,
					height: 1280,
					loading: "lazy",
					className: "aspect-square w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: "About the house"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-ivory sm:text-5xl",
					children: "A desk, not a club."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-4 text-base text-mist",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kinemprioum is not a velvet rope and a mailing list. It is a small desk: live sessions when the room is right, and written study when it is not." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The founder keeps the circle narrow on purpose. Names stay off the door. What is offered is time, a clear brief, and a standard for how adults treat each other once the lights drop." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything begins as an enquiry. You must be 18 or older." })
					]
				})
			] })]
		})
	});
}
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6",
			children: [
				{
					n: "01",
					title: "Choose",
					body: "A dungeon session or a study from the shelves."
				},
				{
					n: "02",
					title: "Enquire",
					body: "Name, email, and the terms you need. No cart."
				},
				{
					n: "03",
					title: "Confirm",
					body: "The desk replies with a time and a consent note."
				}
			].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-brass tabular-nums",
					children: step.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl text-ivory",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-mist",
					children: step.body
				})
			] }, step.n))
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LINKS = [
	{
		href: "#sessions",
		label: "Sessions"
	},
	{
		href: "#highlights",
		label: "Study"
	},
	{
		href: "#founder",
		label: "The House"
	}
];
function Header({ query, onQuery, menuOpen, onMenu }) {
	const openBooking = useHouse((s) => s.openBooking);
	const openList = useHouse((s) => s.openList);
	const count = useHouse((s) => s.enquiries.length);
	const hydrated = useHouse((s) => s.hydrated);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-ink/92 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "shrink-0 font-display text-2xl tracking-wide text-ivory",
					children: [
						"KINEMP",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brass",
							children: "R"
						}),
						"IOUM"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-6 hidden items-center gap-6 lg:flex",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-mist hover:text-ivory",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative ml-auto hidden min-w-0 flex-1 max-w-xs md:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search the house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => onQuery(e.target.value),
							placeholder: "Search sessions and study",
							className: "h-11 w-full rounded-md border border-line bg-ink-2 pr-3 pl-9 text-sm text-ivory placeholder:text-mist/80"
						})
					]
				}),
				hydrated && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: openList,
					className: "hidden h-11 items-center rounded-md border border-line px-3 text-sm text-brass-2 sm:inline-flex",
					children: ["List", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 tabular-nums",
						children: count
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openBooking("General Enquiry", "General"),
					className: "hidden h-11 items-center rounded-md bg-brass px-4 text-sm font-medium text-ink sm:inline-flex",
					children: "Enquire"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory lg:hidden",
					"aria-expanded": menuOpen,
					"aria-label": menuOpen ? "Close menu" : "Open menu",
					onClick: () => onMenu(!menuOpen),
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line bg-ink px-4 py-4 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search the house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => onQuery(e.target.value),
							placeholder: "Search",
							className: "h-12 w-full rounded-md border border-line bg-ink-2 pr-3 pl-9 text-base text-ivory"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-1",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						onClick: () => onMenu(false),
						className: "flex h-12 items-center text-lg text-ivory",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-2",
					children: [hydrated && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "h-12 rounded-md border border-line text-sm text-brass-2",
						onClick: () => {
							onMenu(false);
							openList();
						},
						children: [
							"Your list (",
							count,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("h-12 rounded-md bg-brass text-sm font-medium text-ink", !(hydrated && count > 0) && "col-span-2"),
						onClick: () => {
							onMenu(false);
							openBooking("General Enquiry", "General");
						},
						children: "Enquire"
					})]
				})
			]
		})]
	});
}
function Hero() {
	const openBooking = useHouse((s) => s.openBooking);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "stage relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/experiences/hero.jpg",
				alt: "A candlelit private salon with an empty oxblood chair",
				className: "absolute inset-0 h-full w-full object-cover",
				width: 1600,
				height: 900
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/75 to-ink/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stage relative mx-auto flex max-w-7xl flex-col justify-end px-4 pt-8 pb-12 sm:px-6 sm:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass uppercase",
						children: "The Inner Sanctum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-6xl leading-none text-ivory sm:text-7xl lg:text-8xl",
						children: "Private rooms. Clear terms."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-ivory/90 sm:text-lg",
						children: "Dungeon sessions and adult study. Enquiry only. Limited slots. Nothing is added to a cart."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#sessions",
							className: "inline-flex h-12 items-center justify-center rounded-md bg-brass px-5 text-sm font-medium text-ink",
							children: "View sessions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => openBooking("General Enquiry", "General"),
							className: "inline-flex h-12 items-center justify-center rounded-md border border-ivory/30 bg-ink/40 px-5 text-sm text-ivory",
							children: "Request an experience"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 grid grid-cols-2 gap-4 border-t border-ivory/15 pt-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ivory",
							children: "18+ enquiry"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-mist",
							children: "Circle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ivory",
							children: "Limited slots"
						})] })]
					})
				]
			})
		]
	});
}
function Shelf({ id, items, forceOpen }) {
	const meta = id === "highlights" ? {
		label: "Highlights",
		kicker: "From the shelves",
		lede: "A short cut of what the desk is asked for most."
	} : SHELVES.find((s) => s.id === id);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	if (items.length === 0) return null;
	const open = forceOpen || expanded;
	const canToggle = !forceOpen && items.length > 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: id === "highlights" ? "highlights" : id,
		className: "scroll-mt-36 py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: meta.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl text-ivory sm:text-5xl",
							children: meta.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist sm:text-base",
							children: meta.lede
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn("min-w-0", !open && index >= 4 && "hidden", !open && index >= 4 && index < 8 && "xl:block"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferingCard, { item })
					}, item.id))
				}),
				canToggle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-6 flex justify-center", !open && items.length <= 8 && "xl:hidden"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setExpanded((v) => !v),
						className: "h-12 rounded-md border border-line px-5 text-sm text-ivory",
						children: expanded ? "Show less" : "Reveal more"
					})
				})
			]
		})
	});
}
function OfferingCard({ item }) {
	const openBooking = useHouse((s) => s.openBooking);
	const label = shelfLabel(item.shelf);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-3/2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					width: 1280,
					height: 853,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums",
					children: offLabel(item.original, item.price)
				}),
				item.unavailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 rounded-sm bg-ink/85 px-2 py-1 text-xs text-ivory",
					children: "Unavailable"
				}),
				item.priority && !item.unavailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 rounded-sm bg-brass px-2 py-1 text-xs font-medium text-ink",
					children: "Priority"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl leading-tight text-ivory",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: item.unavailable,
					onClick: () => openBooking(item.title, label),
					className: cn("mt-auto h-12 rounded-md text-sm font-medium", item.unavailable ? "border border-line text-mist" : "bg-ivory text-ink"),
					children: item.unavailable ? "Unavailable" : "Enquire"
				})
			]
		})]
	});
}
function featuredOfferings() {
	return OFFERINGS.filter((item) => item.featured);
}
function offeringsFor(id) {
	return OFFERINGS.filter((item) => item.shelf === id);
}
function Sessions() {
	const rail = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const openBooking = useHouse((s) => s.openBooking);
	const sync = () => {
		const el = rail.current;
		const card = el?.querySelector(".snap-card");
		if (!el || !card) return;
		const step = card.offsetWidth + 16;
		setIndex(Math.round(el.scrollLeft / step));
	};
	const go = (dir) => {
		const el = rail.current;
		const card = el?.querySelector(".snap-card");
		if (!el || !card) return;
		const step = card.offsetWidth + 16;
		const last = SESSIONS.length - 1;
		const next = Math.round(el.scrollLeft / step) + dir;
		if (next > last) el.scrollTo({
			left: 0,
			behavior: "smooth"
		});
		else if (next < 0) el.scrollTo({
			left: last * step,
			behavior: "smooth"
		});
		else el.scrollTo({
			left: next * step,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => go(1), 4800);
		return () => window.clearInterval(id);
	}, [paused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sessions",
		className: "scroll-mt-36 border-t border-line py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4 px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-brass uppercase",
							children: "Live & virtual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl text-ivory sm:text-5xl",
							children: "Dungeon Sessions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-md text-sm text-mist",
							children: "Enquiry only. Limited slots. A yes is written before a time is kept."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous session",
							onClick: () => go(-1),
							className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next session",
							onClick: () => go(1),
							className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: rail,
					className: "snap-rail mt-6",
					onScroll: sync,
					onMouseEnter: () => setPaused(true),
					onMouseLeave: () => setPaused(false),
					onTouchStart: () => setPaused(true),
					onTouchEnd: () => setPaused(false),
					onFocus: () => setPaused(true),
					onBlur: () => setPaused(false),
					children: SESSIONS.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, {
						session,
						onEnquire: () => openBooking(session.name, "Dungeon Session")
					}, session.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex justify-center gap-1 px-4",
					children: SESSIONS.map((session, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Show ${session.name}`,
						onClick: () => {
							const el = rail.current;
							const card = el?.querySelector(".snap-card");
							if (!el || !card) return;
							el.scrollTo({
								left: i * (card.offsetWidth + 16),
								behavior: "smooth"
							});
						},
						className: "grid h-11 w-6 place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 rounded-full bg-line", i === index ? "w-5 bg-brass" : "w-1.5") })
					}, session.id))
				})
			]
		})
	});
}
function SessionCard({ session, onEnquire }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "snap-card overflow-hidden rounded-lg border border-line bg-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-3/2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: session.image,
					alt: "",
					className: "h-full w-full object-cover",
					width: 1280,
					height: 853
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums",
					children: offLabel(session.original, session.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 rounded-sm bg-ink/85 px-2 py-1 text-xs tracking-wide text-brass-2 uppercase",
					children: session.badge
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: session.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl leading-none text-ivory",
					children: session.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-3 text-sm text-mist",
					children: session.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-end gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm", session.low ? "text-blush" : "text-mist"),
						children: session.spots
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onEnquire,
					className: "h-12 rounded-md bg-brass text-sm font-medium text-ink",
					children: session.soldOut ? "Join waitlist" : "Enquire"
				})
			]
		})]
	});
}
function Toasts() {
	const toasts = useHouse((s) => s.toasts);
	const dismiss = useHouse((s) => s.dismiss);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 px-4 pb-4",
		children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => dismiss(toast.id),
			className: "pointer-events-auto max-w-sm rounded-md border border-line bg-panel-2 px-4 py-3 text-sm text-ivory shadow-lg",
			children: toast.text
		}, toast.id))
	});
}
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "sessions",
		label: "Sessions"
	},
	{
		id: "highlights",
		label: "Highlights"
	},
	...SHELVES.map((shelf) => ({
		id: shelf.id,
		label: shelf.label
	}))
];
function Home() {
	const hydrate = useHouse((s) => s.hydrate);
	const openBooking = useHouse((s) => s.openBooking);
	const [query, setQuery] = (0, import_react.useState)("");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const scrollTo = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	const q = query.trim().toLowerCase();
	const searching = q.length > 1;
	(0, import_react.useEffect)(() => {
		const id = scrollTo.current;
		if (!id) return;
		scrollTo.current = null;
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [filter, q]);
	(0, import_react.useEffect)(() => {
		const onHash = () => {
			const id = window.location.hash.slice(1);
			if (!id || id === "top") {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			if (document.getElementById(id)) {
				document.getElementById(id)?.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
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
	const results = (0, import_react.useMemo)(() => {
		if (!searching) return {
			sessions: [],
			offerings: []
		};
		return {
			sessions: SESSIONS.filter((s) => `${s.name} ${s.tag} ${s.summary}`.toLowerCase().includes(q)),
			offerings: OFFERINGS.filter((o) => `${o.title} ${o.shelf}`.toLowerCase().includes(q))
		};
	}, [q, searching]);
	const showSessions = !searching && (filter === "all" || filter === "sessions");
	const showHighlights = !searching && (filter === "all" || filter === "highlights");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeGate, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house min-h-dvh bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#sessions",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brass focus:px-3 focus:py-2 focus:text-ink",
				children: "Skip to sessions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				query,
				onQuery: setQuery,
				menuOpen,
				onMenu: setMenuOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Shelves",
				className: "sticky top-16 z-30 border-b border-line bg-ink/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chip-rail mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6",
					children: FILTERS.map((item) => {
						const active = filter === item.id && !searching;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.id === "all" ? "#highlights" : `#${item.id}`,
							onClick: (event) => {
								event.preventDefault();
								const id = item.id === "all" ? "highlights" : item.id;
								scrollTo.current = id;
								setFilter(item.id);
								setQuery("");
								setMenuOpen(false);
							},
							className: cn("inline-flex h-11 shrink-0 items-center rounded-full border px-4 text-sm", active ? "border-brass bg-brass text-ink" : "border-line text-mist"),
							children: item.label
						}, item.id);
					})
				})
			}),
			searching ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl text-ivory",
					children: [
						"Results for “",
						query.trim(),
						"”"
					]
				}), results.sessions.length + results.offerings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-mist",
					children: "Nothing under that name. Try Hunt, Ritual, or Date."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 grid gap-3",
					children: [results.sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBooking(session.name, "Dungeon Session"),
						className: "flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl text-ivory",
							children: session.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-widest text-mist uppercase",
							children: "Session"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums",
							children: offLabel(session.original, session.price)
						})]
					}) }, session.id)), results.offerings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBooking(item.title, shelfLabel(item.shelf)),
						className: "flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl text-ivory",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-widest text-mist uppercase",
							children: shelfLabel(item.shelf)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-wine px-2 py-1 text-xs font-medium text-ivory tabular-nums",
							children: offLabel(item.original, item.price)
						})]
					}) }, item.id))]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				showSessions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sessions, {}),
				showHighlights && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
					id: "highlights",
					items: featuredOfferings(),
					forceOpen: filter === "highlights"
				}),
				SHELVES.map((shelf) => filter === "all" || filter === shelf.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
					id: shelf.id,
					items: offeringsFor(shelf.id),
					forceOpen: filter === shelf.id
				}, shelf.id) : null)
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founder, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDesk, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toasts, {})
		]
	})] });
}
//#endregion
export { Home as component };
