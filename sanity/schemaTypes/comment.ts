export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'blog',
            title: 'Blog',
            type: 'reference',
            to: [{ type: 'blog' }], // Links comment to a specific blog
        },
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }],
        },
        {
            name: 'content',
            title: 'Comment Content',
            type: 'text',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            options: {
                dateFormat: 'MMM DD, YYYY',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
            },
        },
    ],
};
