import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react'; // El panel de Sanity necesita React
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: 'qv6q15su',
      dataset: 'production',
      studioBasePath: '/studio', // Esto crea la URL /studio automáticamente
    }),
  ],
});