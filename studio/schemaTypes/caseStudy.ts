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
      description: 'Ej: Cómo duplicamos las citas de una Clínica Dental en Valencia' 
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
      name: 'clientName', 
      title: 'Nombre del Cliente', 
      type: 'string' 
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
      name: 'content', // Cambiado de 'body' a 'content' para Portable Text
      title: 'Contenido del Caso de Éxito',
      type: 'array',
      of: [
        { type: 'block' }, // Permite párrafos, títulos, listas
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (SEO)',
              description: 'Importante para accesibilidad y Google.',
              options: { isHighlighted: true } // Esto hace que aparezca visible sin entrar en menús
            }
          ]
        }
      ],
    }),
  ],
})
