import { createFileRoute } from "@tanstack/react-router";
import { documentResponse, originFrom, sitemapXml } from "@/lib/discovery";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => documentResponse(sitemapXml(originFrom(request)), "application/xml"),
    },
  },
});
