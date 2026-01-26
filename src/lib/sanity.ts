// src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'qv6q15su', // Tu ID real
  dataset: 'production',
  useCdn: false, // 'false' para ver cambios al instante
  apiVersion: '2024-01-24', 
})
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}