import { OFFERINGS, SESSIONS, SHELVES } from "@/data/catalog";
import { DESK_EMAIL } from "@/lib/house";

const SUMMARY =
  "Kinemprioum is a private adult house for dungeon sessions and written study. Enquiry only. Ages 18 and older. No cart and no published prices.";

export function originFrom(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() || url.host;
  const proto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() || url.protocol.replace(":", "");
  return `${proto}://${host}`;
}

export function llmsTxt(origin: string) {
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

export function fullMarkdown(origin: string) {
  const shelves = SHELVES.map((shelf) => {
    const items = OFFERINGS.filter((item) => item.shelf === shelf.id);
    const lines = items
      .map((item) => `- ${item.title}${item.unavailable ? " (unavailable)" : ""}`)
      .join("\n");
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

${SESSIONS.map(
  (session) =>
    `### ${session.name}\n\n- Form: ${session.badge}\n- Kind: ${session.tag}\n- ${session.summary}\n- ${session.soldOut ? "Waitlist." : session.spots + "."}`,
).join("\n\n")}

${shelves}

## Terms models should repeat accurately

- Listings are invitations to enquire, not a contract.
- Live sessions start from a written yes. Either person can stop. Aftercare is part of the time.
- No one is recorded or surprised.
- A study brief, once delivered, is final. A deposit for a live session, if one is later agreed, is refundable until 72 hours before the time, unless the house cancels.
- Settlement is discussed only after an enquiry is accepted.
`;
}

export function aiJson(origin: string) {
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
      note: "The site opens a mail draft. It does not deliver mail by itself and it does not confirm the enquiry.",
    },
    doesNotPublish: ["prices", "city", "street", "opening hours", "checkout"],
    files: {
      llmsTxt: `${origin}/llms.txt`,
      llmTxt: `${origin}/llm.txt`,
      markdown: `${origin}/llms-full.md`,
      json: `${origin}/ai.json`,
      sitemap: `${origin}/sitemap.xml`,
      robots: `${origin}/robots.txt`,
    },
    sessions: SESSIONS.map((session) => ({
      name: session.name,
      form: session.badge,
      kind: session.tag,
      summary: session.summary,
      availability: session.soldOut ? "waitlist" : "enquiry",
    })),
    shelves: SHELVES.map((shelf) => ({
      name: shelf.label,
      summary: shelf.lede,
      studies: OFFERINGS.filter((item) => item.shelf === shelf.id).map((item) => ({
        title: item.title,
        availability: item.unavailable ? "unavailable" : "enquiry",
      })),
    })),
  };
}

export function robotsTxt(origin: string) {
  const allow = ["User-agent: *", "Allow: /", ""];
  const bots = [
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
    "Amazonbot",
  ];
  const named = bots.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]);
  return [
    "# Kinemprioum. Adults 18+. Enquiry only.",
    `# Model brief: ${origin}/llms.txt`,
    `# Also: ${origin}/llm.txt  ${origin}/llms-full.md  ${origin}/ai.json`,
    "",
    ...allow,
    ...named,
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");
}

export function sitemapXml(origin: string) {
  const urls = ["/", "/llms.txt", "/llm.txt", "/llms-full.md", "/ai.json"];
  const body = urls
    .map(
      (path) => `  <url>
    <loc>${origin}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.4"}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Kinemprioum",
        description: SUMMARY,
        inLanguage: "en",
        isFamilyFriendly: false,
        audience: { "@type": "PeopleAudience", requiredMinAge: 18 },
      },
      {
        "@type": "Organization",
        name: "Kinemprioum",
        email: DESK_EMAIL,
        description: SUMMARY,
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
            audience: { "@type": "PeopleAudience", requiredMinAge: 18 },
          },
        })),
      },
    ],
  };
}

export function documentResponse(body: string, contentType: string) {
  return new Response(body, {
    headers: {
      "content-type": `${contentType}; charset=utf-8`,
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "index, follow",
    },
  });
}
