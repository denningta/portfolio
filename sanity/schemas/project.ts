import {defineField, defineType} from 'sanity'

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
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'skillReference' }],
        }),
    ],
})
