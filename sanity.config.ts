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
      // Esto fuerza a Sanity a buscar la URL de previsualización
      resolveProductionUrl: async (prev, context) => {
        const { document, getClient } = context
        const client = getClient({ apiVersion: '2026-02-09' })
        const slug = (document.slug as any)?.current
        if (!slug) return prev

        const baseUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost:4321' 
          : 'https://blog-seo-local.vercel.app'

        if (document._type === 'post') {
          const clusterSlug = await client.fetch(`*[_id == $id][0].slug.current`, { id: (document.cluster as any)?._ref })
          return `${baseUrl}/${clusterSlug || 'sin-categoria'}/${slug}`
        }
        if (document._type === 'casoDeExito') {
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