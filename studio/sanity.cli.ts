import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qv6q15su',
    dataset: 'production'
  },
  studioHost: 'arquitecto-seo-local' // Esto evita la pregunta en la terminal
})