import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Rich Text Section',
  name: 'blockContent',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Internal label for this content section',
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for this content section',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    },
    {
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this block',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({title, content}) {
      return {
        title: title || 'Rich Text Section',
        subtitle: content ? `${content.length} block(s)` : 'No content',
      }
    },
  },
})
