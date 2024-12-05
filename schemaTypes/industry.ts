import {defineArrayMember, defineField, defineType} from 'sanity'

export const industryType = defineType({
  name: 'industry',
  title: 'Industria',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de Producto',
      type: 'string',
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
      name: 'subHeroSection',
      type: 'object',
      title: 'Subhero Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          type: 'image',
        }),
        defineField({
          name: 'button_text',
          type: 'string',
        }),
        defineField({
          name: 'button_link',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'problemsAndSolutionsSection',
      title: 'Sección Problemas y soluciones',
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
          name: 'problems',
          type: 'array',
          title: 'Problemas',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'problem',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {
                  type: 'string',
                  name: 'description',
                  title: 'Descripción',
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'solutions',
          type: 'array',
          title: 'Soluciones',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'solution',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {
                  type: 'string',
                  name: 'description',
                  title: 'Descripción',
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'industriesSection',
      title: 'Sección de Industrias',
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
          name: 'recomnedations',
          type: 'array',
          of: [{type: 'reference', to: {type: 'industry'}}],
          // validation: (rule) => rule.required(),
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
