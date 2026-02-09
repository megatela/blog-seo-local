import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// Ruta corregida según tu estructura de carpetas: /studio/schemaTypes/
import { schemaTypes } from './schemaTypes' 

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',

  // Credenciales verificadas de tu captura
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

      // Ajustado al nombre exacto que aparece en tu captura de Sanity: "Caso de Éxito"
      if (document._type === 'casoDeExito') {
        return `${baseUrl}/casos-de-exito/${slug}`
      }

      return prev
    },
  },
})