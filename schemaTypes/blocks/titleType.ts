import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'title',
  title: 'Title',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this title',
    }),
    defineField({
      name: 'text',
      title: 'Title Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Heading Level',
      type: 'string',
      options: {
        list: [
          {title: 'Heading1', value: 'h1'},
          {title: 'Heading2', value: 'h2'},
          {title: 'Heading3', value: 'h3'},
          {title: 'Heading4', value: 'h4'},
          {title: 'Heading5', value: 'h5'},
          {title: 'Heading6', value: 'h6'},
        ],
        layout: 'radio',
      },
      initialValue: 'h2',
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Choose a color (optional)',
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
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this title',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      level: 'level',
      alignment: 'alignment',
    },
    prepare(selection: any) {
      const {title, level, alignment} = selection
      return {
        title: title,
        subtitle: `${level.toUpperCase()} • ${alignment}`,
      }
    },
  },
})
