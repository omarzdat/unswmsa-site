export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields:[
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
            }
        },
        {
            name: 'status',
            title: 'Event Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Highlight Event', value: 'highlight' },
                    { title: 'Upcoming Event', value: 'upcoming' },
                    { title: 'Past Event', value: 'past' }
                ],
                layout: 'radio'
            },
            description: 'Manually set the event status. Only one event should be set as Highlight.',
            validation: Rule => Rule.required()
        },
        {
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            description: 'Only needed for multi-day events'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'eventImage',
            title: 'Event Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },

        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },

        {
            name: 'externalLink',
            title: 'External Link',
            type: 'url',
            description: 'Link to event registration or more information'
        },
        {
            name: 'highlightContent',
            title: 'Highlight Content',
            type: 'object',
            description: 'Additional content shown only for the highlight event',
            hidden: ({ document }) => document?.status !== 'highlight',
            fields: [
                {
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                    description: 'Additional heading shown with highlight event'
                },
                {
                    name: 'fullDescription',
                    title: 'Full Description',
                    type: 'blockContent',
                    description: 'Detailed description for the highlight section'
                }
            ]
        }
    ],

    preview: {
        select: {
            title: 'title',
            date: 'eventDate',
            status: 'status',
            media: 'eventImage'
        },
        prepare({ title, date, status, media }) {
            const statusLabels = {
                highlight: '🌟 HIGHLIGHT',
                upcoming: '📅 UPCOMING',
                past: '📁 PAST'
            };
            
            return {
                title,
                subtitle: `${statusLabels[status] || ''} ${date ? new Date(date).toLocaleDateString() : ''}`,
                media
            }
        }
    },

    orderings: [ //sorting options to help manage events in the admin interface.
        {
            title: 'Event Date, New',
            name: 'eventDateDesc',
            by: [
                { field: 'eventDate', direction: 'desc' }
            ]
        },
        {
            title: 'Event Date, Old',
            name: 'eventDateAsc',
            by: [
                { field: 'eventDate', direction: 'asc' }
            ]
        },
        {
            title: 'Status',
            name: 'statusOrder',
            by: [
                { field: 'status', direction: 'asc' },
                { field: 'eventDate', direction: 'desc' }
            ]
        }
    ]


}