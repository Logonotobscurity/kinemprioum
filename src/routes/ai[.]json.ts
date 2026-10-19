import { createFileRoute } from "@tanstack/react-router";
import { aiJson, documentResponse, originFrom } from "@/lib/discovery";

export const Route = createFileRoute("/ai.json")({
  server: {
    handlers: {
      GET: async ({ request }) =>
        documentResponse(JSON.stringify(aiJson(originFrom(request)), null, 2), "application/json"),
    },
  },
});
