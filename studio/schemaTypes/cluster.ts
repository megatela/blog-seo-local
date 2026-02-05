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
      title: 'Contenido Detallado del Clúster',
      type: 'array',
      description: 'Escribe aquí la guía completa. Usa H2 para las secciones principales.',
      of: [
        {
          type: 'block',
          // Esto habilita los encabezados en el editor
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
        },
      ],
    }),
  ],
})