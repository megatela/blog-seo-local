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
      name: 'clientName', 
      title: 'Nombre del Cliente', 
      type: 'string' 
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen del Proyecto',
      type: 'image',
      options: { 
        hotspot: true // Permite elegir el foco de la imagen si se recorta
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (SEO)',
          description: 'Importante para Google. Describe la imagen (ej: Crecimiento SEO clínica dental)'
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
          { name: 'label', type: 'string', title: 'Métrica (ej: Llamadas)' },
          { name: 'value', type: 'string', title: 'Valor (ej: +150%)' }
        ]
      }]
    }),
    defineField({
      name: 'body',
      title: 'Descripción del éxito',
      type: 'text',
      description: 'Explica la estrategia: qué hiciste y qué resultados lograste.'
    }),
  ],
})