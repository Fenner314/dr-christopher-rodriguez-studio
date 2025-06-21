import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'downloads',
  title: 'Downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title for this downloads section (optional)',
    }),
    defineField({
      name: 'items',
      title: 'Download Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'downloadItem'}]}],
      validation: (Rule) => Rule.required().min(1),
      description: 'Add downloadable items',
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
      itemCount: 'items.length',
    },
    prepare({title, itemCount = 0}) {
      return {
        title: title || 'Downloads Section',
        subtitle: `${itemCount} item${itemCount === 1 ? '' : 's'}`,
      }
    },
  },
})
