import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cluster',
  title: 'Clúster de Contenido',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Clúster',
      type: 'string',
      validation: (Rule) => Rule.required().error('El título es obligatorio'),
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
      name: 'description',
      title: 'Descripción Corta (SEO)',
      type: 'text',
      rows: 3,
      description: 'Este texto se muestra en las tarjetas de la página de inicio.',
    }),
    defineField({
      name: 'image',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Contenido Detallado (Página Pilar)',
      type: 'array',
      description: 'Escribe aquí la guía completa para este clúster.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Párrafo', value: 'normal' },
            { title: 'Título 2 (H2)', value: 'h2' },
            { title: 'Título 3 (H3)', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          lists: [
            { title: 'Viñetas', value: 'bullet' },
            { title: 'Numeración', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          title: 'Imagen en el cuerpo del texto',
        }
      ],
    }),
  ],
})