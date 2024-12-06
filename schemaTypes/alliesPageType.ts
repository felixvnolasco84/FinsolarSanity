import {defineArrayMember, defineField, defineType} from 'sanity'

export const alliesPageType = defineType({
  name: 'allies_page',
  title: 'Allies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
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
      name: 'heroSection',
      title: 'Sección Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Imagen',
          type: 'image',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'button_text',
          title: 'Texto del botón',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'button_link',
          title: 'Enlace del botón',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'characteristicsSection',
      type: 'object',
      title: 'Sección de características',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Título',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'characteristics',
          type: 'array',
          title: 'Características',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'characteristic',
              title: 'Característica',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {type: 'string', name: 'description', title: 'Descripción'},
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
