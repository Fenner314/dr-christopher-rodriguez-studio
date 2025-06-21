import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'styleSettings',
  title: 'Style Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Choose a background color (optional)',
      options: {
        list: [
          {title: 'None', value: ''},
          {title: 'Primary', value: 'var(--primary)'},
          {title: 'Secondary', value: 'var(--secondary)'},
          {title: 'Dark', value: 'var(--bg-dark)'},
          {title: 'Light', value: 'var(--bg-light)'},
          {title: 'Gray', value: 'var(--gray)'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    }),
    defineField({
      name: 'customCSS',
      type: 'text',
      description: 'Add custom CSS styles (optional)',
      rows: 3,
    }),
  ],
})
