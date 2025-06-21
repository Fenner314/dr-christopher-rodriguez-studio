import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'parallax',
      type: 'boolean',
      description: 'Enable parallax scrolling effect',
      initialValue: false,
    }),
    defineField({
      name: 'sectionColor',
      title: 'Section Color',
      type: 'string',
      description: 'Choose a section color',
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
      description: 'Visual styling options for this block',
    }),
  ],
})
