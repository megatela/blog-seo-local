import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas' // Asegúrate de que esta ruta sea la correcta en tu proyecto

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',

  // Datos extraídos de tus variables de entorno
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

      // Configuración de la URL base (Local vs Producción)
      const baseUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:4321' 
        : 'https://blog-seo-local.vercel.app'

      // Lógica para Posts de Blog
      if (document._type === 'post') {
        const clusterSlug = await client.fetch(
          `*[_id == $id][0].slug.current`, 
          { id: (document.cluster as any)?._ref }
        )
        const clusterPath = clusterSlug || 'sin-categoria'
        return `${baseUrl}/${clusterPath}/${slug}`
      }

      // Lógica para Casos de Éxito
      if (document._type === 'casoDeExito') {
        // Asumiendo que la ruta en tu Astro es /casos-de-exito/[slug]
        return `${baseUrl}/casos-de-exito/${slug}`
      }

      return prev
    },
  },
})