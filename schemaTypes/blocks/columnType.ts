import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this column',
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Column title (optional)',
    }),
    defineField({
      name: 'width',
      title: 'Column Width',
      type: 'string',
      description: 'Width of this column',
      options: {
        list: [
          {title: 'Auto (Fit Content)', value: 'auto'},
          {title: '100px', value: '100px'},
          {title: '200px', value: '200px'},
          {title: '300px', value: '300px'},
          {title: '400px', value: '400px'},
          {title: '500px', value: '500px'},
          {title: '600px', value: '600px'},
          {title: 'Full Width (100%)', value: '100%'},
          {title: 'Half Width (50%)', value: '50%'},
          {title: 'One Third (33.33%)', value: '33.33%'},
          {title: 'Two Thirds (66.67%)', value: '66.67%'},
          {title: 'One Quarter (25%)', value: '25%'},
          {title: 'Three Quarters (75%)', value: '75%'},
          {title: 'One Sixth (16.67%)', value: '16.67%'},
          {title: 'Five Sixths (83.33%)', value: '83.33%'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'auto',
    }),
    defineField({
      name: 'content',
      title: 'Column Content',
      type: 'array',
      description: 'Content blocks within this column',
      of: [
        {type: 'title'},
        {type: 'textBlock'},
        {type: 'button'},
        {type: 'youtubeVideo'},
        {type: 'mediaImage'},
        {type: 'gallery'},
        {type: 'testimonial'},
        {type: 'customComponent'},
      ],
    }),
    defineField({
      name: 'alignment',
      title: 'Content Alignment',
      type: 'string',
      description: 'How content should be aligned within this column',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'padding',
      title: 'Column Padding',
      type: 'string',
      description: 'Padding around the column content',
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
      initialValue: '1rem',
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Additional visual styling options for this column',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      width: 'width',
      content: 'content',
    },
    prepare(selection: any) {
      const {title, label, width, content} = selection
      const contentCount = content?.length || 0
      return {
        title: title || label || 'Column',
        subtitle: `${width} • ${contentCount} content blocks`,
      }
    },
  },
})
