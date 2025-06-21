import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this text block',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Rich text content',
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
          {title: 'Justify', value: 'justify'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Maximum Width',
      type: 'string',
      description: 'Maximum width for the text block (e.g., "600px", "50%", "container")',
      options: {
        list: [
          {title: 'Full Width', value: '100%'},
          {title: 'Container', value: 'container'},
          {title: 'Narrow', value: '600px'},
          {title: 'Medium', value: '800px'},
          {title: 'Wide', value: '1000px'},
        ],
      },
      initialValue: '100%',
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this text block',
    }),
  ],
  preview: {
    select: {
      title: 'content',
      alignment: 'alignment',
    },
    prepare(selection: any) {
      const {title, alignment} = selection
      // Extract text from block content for preview
      const text = title?.[0]?.children?.[0]?.text || 'No content'
      return {
        title: text.length > 50 ? text.substring(0, 50) + '...' : text,
        subtitle: `Alignment: ${alignment}`,
      }
    },
  },
})
