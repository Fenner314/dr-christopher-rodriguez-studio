import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      title: 'Button Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name for this button (for reference)',
    }),
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The text displayed on the button',
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((url: string | undefined) => {
          if (!url) return true
          // Allow absolute URLs that start with http/https
          if (url.startsWith('http://') || url.startsWith('https://')) return true
          // Allow relative URLs that start with /
          if (url.startsWith('/')) return true
          return 'URL must be either an absolute URL starting with http(s):// or a relative URL starting with /'
        }),
      description: 'Where the button links to (can be absolute URL or relative path like /about)',
    }),
    defineField({
      name: 'buttonType',
      title: 'Button Type',
      type: 'string',
      options: {
        list: [
          {title: 'Contained', value: 'contained'},
          {title: 'Outlined', value: 'outlined'},
          {title: 'Text', value: 'text'},
        ],
        layout: 'radio',
      },
      initialValue: 'contained',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Accent', value: 'accent'},
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Button Width',
      type: 'string',
      options: {
        list: [
          {title: 'Stretch (Full Width)', value: 'stretch'},
          {title: 'Fit Content', value: 'fit'},
        ],
        layout: 'radio',
      },
      initialValue: 'fit',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Button Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customStyles',
      title: 'Custom Styles',
      type: 'object',
      description: 'Optional custom styling overrides',
      fields: [
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'color',
          description: 'Override default background color',
        }),
        defineField({
          name: 'textColor',
          title: 'Text Color',
          type: 'color',
          description: 'Override default text color',
        }),
        defineField({
          name: 'borderRadius',
          title: 'Border Radius',
          type: 'number',
          description: 'Border radius in pixels',
        }),
        defineField({
          name: 'padding',
          title: 'Custom Padding',
          type: 'string',
          description: 'CSS padding value (e.g., "12px 24px")',
        }),
        defineField({
          name: 'fontSize',
          title: 'Font Size',
          type: 'string',
          description: 'CSS font size (e.g., "16px", "1rem")',
        }),
        defineField({
          name: 'fontWeight',
          title: 'Font Weight',
          type: 'string',
          options: {
            list: [
              {title: 'Normal (400)', value: '400'},
              {title: 'Medium (500)', value: '500'},
              {title: 'Semibold (600)', value: '600'},
              {title: 'Bold (700)', value: '700'},
            ],
          },
        }),
        defineField({
          name: 'border',
          title: 'Border',
          type: 'string',
          description: 'CSS border value (e.g., "2px solid #333")',
        }),
        defineField({
          name: 'customCSS',
          title: 'Additional CSS',
          type: 'text',
          description: 'Any additional CSS properties',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
      description: 'Should the link open in a new tab?',
    }),
    defineField({
      name: 'ariaLabel',
      title: 'Accessibility Label',
      type: 'string',
      description: 'Descriptive label for screen readers (optional)',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      text: 'text',
      buttonType: 'buttonType',
      colorScheme: 'colorScheme',
      size: 'size',
    },
    prepare(selection) {
      const {title, text, buttonType, colorScheme, size} = selection
      return {
        title: title,
        subtitle: `${text} • ${buttonType} • ${colorScheme} • ${size}`,
      }
    },
  },
})
