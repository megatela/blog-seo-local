import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "qv6q15su",
      dataset: "production",
      useCdn: true,
      stega: { enabled: false },
    }),
    react(),
  ],
});