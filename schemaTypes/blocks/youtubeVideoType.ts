import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this video',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      description: 'YouTube video URL',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Automatically play the video when loaded',
      initialValue: false,
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      description: 'Start video muted',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      description: 'Loop the video',
      initialValue: false,
    }),
    defineField({
      name: 'showControls',
      title: 'Show Controls',
      type: 'boolean',
      description: 'Show video player controls',
      initialValue: true,
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          {title: '16:9 (Widescreen)', value: '16:9'},
          {title: '4:3 (Standard)', value: '4:3'},
          {title: '1:1 (Square)', value: '1:1'},
          {title: '21:9 (Ultrawide)', value: '21:9'},
        ],
        layout: 'radio',
      },
      initialValue: '16:9',
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this video',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection: any) {
      const {title, url} = selection
      return {
        title: title,
        subtitle: url,
      }
    },
  },
})
