import {defineType, defineField} from 'sanity'

interface ColorSelection {
  title: string
  value: string
}

export default defineType({
  name: 'colorPicker',
  title: 'Color',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Color',
    }),
    defineField({
      name: 'value',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value.hex',
    },
    prepare(selection: ColorSelection) {
      const {title, value} = selection
      return {
        title: title || 'Color',
        subtitle: value || '#000000',
      }
    },
  },
})
