import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Título del Caso de Éxito', 
      type: 'string' 
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
    // ESTE ES EL CAMPO QUE ESTÁ FALLANDO
    defineField({
      name: 'content',
      title: 'Contenido del Caso de Éxito', // Aquí puedes poner el texto que mencionas
      description: 'Explica la estrategia: qué hiciste y qué resultados lograste.',
      type: 'array',
      of: [
        {
          type: 'block', // ESTO ES LO QUE ACTIVA EL EDITOR DE TEXTO
        },
        {
          type: 'image', // ESTO PERMITE SUBIR IMÁGENES DENTRO DEL TEXTO
          options: { hotspot: true },
        }
      ]
    }),
    defineField({
      name: 'metrics',
      title: 'Métricas Clave',
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
