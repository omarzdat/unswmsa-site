export default {
    name: 'publicationPost',
    title: 'Publication Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'category'}]}],
            validation: Rule => Rule.min(1).error('Please add at least one category')
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'author'}]}],
            validation: Rule => Rule.min(1).error('Please add at least one author')
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'A short summary of the blog post'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent', // This uses a custom block content type we'll define
        },
        {
            name: 'audioNarration',
            title: 'Audio Narration',
            type: 'file',
            options: {
                accept: 'audio/*'  // This restricts uploads to audio files only
            },
            fields: [
                {
                    name: 'duration',
                    title: 'Duration',
                    type: 'string',
                    description: 'Duration of the audio (e.g., "5:32")'
                },
                {
                    name: 'description',
                    title: 'Audio Description',
                    type: 'string',
                    description: 'Brief description of this audio narration'
                }
            ]
        }

    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            author: 'author.name',
            category: 'categories.0.title'
        },
        prepare({title, media, author, category}) {
            return {
                title,
                subtitle: `${author ? `by ${author}` : ''} ${category ? `in ${category}` : ''}`,
                media
            }
        }
    }
}