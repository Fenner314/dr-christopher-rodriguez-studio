import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

export default defineConfig([
  {
    name: 'production',
    title: 'Production - Dr. Christopher Rodriguez',
    basePath: '/production',

    projectId: '1bfp4rqj',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), colorInput()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'test',
    title: 'Test - Dr. Christopher Rodriguez',
    basePath: '/test',

    projectId: '1bfp4rqj',
    dataset: 'test',

    plugins: [structureTool(), visionTool(), colorInput()],

    schema: {
      types: schemaTypes,
    },
  },
])
