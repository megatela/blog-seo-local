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
      validation: (Rule) => Rule.required().error('El título es necesario para la web'),
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
      title: 'Descripción SEO (Tarjeta)',
      type: 'text',
      rows: 3,
      description: 'Este texto aparecerá en la caja de la página de inicio.',
    }),
    defineField({
      name: 'image', // <--- Este es el nombre que usaremos en Astro
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (SEO)',
          description: 'Importante para buscadores y accesibilidad.',
          validation: (Rule) => Rule.required(),
        }
      ],
    }),
    defineField({
      name: 'content',
      title: 'Contenido de la Guía Pilar',
      type: 'array',
      description: 'Aquí va el contenido largo que tus usuarios leerán.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Párrafo', value: 'normal' },
            { title: 'Título 1 (H1)', value: 'h1' },
            { title: 'Título 2 (H2)', value: 'h2' },
            { title: 'Título 3 (H3)', value: 'h3' },
            { title: 'Título 4 (H4)', value: 'h4' },
            { title: 'Cita', value: 'blockquote' },
          ],
          lists: [
            { title: 'Puntos', value: 'bullet' },
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
          title: 'Imagen interna',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ],
    }),
  ],
})
