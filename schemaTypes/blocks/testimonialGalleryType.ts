import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialGallery',
  title: 'Testimonial Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the testimonial gallery section',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gallery Image',
      type: 'image',
      description: 'Optional image to display with the testimonial gallery',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      description: 'List of testimonials to display in the gallery',
      validation: (Rule: any) => Rule.required().min(1),
      of: [
        {
          type: 'testimonial',
        },
      ],
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this testimonial gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      testimonialCount: 'testimonials',
      image: 'image',
    },
    prepare(selection: any) {
      const {title, testimonialCount, image} = selection
      const count = testimonialCount?.length || 0
      return {
        title: title || 'Testimonial Gallery',
        subtitle: `${count} testimonial${count !== 1 ? 's' : ''}`,
        media: image,
      }
    },
  },
})
