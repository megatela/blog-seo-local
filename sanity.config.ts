import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './studio/schemaTypes' 

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',
  projectId: 'qv6q15su', 
  dataset: 'production',

  plugins: [
    deskTool({
      // Esta es la forma más robusta de habilitar el botón de previsualización
      resolveProductionUrl: async (prev, context) => {
        const { document } = context
        const slug = (document.slug as any)?.current

        if (!slug) return prev

        const baseUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost:4321' 
          : 'https://blog-seo-local.vercel.app'

        // Rutas según el tipo de documento
        if (document._type === 'post') {
          // Usamos /blog/ como base para evitar conflictos de rutas
          return `${baseUrl}/blog/${slug}`
        }

        if (document._type === 'caseStudy') {
          return `${baseUrl}/casos-de-exito/${slug}`
        }

        return prev
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})