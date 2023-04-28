import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'catetory',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color'
    }),
    defineField({
      name: 'references',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'skillReference', }],
    }),
  ],
})
