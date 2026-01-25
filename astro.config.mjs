import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "qv6q15su", // Tu ID de proyecto
      dataset: "production",
      useCdn: true,
      stega: {
        enabled: false,
      },
    }),
  ],
});