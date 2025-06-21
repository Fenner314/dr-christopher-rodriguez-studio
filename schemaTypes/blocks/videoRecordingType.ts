import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoRecording',
  title: 'Video Recording',
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
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL',
      validation: (Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      organization: 'organization',
    },
    prepare(selection) {
      const {title, url, organization} = selection
      return {
        title: title,
        subtitle: `${organization ? organization + ' - ' : ''}${url}`,
      }
    },
  },
})
