import { CITIES_BY_BRAND } from "@/mocks/data";

// Real counterpart to the MSW handler in mocks/handlers.ts — see that file's
// comment on why this exists alongside the mock.
export async function GET(_req: Request, ctx: RouteContext<"/api/brands/[brandId]/cities">) {
  const { brandId } = await ctx.params;
  const cities = CITIES_BY_BRAND[brandId];

  if (!cities) {
    // Unknown brandId -> 404 per contract; CityPanel renders "no cities
    // available" rather than an error state.
    return new Response(null, { status: 404 });
  }

  return Response.json({ cities });
}
