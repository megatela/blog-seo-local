import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'casoExito',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Caso',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas de Éxito',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Etiqueta (Ej: Clics)' },
            { name: 'value', type: 'string', title: 'Valor (Ej: +200%)' }
          ]
        }
      ]
    }),
    // ESTE ES EL CAMPO DEL EDITOR VISUAL
    defineField({
      name: 'body', 
      title: 'Descripción del éxito',
      description: 'Redacta aquí la estrategia y los resultados logrados.',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'}
          ]
        },
        { type: 'image' }
      ],
    }),
  ],
})
