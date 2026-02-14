import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artículos del Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Post',
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
      name: 'cluster',
      title: 'Clúster (Categoría)',
      type: 'reference',
      to: [{ type: 'cluster' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción (SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Lo ideal son menos de 160 caracteres.'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Contenido del Artículo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Párrafo', value: 'normal' },
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
    // NUEVOS CAMPOS DE CONVERSIÓN (CASO DE ÉXITO)
    defineField({
      name: 'relatedCaseStudy',
      title: 'Caso de Éxito Destacado',
      type: 'object',
      description: 'Vincula este post educativo con un resultado real para aumentar la conversión.',
      fields: [
        {
          name: 'caseStudyReference',
          title: 'Seleccionar Caso de Éxito',
          type: 'reference',
          to: [{ type: 'caseStudy' }], // Debe coincidir con el nombre del esquema de tus casos
        },
        {
          name: 'customAnchor',
          title: 'Anchor Text Personalizado',
          type: 'string',
          description: 'Ej: Mira cómo duplicamos las citas de una Clínica Dental...',
          validation: (Rule) => Rule.required(),
        }
      ],
    }),
  ],
})
