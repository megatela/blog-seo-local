import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision' // <--- 1. Importación añadida
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',
  projectId: 'qv6q15su', 
  dataset: 'production',
  plugins: [
    deskTool(), 
    visionTool(), // <--- 2. Plugin activado
  ],
  schema: {
    types: schemaTypes,
  },
  // Mantenemos tu configuración para Vercel
  form: {
    components: {
      input: (props) => props.renderDefault(props),
    }
  }
})