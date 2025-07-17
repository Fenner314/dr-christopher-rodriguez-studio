import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'section'}),
    defineArrayMember({type: 'row'}),
    defineArrayMember({type: 'title'}),
    defineArrayMember({type: 'textBlock'}),
    defineArrayMember({type: 'button'}),
    defineArrayMember({type: 'youtubeVideo'}),
    defineArrayMember({type: 'mediaImage'}),
    defineArrayMember({type: 'gallery'}),
    defineArrayMember({type: 'testimonial'}),
    defineArrayMember({type: 'testimonialGallery'}),
    defineArrayMember({type: 'mediaGrid'}),
    defineArrayMember({type: 'blockBanner'}),
    defineArrayMember({type: 'downloads'}),
    defineArrayMember({type: 'event'}),
    defineArrayMember({type: 'blockContent'}),
    defineArrayMember({type: 'customComponent'}),
    defineArrayMember({type: 'videoGallery'}),
  ],
})
