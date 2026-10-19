import { createFileRoute } from "@tanstack/react-router";
import { documentResponse, fullMarkdown, originFrom } from "@/lib/discovery";

export const Route = createFileRoute("/llms-full.md")({
  server: {
    handlers: {
      GET: async ({ request }) => documentResponse(fullMarkdown(originFrom(request)), "text/markdown"),
    },
  },
});
