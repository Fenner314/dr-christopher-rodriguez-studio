import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoGallery',
  title: 'Video Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this gallery',
    }),
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Optional title for the gallery',
    }),
    defineField({
      name: 'layout',
      title: 'Gallery Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'List', value: 'list'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      title: 'Number of Columns',
      type: 'number',
      description: 'Number of columns in grid layout (1-4)',
      validation: (Rule: any) => Rule.min(1).max(4),
      initialValue: 3,
      hidden: ({parent}: any) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'items',
      title: 'Videos',
      type: 'array',
      description: 'Add YouTube videos to this gallery',
      of: [{type: 'reference', to: [{type: 'youtubeVideo'}]}],
      validation: (Rule: any) => Rule.required().min(1),
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      items: 'items',
    },
    prepare(selection: any) {
      const {title, label, items} = selection
      const itemCount = items?.length || 0
      return {
        title: title || label || 'Video Gallery',
        subtitle: `${itemCount} video(s)`,
      }
    },
  },
})
