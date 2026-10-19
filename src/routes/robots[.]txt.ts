import { createFileRoute } from "@tanstack/react-router";
import { documentResponse, originFrom, robotsTxt } from "@/lib/discovery";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => documentResponse(robotsTxt(originFrom(request)), "text/plain"),
    },
  },
});
