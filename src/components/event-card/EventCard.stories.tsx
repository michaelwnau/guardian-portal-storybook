import type { Meta, StoryObj } from '@storybook/react';
import EventCard from './EventCard';
import { Article } from '@/types';

const meta = {
  component: EventCard,
  title: 'Components/EventCard',
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const createSampleArticle = (id: number): Article => ({
  id,
  status: 'published',
  sort: id,
  userCreated: 'John Doe',
  dateCreated: '2023-06-01T00:00:00Z',
  userUpdated: 'Jane Smith',
  category: 'Conference',
  title: `Sample Event ${id}`,
  body: `<p>This is a description for sample event ${id}</p>`,
  publishedDate: '2023-06-15T00:00:00Z',
  slug: `sample-event-${id}`,
  image: `https://example.com/image${id}.jpg`,
  document: null,
  landingPage: 0,
  author: 'John Author',
  location: 'Sample Location',
  displayOnHome: true,
  tags: [1, 2],
  comments: [],
  attachments: [],
  announcement: false
});

export const Default: Story = {
  args: {
    article: createSampleArticle(1),
  },
};

export const NoImage: Story = {
  args: {
    article: {
      "id": 2,
      "status": "published",
      "sort": 2,
      "userCreated": "John Doe",
      "dateCreated": "2023-06-01T00:00:00.000Z",
      "userUpdated": "Jane Smith",
      "category": "Conference",
      "title": "Sample Event 2",
      "body": "<p>This is a description for sample event 2</p>",
      "publishedDate": "2023-06-15T00:00:00.000Z",
      "slug": "sample-event-2",
      "image": null,
      "document": null,
      "landingPage": 0,
      "author": "John Author",
      "location": "Sample Location",
      "displayOnHome": true,
      "tags": [],
      "comments": [],
      "attachments": [],
      announcement: false
    },
  },
};

export const LongTitle: Story = {
  args: {
    article: {
      ...createSampleArticle(3),
      title: 'This is a very long title that might wrap to multiple lines in the EventCard component',
    },
  },
};

export const LongBody: Story = {
  args: {
    article: {
      ...createSampleArticle(4),
      body: '<p>This is a very long description that will definitely exceed the four-line limit set in the EventCard component. It should be truncated with an ellipsis in the actual rendered card.</p>',
    },
  },
};