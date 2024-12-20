import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'home_page',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
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
          name: 'video',
          title: 'Video',
          type: 'file',
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
          name: 'video',
          title: 'Video',
          type: 'file',
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
      name: 'solutionsSection',
      title: 'Sección de soluciones',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),

        defineField({
          type: 'array',
          name: 'solutions',
          title: 'Soluciones',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'soluciones',
              title: 'Soluciones',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {type: 'string', name: 'subtitle', title: 'Subtitulo'},
                {type: 'string', name: 'description', title: 'Descripción'},
                {type: 'string', name: 'button_text', title: 'Texto del botón'},
                {type: 'string', name: 'button_link', title: 'Enlace del botón'},
                {
                  type: 'array',
                  name: 'products_references',
                  title: 'Productos',
                  of: [{type: 'reference', name: 'product_ref', to: {type: 'product'}}],
                },
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
      name: 'showcaseSolutionsSection',
      title: 'Soluciones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'soluciones',
          fields: [
            {type: 'string', name: 'title', title: 'Título'},
            {type: 'string', name: 'subtitle', title: 'Subtitulo'},
            {type: 'string', name: 'description', title: 'Descripción'},
            {type: 'string', name: 'button_text', title: 'Texto del botón'},
            {type: 'string', name: 'button_link', title: 'Enlace del botón'},
            {type: 'reference', name: 'product', to: {type: 'product'}},
          ],
        }),
      ],
    }),
    defineField({
      name: 'secondctaProductSection',
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
          title: 'Video de fondo',
          name: 'backgroundVideo',
          type: 'file',
        }),
        defineField({
          title: 'Poster',
          name: 'poster',
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
      name: 'companyMision',
      type: 'object',
      title: 'Misión',
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
        // defineField({
        //   name: 'button_text',
        //   type: 'string',
        // }),
        // defineField({
        //   name: 'button_link',
        //   type: 'string',
        // }),
      ],
    }),
    defineField({
      name: 'companyValues',
      title: 'Valores',
      type: 'object',
      fields: [
        defineField({
          name: 'companyValuesArray',
          type: 'array',
          title: 'Lista de Valores',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'companyValue',
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
      name: 'team',
      title: 'Equipo',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'teamArray',
          type: 'array',
          title: 'Lista de Equipo',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'teamMembers',
              fields: [
                {type: 'string', name: 'name', title: 'Nombre'},
                {type: 'string', name: 'position', title: 'Posición'},
                {type: 'image', name: 'image', title: 'Imagen'},
                {type: 'url', name: 'linkedin', title: 'Linkedin'},
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'alliances',
      title: 'Alianzas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'alliancesArray',
          type: 'array',
          title: 'Lista de Alianzas',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'companyValue',
              title: 'Alianza',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {type: 'image', name: 'image', title: 'Imagen'},
                {type: 'url', name: 'externalLink', title: 'Enlace Externo'},
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'news',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'newsArray',
          type: 'array',
          title: 'Lista de Noticias',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'news',
              fields: [
                {type: 'string', name: 'title', title: 'Título'},
                {type: 'string', name: 'description', title: 'Descripción'},
                {type: 'image', name: 'image', title: 'Imagen'},
                {type: 'string', name: 'backgroundColor', title: 'Color de fondo'},
                {type: 'url', name: 'externalLink', title: 'Enlace Externo'},
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
