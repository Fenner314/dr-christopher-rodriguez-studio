import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The name of the event',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'When the event takes place',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Details about the event',
    }),
    defineField({
      name: 'button',
      title: 'Event Button',
      type: 'reference',
      to: [{type: 'button'}],
      description: 'Optional button for tickets, more info, etc.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where the event takes place (optional)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as a featured/highlighted event',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
      description: 'Order for displaying events',
    }),
  ],

  orderings: [
    {
      title: 'Event Date, New',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Event Date, Old',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'date', direction: 'asc'},
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, date, location, featured} = selection
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date'

      return {
        title: title,
        subtitle: `${dateStr}${location ? ` • ${location}` : ''}${featured ? ' ⭐' : ''}`,
        media: '📅',
      }
    },
  },
})
