import { createFileRoute } from "@tanstack/react-router";
import { documentResponse, llmsTxt, originFrom } from "@/lib/discovery";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => documentResponse(llmsTxt(originFrom(request)), "text/plain"),
    },
  },
});
