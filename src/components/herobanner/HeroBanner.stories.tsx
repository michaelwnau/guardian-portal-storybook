import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';
import { HeroBannerData } from '@/types';

const meta = {
  component: HeroBanner,
  title: 'Components/HeroBanner',
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleHeroBannerData: HeroBannerData = {
  images: [
    {
      id: '1',
      source: 'https://example.com/image1.jpg',
      title: 'Image 1',
      heading: 'Welcome to Our Site',
      subheading: 'Discover amazing content',
      imgCaption: 'Beautiful landscape',
    },
    {
      id: '2',
      source: 'https://example.com/image2.jpg',
      title: 'Image 2',
      heading: 'Explore Our Services',
      subheading: 'Find what you need',
      imgCaption: 'City skyline',
    },
  ],
};

export const Default: Story = {
  args: {
    data: sampleHeroBannerData,
  },
};

export const SingleImage: Story = {
  args: {
    data: {
      images: [sampleHeroBannerData.images[0]],
    },
  },
};

export const ManyImages: Story = {
  args: {
    data: {
      images: Array(5).fill(null).map((_, index) => ({
        id: `${index + 1}`,
        source: `https://example.com/image${index + 1}.jpg`,
        title: `Image ${index + 1}`,
        heading: `Heading ${index + 1}`,
        subheading: `Subheading ${index + 1}`,
        imgCaption: `Caption ${index + 1}`,
      })),
    },
  },
};