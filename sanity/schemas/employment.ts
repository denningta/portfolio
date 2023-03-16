import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'employment',
    title: 'Employment',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
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
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
                { 
                    type: 'projectReference',
                }
            ],
        }),
    ]
}) 
