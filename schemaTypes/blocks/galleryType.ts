import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
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
      name: 'galleryType',
      title: 'Gallery Type',
      type: 'string',
      description: 'Type of content to display in the gallery',
      options: {
        list: [
          {title: 'Media Images', value: 'mediaImages'},
          {title: 'Testimonials', value: 'testimonials'},
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Gallery Layout',
      type: 'string',
      description: 'How the gallery items should be arranged',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Masonry', value: 'masonry'},
          {title: 'Carousel', value: 'carousel'},
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
      description: 'Number of columns in grid layout (1-6)',
      validation: (Rule: any) => Rule.min(1).max(6),
      initialValue: 3,
      hidden: ({parent}: any) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      description: 'Items to display in the gallery',
      of: [
        {
          type: 'reference',
          to: [{type: 'youtubeVideo'}, {type: 'mediaImage'}, {type: 'testimonial'}],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    }),
    defineField({
      name: 'showCaptions',
      title: 'Show Captions',
      type: 'boolean',
      description: 'Display captions/titles for gallery items',
      initialValue: true,
    }),
    defineField({
      name: 'enableLightbox',
      title: 'Enable Lightbox',
      type: 'boolean',
      description: 'Allow clicking to view items in a lightbox/modal',
      initialValue: true,
      hidden: ({parent}: any) => parent?.galleryType === 'testimonials',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay (Carousel)',
      type: 'boolean',
      description: 'Automatically advance carousel slides',
      initialValue: false,
      hidden: ({parent}: any) => parent?.layout !== 'carousel',
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      galleryType: 'galleryType',
      layout: 'layout',
      items: 'items',
    },
    prepare(selection: any) {
      const {title, label, galleryType, layout, items} = selection
      const itemCount = items?.length || 0
      return {
        title: title || label || 'Gallery',
        subtitle: `${galleryType} • ${layout} • ${itemCount} items`,
      }
    },
  },
})
