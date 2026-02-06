import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  console.warn("⚠️ Advertencia: PUBLIC_SANITY_PROJECT_ID no está definido en el archivo .env");
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false, // true para velocidad en producción, false para datos frescos
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}