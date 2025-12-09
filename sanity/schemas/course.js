export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Creative Skills', value: 'creative' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'INR',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certification',
      title: 'Certification',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'startDates',
      title: 'Start Dates',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'syllabus',
      title: 'Syllabus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'week',
              title: 'Week',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'topics',
              title: 'Topics',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
    {
      name: 'outcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection;
      return {
        ...selection,
        subtitle: category,
      };
    },
  },
};
