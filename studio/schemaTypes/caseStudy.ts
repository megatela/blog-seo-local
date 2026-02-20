import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    
    // Añadimos este para que deje de dar error de "campo desconocido"
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
    }),

    defineField({ name: 'clientName', title: 'Nombre del Cliente', type: 'string' }),
    
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
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

    // ESTE ES EL CAMPO QUE TIENE QUE REAPARECER
    defineField({
      name: 'body',
      title: 'Descripción del éxito',
      description: 'Explica la estrategia: qué hiciste y qué resultados lograste.',
      type: 'array',
      of: [
        { type: 'block' }, 
        { type: 'image', options: { hotspot: true } }
      ],
    }),
  ],
})
