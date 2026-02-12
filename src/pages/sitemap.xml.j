import { client } from '../lib/sanity';

export async function GET() {
  // Traemos todos los clústeres y posts para el sitemap
  const data = await client.fetch(`{
    "clusters": *[_type == "cluster"]{ "slug": slug.current },
    "posts": *[_type == "post"]{ "slug": slug.current, "clusterSlug": cluster->slug.current }
  }`);

  const baseUrl = 'https://tu-dominio.com'; // REEMPLAZA CON TU URL REAL DE VERCEL

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${baseUrl}/</loc></url>
      <url><loc>${baseUrl}/contactame</loc></url>
      ${data.clusters.map(c => `
        <url><loc>${baseUrl}/${c.slug}</loc></url>
      `).join('')}
      ${data.posts.map(p => `
        <url><loc>${baseUrl}/${p.clusterSlug}/${p.slug}</loc></url>
      `).join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
