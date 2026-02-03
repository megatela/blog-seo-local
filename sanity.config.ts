import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemaTypes' // Al estar dentro de 'studio', la ruta es directa

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
})