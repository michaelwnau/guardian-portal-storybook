import type { Meta, StoryObj } from '@storybook/react';
import NewsCardSection from './NewsCardSection';
import { Article } from '@/types';

const meta = {
  component: NewsCardSection,
  title: 'Components/NewsCardSection',
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NewsCardSection>;

export default meta;

type Story = StoryObj<typeof meta>;

const createSampleArticle = (id: number): Article => ({
  id,
  title: `Sample News Article ${id}`,
  body: `This is the body of news article ${id}. It contains the main content of the news item.`,
  image: `https://example.com/image${id}.jpg`,
  status: 'published',
  sort: id,
  userCreated: 'John Doe',
  dateCreated: '2023-06-01T00:00:00Z',
  userUpdated: 'Jane Smith',
  category: 'General',
  publishedDate: '2023-06-15T00:00:00Z',
  slug: `sample-news-article-${id}`,
  document: null,
  landingPage: 1,
  author: 'John Author',
  location: 'New York',
  displayOnHome: true,
  tags: [1, 2],
  comments: [],
  attachments: [],
  announcement: false
});

const sampleNewsItems: Article[] = Array(10).fill(null).map((_, index) => createSampleArticle(index + 1));

export const Default: Story = {
  args: {
    newsItems: sampleNewsItems,
    minCardWidth: 300,
  },
};

export const FewItems: Story = {
  args: {
    newsItems: sampleNewsItems.slice(0, 3),
    minCardWidth: 300,
  },
};

export const ManyItems: Story = {
  args: {
    newsItems: Array(20).fill(null).map((_, index) => createSampleArticle(index + 1)),
    minCardWidth: 300,
  },
};

export const NarrowCards: Story = {
  args: {
    newsItems: sampleNewsItems,
    minCardWidth: 200,
  },
};

export const WideCards: Story = {
  args: {
    newsItems: sampleNewsItems,
    minCardWidth: 400,
  },
};

export const NoItems: Story = {
  args: {
    newsItems: [],
    minCardWidth: 300,
  },
};