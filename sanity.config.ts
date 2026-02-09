import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// ... tus otras importaciones

export default defineConfig({
  // ... tu projectId, dataset, etc.

  plugins: [
    deskTool({
      structure: (S) => S.defaults(),
    }),
  ],

  document: {
    // Aquí es donde ocurre la magia del botón de Preview
    productionUrl: async (prev, context) => {
      const { document } = context
      
      // Solo queremos el botón para los posts
      if (document._type === 'post') {
        const slug = (document.slug as any)?.current
        const cluster = (document.cluster as any)?._ref 
          ? await context.getClient({apiVersion: '2023-01-01'}).fetch(
              `*[_id == $id][0].slug.current`, 
              { id: (document.cluster as any)._ref }
            )
          : 'sin-categoria'

        if (!slug) return prev

        // Cambia 'http://localhost:4321' por tu dominio real en producción si es necesario
        const params = new URLSearchParams()
        const baseUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost:4321' 
          : 'https://tu-dominio-real.com'

        return `${baseUrl}/${cluster}/${slug}`
      }

      return prev
    },
  },
})