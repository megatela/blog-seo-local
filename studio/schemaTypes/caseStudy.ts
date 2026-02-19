import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cluster',
      title: 'Clúster',
      type: 'reference',
      to: [{ type: 'cluster' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
    // CAMPO DE CONTENIDO REFORZADO
    defineField({
      name: 'content',
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      of: [
        { 
          type: 'block' // Esto DEBE mostrar el editor de texto
        },
        { 
          type: 'image',
          options: { hotspot: true }
        }
      ],
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
