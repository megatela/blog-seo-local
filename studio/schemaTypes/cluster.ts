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
      name: 'description',
      title: 'Descripción del Clúster',
      type: 'text',
      rows: 3,
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
      title: 'Contenido Detallado',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Párrafo', value: 'normal' },
            { title: 'Título 1', value: 'h1' }, // ESTO ES VITAL: Tu contenido tiene H1
            { title: 'Título 2', value: 'h2' },
            { title: 'Título 3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          lists: [
            { title: 'Viñetas', value: 'bullet' },
            { title: 'Números', value: 'number' },
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
        }
      ],
    }),
  ],
})