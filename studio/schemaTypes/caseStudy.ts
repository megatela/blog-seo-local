import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    
    // CAMPOS FANTASMA: Los incluimos para que Sanity se calme
    defineField({ name: 'metaDescription', type: 'text', title: 'SEO Desc' }),
    defineField({ name: 'clientName', type: 'string', title: 'Cliente' }),
    defineField({ name: 'content', type: 'array', of: [{type: 'block'}], title: 'Contenido Antiguo' }),

    // CAMPO NUEVO (EL QUE QUEREMOS USAR)
    defineField({
      name: 'body',
      title: 'Descripción del éxito (Editor Actual)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }),
  ],
})
