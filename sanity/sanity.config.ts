import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { colorInput } from '@sanity/color-input'
import CustomField from './components/ProjectReferenceField'

export default defineConfig({
    name: 'default',
    title: 'portfolio',

    projectId: 'j7795n6l',
    dataset: 'production',

    plugins: [
        deskTool(),
        visionTool(),
        iconPicker(),
        colorInput(),
    ],

    schema: {
        types: schemaTypes,
    },


    form: {
        components: {
            field: (props) => {
                if (props.name === 'skills' || props.name === 'projects') {
                    return CustomField(props) 
                } 
                return props.renderDefault(props)
            }
        }
    }
})
