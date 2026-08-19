import { BRANDS } from "@/mocks/data";

// Real counterpart to the MSW handler in mocks/handlers.ts — MSW only
// intercepts requests in dev (see hooks/use-msw-ready.ts), so production
// needs this route serving the same data for GET /api/brands to resolve.
export async function GET() {
  return Response.json({ brands: BRANDS });
}
