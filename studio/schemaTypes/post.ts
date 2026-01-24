import { defineField, defineType } from 'sanity';

export default defineType({
  name: "post",
  title: "Blog Post (Optimizado SEO)",
  type: "document",
  fields: [
    defineField({ 
      name: "title", 
      title: "H1 Title", 
      type: "string" 
    }),
    defineField({ 
      name: "mainImage", 
      title: "Imagen Principal", 
      type: "image",
      options: { hotspot: true } 
    }),
    defineField({ 
      name: "slug", 
      title: "Slug", 
      type: "slug", 
      options: { source: "title" } 
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