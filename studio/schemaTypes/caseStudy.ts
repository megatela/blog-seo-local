import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Título del Caso de Éxito', 
      type: 'string',
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
      description: 'Resumen para los resultados de búsqueda de Google.',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({ 
      name: 'clientName', 
      title: 'Nombre del Cliente', 
      type: 'string' 
    }),
    defineField({
      name: 'cluster',
      title: 'Clúster Relacionado',
      type: 'reference',
      to: [{ type: 'cluster' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (SEO)',
        }
      ]
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas Clave',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Métrica' },
          { name: 'value', type: 'string', title: 'Valor' }
        ]
      }]
    }),
    defineField({
      name: 'content',
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      of: [
        { 
          type: 'block',
          // Esto asegura que el editor de texto enriquecido se cargue correctamente
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (SEO)',
              options: { isHighlighted: true }
            }
          ]
        }
      ],
    }),
  ],
})
