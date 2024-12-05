import {defineField, defineType} from 'sanity'

export const projectListType = defineType({
  name: 'lista_proyectos',
  title: 'Lista de proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'Lista',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projecto'}}],
      validation: (rule) => rule.required(),
    }),
  ],
})
