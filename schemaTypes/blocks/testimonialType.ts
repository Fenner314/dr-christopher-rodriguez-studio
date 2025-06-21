import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this testimonial',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote',
      validation: (Rule: any) => Rule.required(),
      rows: 4,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person giving the testimonial',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title/Position',
      type: 'string',
      description: 'Professional title or position (optional)',
    }),
    defineField({
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      description: 'Company or organization name (optional)',
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Profile photo of the person (optional)',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Star rating (1-5)',
      validation: (Rule: any) => Rule.min(1).max(5),
      options: {
        list: [
          {title: '1 Star', value: 1},
          {title: '2 Stars', value: 2},
          {title: '3 Stars', value: 3},
          {title: '4 Stars', value: 4},
          {title: '5 Stars', value: 5},
        ],
      },
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this testimonial',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      quote: 'quote',
      company: 'company',
    },
    prepare(selection: any) {
      const {title, quote, company} = selection
      const subtitle = company
        ? `${company} • ${quote?.substring(0, 50)}...`
        : quote?.substring(0, 50) + '...'
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
})
