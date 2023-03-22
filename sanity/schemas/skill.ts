import { defineField, defineType } from "sanity";
import { preview } from "sanity-plugin-icon-picker"

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Skill',
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
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        outputFormat: 'react'
      }
    }),
    defineField({
      name: 'iconColor',
      title: 'Icon Color',
      type: 'color'
    }),
    defineField({
      name: 'altIcon',
      title: 'Alternate Icon',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare: ({ title, icon }) => {
      return {
        title: title,
        media: preview(icon)
      }
    }
  }
})
