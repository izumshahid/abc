export default {
  name: "siteConfig",
  title: "Site Configuration",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortName",
      title: "Short Name",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "text",
        },
        {
          name: "workingHours",
          title: "Working Hours",
          type: "string",
        },
      ],
    },
    {
      name: "social",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
        },
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
        {
          name: "youtube",
          title: "YouTube",
          type: "url",
        },
        {
          name: "whatsapp",
          title: "WhatsApp",
          type: "url",
        },
      ],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "howItWorks",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              title: "Step Number",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "contactCTA",
      title: "Contact CTA Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "Ready to Start Your Journey?",
        },
        {
          name: "description",
          title: "Section Description",
          type: "text",
          initialValue:
            "Take the first step towards your new career. Contact us today to learn more about our courses and enrollment process.",
        },
        {
          name: "enrollButtonText",
          title: "Enroll Button Text",
          type: "string",
          initialValue: "Enroll Now",
        },
        {
          name: "callButtonText",
          title: "Call Button Text",
          type: "string",
          initialValue: "Call Us",
        },
        {
          name: "whatsappButtonText",
          title: "WhatsApp Button Text",
          type: "string",
          initialValue: "WhatsApp",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
