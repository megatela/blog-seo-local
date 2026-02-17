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
    // RECUERDA: Añadimos de nuevo la Meta Description para que no aparezca como error
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
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
      to: [{ type: 'cluster' }], // Asegúrate de que el tipo 'cluster' exista en tu proyecto
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
        { type: 'block' },
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
