import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './studio/schemaTypes'

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
  // Añadimos esto para que Vercel no se queje de las librerías visuales
  form: {
    components: {
      input: (props) => props.renderDefault(props),
    }
  }
})