import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'downloadItem',
  title: 'Download Item',
  type: 'document',
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
      name: 'filename',
      type: 'string',
      description: 'The filename of the file to download',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})
