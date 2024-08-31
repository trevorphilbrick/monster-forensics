import { httpAction } from "./_generated/server";

export const createImage = httpAction(async (ctx, request) => {
  const body = await request.json();

  return new Response(JSON.stringify(body), { status: 201 });
});
