import { defineField, defineType } from 'sanity';

export default defineType({
  name: "post",
  title: "Blog Post (Optimizado SEO)",
  type: "document",
  fields: [
    defineField({ 
      name: "title", 
      title: "H1 Title", 
      type: "string",
      description: "Título principal que aparecerá en el post."
    }),
    defineField({ 
      name: "slug", 
      title: "Slug", 
      type: "slug", 
      options: { source: "title" },
      description: "URL amigable (ej: guia-google-business-profile)."
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "text",
      rows: 3,
      description: "Descripción resumida para Google (recomendado: 140-160 caracteres).",
      validation: Rule => Rule.max(160).warning("Es mejor no superar los 160 caracteres.")
    }),
    defineField({ 
      name: "mainImage", 
      title: "Imagen Principal", 
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto Alternativo (Alt Text)",
          description: "Describe la imagen para accesibilidad y SEO.",
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({ 
      name: "cluster", 
      title: "Clúster Relacionado", 
      type: "reference", 
      to: [{ type: "cluster" }] 
    }),
    defineField({ 
      name: "content", 
      title: "Contenido", 
      type: "array", 
      of: [{ type: "block" }] 
    })
  ]
});