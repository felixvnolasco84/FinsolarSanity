import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'porcentaje_titulo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'porcentaje_cuerpo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'product_reference',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footer_info',
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
  ],
})
