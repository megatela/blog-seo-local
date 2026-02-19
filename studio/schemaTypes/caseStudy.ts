import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    // Añadimos metaDescription para eliminar el error de "Unknown field"
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content', // Mantenemos este nombre que es el que busca tu Astro
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Métrica' },
            { name: 'value', type: 'string', title: 'Valor' }
          ]
        }
      ]
    }),
  ],
})
