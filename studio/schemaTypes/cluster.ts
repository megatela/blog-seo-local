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
      description: 'Ejemplo: Google Business Profile o Inteligencia Artificial local',
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
      description: 'Este texto aparecerá en los resultados de Google y en las tarjetas del blog.',
    }),
    defineField({
      name: 'image',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true, // Permite elegir el foco de la imagen para que no se corte mal
      },
    }),
    defineField({
      name: 'content',
      title: 'Contenido Detallado del Clúster',
      type: 'array',
      description: 'Escribe aquí la guía completa del pilar de autoridad.',
      of: [
        {
          type: 'block',
          // Esto permite negritas, listas y enlaces estándar
        },
      ],
    }),
  ],
})