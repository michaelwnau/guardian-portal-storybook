import type { Meta, StoryObj } from '@storybook/react';
import NewsCard from './NewsCard';
import { Article } from '@/types';

const meta = {
  component: NewsCard,
  title: 'Components/NewsCard',
} satisfies Meta<typeof NewsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleArticle: Article = {
  id: 1,
  title: 'Sample News Article',
  body: 'This is a sample news article body. It contains the main content of the news item.',
  image: 'https://example.com/sample-image.jpg',
  status: 'published',
  sort: 1,
  userCreated: 'John Doe',
  dateCreated: '2023-06-01T00:00:00Z',
  userUpdated: 'Jane Smith',
  category: 'General',
  publishedDate: '2023-06-15T00:00:00Z',
  slug: 'sample-news-article',
  document: null,
  landingPage: 1,
  author: 'John Author',
  location: 'New York',
  displayOnHome: true,
  tags: [1, 2],
  comments: [],
  attachments: [],
  announcement: false,
  imageCaption: null
};

export const Default: Story = {
  args: {
    article: sampleArticle,
  },
};

export const NoImage: Story = {
  args: {
    article: {
      ...sampleArticle,
      image: null,
    },
  },
};

export const LongTitle: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: 'This is a very long title that might wrap to multiple lines in the NewsCard component',
    },
  },
};

export const LongBody: Story = {
  args: {
    article: {
      ...sampleArticle,
      body: 'This is a very long body text that will definitely exceed the three-line limit set in the NewsCard component. It should be truncated with an ellipsis in the actual rendered card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
};

export const MinimalContent: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: 'Short Title',
      body: 'Brief content.',
    },
  },
};
