export default {
  name: 'cluster',
  title: 'Clúster de Contenido',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Clúster',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Descripción Corta (SEO)',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Contenido Detallado del Clúster',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}