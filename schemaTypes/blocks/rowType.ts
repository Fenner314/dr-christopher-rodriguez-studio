import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'row',
  title: 'Row',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this row',
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Row title (optional)',
    }),
    defineField({
      name: 'columns',
      title: 'Row Columns',
      type: 'array',
      description: 'Columns within this row',
      of: [{type: 'column'}],
    }),
    defineField({
      name: 'alignment',
      title: 'Row Alignment',
      type: 'string',
      description: 'How columns should be aligned within this row',
      options: {
        list: [
          {title: 'Left', value: 'flex-start'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'flex-end'},
          {title: 'Space Between', value: 'space-between'},
          {title: 'Space Around', value: 'space-around'},
          {title: 'Space Evenly', value: 'space-evenly'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'flex-start',
    }),
    defineField({
      name: 'gap',
      title: 'Column Gap',
      type: 'string',
      description: 'Gap between columns',
      options: {
        list: [
          {title: 'None', value: '0'},
          {title: 'Small', value: '1rem'},
          {title: 'Medium', value: '2rem'},
          {title: 'Large', value: '3rem'},
          {title: 'Extra Large', value: '4rem'},
        ],
        layout: 'dropdown',
      },
      initialValue: '2rem',
    }),
    defineField({
      name: 'wrap',
      title: 'Wrap Columns',
      type: 'boolean',
      description: 'Allow columns to wrap to next line',
      initialValue: true,
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Additional visual styling options for this row',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      columns: 'columns',
    },
    prepare(selection: any) {
      const {title, label, columns} = selection
      const columnCount = columns?.length || 0
      return {
        title: title || label || 'Row',
        subtitle: `${columnCount} column${columnCount !== 1 ? 's' : ''}`,
      }
    },
  },
})
