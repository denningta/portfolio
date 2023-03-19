import { defineField, defineType } from 'sanity'


export default defineType({
  name: 'employment',
  title: 'Employment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Company',
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
      name: 'start',
      title: 'Start Date',
      type: 'date'
    }),
    defineField({
      name: 'end',
      title: 'End Date',
      type: 'date'
    }),
    defineField({
      name: 'references',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'projectReference' }],
    }),
  ]
}) 
