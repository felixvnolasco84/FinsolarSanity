import {defineArrayMember, defineField,  defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
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
      name: 'ctaProductSection',
      title: 'Sección CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: 'Imagen de fondo',
          name: 'image',
          type: 'image',
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
      name: 'problemAndSolutionsSection',
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
      name: 'benefitsSection',
      title: 'Sección Beneficios',
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
          name: 'benefits',
          type: 'array',
          title: 'Beneficios',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'benefit',
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
          name: 'footer_text',
          title: 'Texto de pie de página',
          type: 'string',
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
          name: 'industries',
          type: 'array',
          title: 'Industria',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'industryValue',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {type: 'string', name: 'link', title: 'Enlace'},
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'faqs',
      type: 'array',
      title: 'Preguntas frecuentes',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          fields: [
            {type: 'string', name: 'title', title: 'Pregunta'},
            {type: 'array', name: 'body', title: 'Respuesta', of: [{type: 'block'}]},
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
