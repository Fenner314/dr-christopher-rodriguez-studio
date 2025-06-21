import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this section',
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Section title (optional)',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Choose a background color for this section',
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
      name: 'angled',
      title: 'Angled Section',
      type: 'boolean',
      description: 'Enable angled/geometric section design',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'array',
      description: 'Content blocks within this section',
      of: [
        {type: 'column'},
        {type: 'title'},
        {type: 'textBlock'},
        {type: 'button'},
        {type: 'youtubeVideo'},
        {type: 'mediaImage'},
        {type: 'gallery'},
        {type: 'testimonial'},
        {type: 'customComponent'},
      ],
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Additional visual styling options for this section',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      backgroundColor: 'backgroundColor',
    },
    prepare(selection: any) {
      const {title, label, backgroundColor} = selection
      return {
        title: title || label || 'Section',
        subtitle: backgroundColor ? `Background: ${backgroundColor}` : 'No background',
      }
    },
  },
})
