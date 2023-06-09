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
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string'
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color'
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }]
    }),
    defineField({
      name: 'references',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'skillReference', }],
    }),
  ],
})
