import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso de Éxito',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Nombre del Cliente', type: 'string' }),
    defineField({ name: 'metrics', title: 'Métricas Clave', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Métrica (ej: Llamadas)' },
        { name: 'value', type: 'string', title: 'Valor (ej: +50%)' }
      ]
    }]}),
  ],
})