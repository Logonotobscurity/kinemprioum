import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { jsonLd } from "@/lib/discovery";
import appCss from "../styles.css?url";

const APP_NAME = "Kinemprioum";
const DESCRIPTION =
  "Kinemprioum is a private adult house for dungeon sessions and written study. Enquiry only, for ages 18 and older. No cart and no published prices.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "rating", content: "adult" },
      { name: "theme-color", content: "#0C0A09" },
      { property: "og:title", content: "Kinemprioum — private sessions and adult study" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:locale", content: "en" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kinemprioum — private sessions and adult study" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM brief" },
      { rel: "alternate", type: "text/markdown", href: "/llms-full.md", title: "Full brief" },
      { rel: "alternate", type: "application/json", href: "/ai.json", title: "Machine-readable site" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd()),
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("kinemprioum-adult")==="1")document.documentElement.dataset.adult="1"}catch(e){}',
          }}
        />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
