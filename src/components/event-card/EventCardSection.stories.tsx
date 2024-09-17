import type { Meta, StoryObj } from '@storybook/react';
import EventCardSection from './EventCardSection';
import { Article } from '@/types';

const meta: Meta<typeof EventCardSection> = {
  component: EventCardSection,
  title: 'Components/EventCardSection',
  decorators: [
    (Story) => (
      <div style={{ height: '600px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EventCardSection>;

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
    eventItems: [createSampleArticle(1), createSampleArticle(2)],
    minCardHeight: 200,
  },
};

export const SingleEvent: Story = {
  args: {
    eventItems: [createSampleArticle(1)],
    minCardHeight: 200,
  },
};

export const ManyEvents: Story = {
  args: {
    eventItems: Array.from({ length: 10 }, (_, i) => createSampleArticle(i + 1)),
    minCardHeight: 150,
  },
};

export const NoEvents: Story = {
  args: {
    eventItems: [],
    minCardHeight: 200,
  },
};