import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudyNuevo', // CAMBIAMOS ESTO
  title: 'CASO PRUEBA TOTAL', // CAMBIAMOS ESTO
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Título' }),
    defineField({ name: 'slug', type: 'slug', title: 'URL Slug', options: { source: 'title' } }),
    defineField({ name: 'metaDescription', type: 'text', title: 'SEO' }),
    defineField({ name: 'body', type: 'array', title: 'Editor', of: [{ type: 'block' }] }),
  ],
})
