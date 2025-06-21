import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customComponent',
  title: 'Custom Component',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'componentName',
      type: 'string',
      description: 'Name of the React component to render',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'props',
      type: 'text',
      description: 'Component props as JSON (optional)',
      validation: (Rule) =>
        Rule.custom((text: string | undefined) => {
          if (!text) return true
          try {
            JSON.parse(text)
            return true
          } catch (err) {
            return 'Must be valid JSON'
          }
        }),
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this block',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      component: 'component',
    },
  },
})
