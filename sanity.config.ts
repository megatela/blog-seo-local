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
      // ESTO ES LO QUE ACTIVA EL BOTÓN "VIEW ON SITE" O "OPEN PREVIEW"
      structure: (S) => S.defaults(),
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const { document } = context
      const slug = (document.slug as any)?.current
      
      if (!slug) return prev

      const baseUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:4321' 
        : 'https://blog-seo-local.vercel.app'

      if (document._type === 'post') {
        return `${baseUrl}/blog/${slug}` 
      }

      if (document._type === 'caseStudy') {
        return `${baseUrl}/casos-de-exito/${slug}`
      }

      return prev
    },
  },
})