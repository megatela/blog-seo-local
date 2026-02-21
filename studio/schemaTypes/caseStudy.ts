import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'metrics',
      title: 'Métricas Clave',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Etiqueta' },
          { name: 'value', type: 'string', title: 'Valor' }
        ]
      }]
    }),
    defineField({
      name: 'body', // Usamos un nombre fresco para evitar conflictos
      title: 'Descripción del éxito',
      description: 'Explica la estrategia y los resultados.',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})
