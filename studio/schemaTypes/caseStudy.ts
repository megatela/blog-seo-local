import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'body',
      title: 'Descripción del éxito',
      type: 'array',
      of: [
        { type: 'block' }, // Esto es el editor de texto
        { type: 'image', options: { hotspot: true } }
      ]
    }),
    // Mantenemos estos ocultos o al final para no molestar
    defineField({ name: 'metaDescription', type: 'text', title: 'SEO Desc' }),
  ],
})
