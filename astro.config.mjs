import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Volvemos a serverless, el más estable para v7

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: 'qv6q15su',
      dataset: 'production',
      studioBasePath: '/studio',
    }),
  ],
});