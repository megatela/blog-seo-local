import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    
    // ESTOS SON LOS CAMPOS QUE ESTÁN CAUSANDO EL AVISO AMARILLO
    // Los declaramos temporalmente para que Sanity deje de dar error
    defineField({ name: 'metaDescription', type: 'text', title: 'Descripción SEO Antigua' }),
    defineField({ name: 'clientName', type: 'string', title: 'Nombre Cliente Antiguo' }),
    defineField({ 
      name: 'content', 
      type: 'array', 
      title: 'Editor Antiguo (Bloqueado)',
      of: [{type: 'block'}] 
    }),

    // ESTE ES TU NUEVO EDITOR (EL QUE VAMOS A USAR)
    defineField({
      name: 'body',
      title: 'Descripción del éxito',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }),
  ],
})
