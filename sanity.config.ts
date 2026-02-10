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
      // Forzamos la URL directamente en el plugin de escritorio
      resolveProductionUrl: (prev, { document }) => {
        const slug = (document.slug as any)?.current
        if (!slug) return prev

        const baseUrl = 'https://blog-seo-local.vercel.app'

        if (document._type === 'caseStudy') {
          return `${baseUrl}/casos-de-exito/${slug}`
        }
        if (document._type === 'post') {
          return `${baseUrl}/blog/${slug}`
        }
        return prev
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})