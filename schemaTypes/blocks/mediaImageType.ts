import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaImage',
  title: 'Media Image',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility (optional)',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'Width of the image (e.g., "300px", "50%", "auto")',
      initialValue: 'auto',
    }),
    defineField({
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'number',
      description: 'Border radius in pixels (0 for no border radius)',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this block',
    }),
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
          {title: 'Accent', value: 'var(--accent)'},
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

  preview: {
    select: {
      title: 'title',
      media: 'image',
      organization: 'organization',
    },
    prepare(selection) {
      const {title, media, organization} = selection
      return {
        title: title,
        media: media,
        subtitle: `${organization ? organization + ' - ' : ''}`,
      }
    },
  },
})
