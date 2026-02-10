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
      // Esta función es la que genera el botón. 
      // Si esto no lo activa, hay un problema de caché en Vercel.
      resolveProductionUrl: (prev, { document }) => {
        const slug = (document.slug as any)?.current
        if (!slug) return prev

        const baseUrl = 'https://blog-seo-local.vercel.app'

        // PRUEBA UNIVERSAL: Si tiene slug, mándalo a esta ruta
        // Esto nos dirá si el problema son los nombres de los esquemas
        if (document._type === 'caseStudy') {
          return `${baseUrl}/casos-de-exito/${slug}`
        }
        
        return `${baseUrl}/blog/${slug}`
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})