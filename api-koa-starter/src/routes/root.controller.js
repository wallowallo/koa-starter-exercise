/**
 * Root GET Handler: Just return the API name.
 */
export async function root(ctx) {
  const payload = {a:1, b:'hello'};
  this.type = 'application/json';
  ctx.body = payload;
}
