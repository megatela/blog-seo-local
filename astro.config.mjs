import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    sanity({
      projectId: 'qv6q15su',
      dataset: 'production',
      // Esto crea una ruta dedicada para el panel de administración
      studioBasePath: '/admin', 
    }),
  ],
  // Evita bucles de redirección por barras finales
  trailingSlash: 'never', 
});