import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// Añadimos /index para asegurar que Vite encuentre el archivo dentro de la carpeta
import { schemaTypes } from './schemaTypes/index' 

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',
  projectId: 'qv6q15su', 
  dataset: 'production',

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const { document, getClient } = context
      const client = getClient({ apiVersion: '2026-02-09' })
      const slug = (document.slug as any)?.current

      if (!slug) return prev

      const baseUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:4321' 
        : 'https://blog-seo-local.vercel.app'

      if (document._type === 'post') {
        const clusterSlug = await client.fetch(
          `*[_id == $id][0].slug.current`, 
          { id: (document.cluster as any)?._ref }
        )
        const clusterPath = clusterSlug || 'sin-categoria'
        return `${baseUrl}/${clusterPath}/${slug}`
      }

      if (document._type === 'casoDeExito') {
        return `${baseUrl}/casos-de-exito/${slug}`
      }

      return prev
    },
  },
})