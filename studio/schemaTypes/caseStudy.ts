import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    
    // 1. Añadimos metaDescription para que desaparezca el error amarillo
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
    }),

    defineField({ name: 'clientName', title: 'Nombre del Cliente', type: 'string' }),
    
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

    // 2. EL CAMPO CLAVE: Usamos 'body' para forzar un editor limpio
    defineField({
      name: 'body', 
      title: 'Descripción del éxito',
      description: 'Explica la estrategia y resultados.',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}, {title: 'H2', value: 'h2'}],
          lists: [{title: 'Bullet', value: 'bullet'}]
        },
        { type: 'image', options: { hotspot: true } }
      ],
    }),
  ],
})
