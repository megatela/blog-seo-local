import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// Eliminamos la importación de visionTool que causa el error
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Local SEO Architect Admin',

  projectId: 'qv6q15su', 
  dataset: 'production',

  plugins: [
    deskTool(), 
    // Eliminamos visionTool() de la lista de plugins
  ],

  schema: {
    types: schemaTypes,
  },
})