import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';
import { Article } from '@/types';

const meta = {
  component: HeroBanner,
  title: 'Components/HeroBanner',
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const getSampleArticle = (): Article => {
  return {
    id: 1,
    title: 'Sample News Article',
    body: 'This is a sample news article body. It contains the main content of the news item.',
    image: 'https://example.com/sample-image.jpg',
    imageCaption: 'Image for sample article',
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
    announcement: false
  } as Article
}

const sampleHeroBannerData = [
  {
    ...getSampleArticle(),
    id: 1,
    image: 'https://example.com/image1.jpg',
    title: 'Welcome to Our Site',
    body: 'Discover amazing content'
  },
  {
    ...getSampleArticle(),
    id: 2,
    image: 'https://example.com/image2.jpg',
    title: 'Explore Our Services',
    body: 'Find what you need',
  },
] as unknown as Article[]

export const Default: Story = {
  args: {
    articles: sampleHeroBannerData,
  },
};

export const SingleImage: Story = {
  args: {
    articles: [sampleHeroBannerData[0]],
  },
};

export const ManyImages: Story = {
  args: {
    articles: Array(5).fill(null).map((_, index) => ({
      ...getSampleArticle(),
      id: index,
      image: `https://example.com/image${index + 1}.jpg`,
      title: `Image ${index + 1}`,
      body: `Subheading ${index + 1}`,
      imageCaption: `Caption ${index + 1}`,
    })),
  },
};
