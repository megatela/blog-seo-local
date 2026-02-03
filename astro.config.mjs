import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Importación estable para Astro 4

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true } // Esto a veces ayuda a inicializar correctamente el adaptador
  }),
  integrations: [
    react(),
    sanity({
      projectId: 'qv6q15su',
      dataset: 'production',
      studioBasePath: '/studio',
    }),
  ],
});