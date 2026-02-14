import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Casos de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Caso de Éxito',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción (SEO)',
      type: 'text',
      rows: 3,
      description: 'Breve resumen para Google (máx. 160 caracteres).',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen principal que se mostrará en el post y el listado.',
    }),
    defineField({
      name: 'content',
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      description: 'Editor completo para redactar la historia, metodología y resultados.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
        }
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas Rápidas',
      type: 'array',
      description: 'Añade datos clave (Ej: +115% llamadas, 4 meses, etc.)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta', type: 'string' },
            { name: 'value', title: 'Valor/Dato', type: 'string' }
          ]
        }
      ]
    }),
  ],
})
