import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    // Este campo DEBE llamarse 'content' para que tu Astro lo lea
    defineField({
      name: 'content',
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string' },
          { name: 'value', type: 'string' }
        ]
      }]
    }),
  ],
})
