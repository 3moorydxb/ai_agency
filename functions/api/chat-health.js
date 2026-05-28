// Chat health probe. Used by the chat widget to decide whether to render.
// Returns { ok: true, ai_bound: <bool> }.
export async function onRequestGet(context) {
  const { env } = context;
  return new Response(JSON.stringify({ ok: true, ai_bound: !!(env && env.AI) }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}
