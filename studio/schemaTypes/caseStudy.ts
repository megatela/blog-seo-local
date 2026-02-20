import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Descripción del éxito',
      type: 'array',
      of: [{ type: 'block' }] // Esto DEBERÍA forzar el editor visual
    }),
    // Añadimos un campo de texto simple para ver si al menos este carga
    defineField({
      name: 'testField',
      title: 'Campo de Prueba (Simple)',
      type: 'text',
    }),
  ],
})
