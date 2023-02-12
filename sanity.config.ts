import { deskTool } from 'sanity/desk';

export const config = {
  projectId: 'r5pyreh3',
  dataset: 'production',
  title: 'My site',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'myName',
        title: 'My title name',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
            },
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
    ],
  },
};
