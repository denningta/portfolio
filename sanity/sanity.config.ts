import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { colorInput } from '@sanity/color-input'
import CustomField from './components/ProjectReferenceField'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import customDeskToolOptions from './desk-tool'


const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['me'])

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'j7795n6l',
  dataset: 'production',

  plugins: [
    deskTool(customDeskToolOptions),
    visionTool(),
    iconPicker(),
    colorInput(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },


  form: {
    components: {
      field: (props) => {
        if (props.name === 'references') {
          return CustomField(props)
        }
        return props.renderDefault(props)
      }
    }
  }
})
