// src/routes/components/[slug]/+page.js
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../${params.slug}.svelte`);
  // const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
  };
}
