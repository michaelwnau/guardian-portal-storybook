import type { Meta, StoryObj } from '@storybook/react';
import FeaturedLinks from './FeaturedLinks';
import { FeaturedLinksData } from '@/types';

const meta = {
  component: FeaturedLinks,
  title: 'Components/GeneralFeaturedLinks',
} satisfies Meta<typeof FeaturedLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleFeaturedLinksData: FeaturedLinksData = {
  links: [
    { name: 'Link 1', url: 'https://example.com/1', imageUrl: 'https://example.com/image1.jpg' },
    { name: 'Link 2', url: 'https://example.com/2', imageUrl: 'https://example.com/image2.jpg' },
  ],
};

export const Default: Story = {
  args: {
    data: sampleFeaturedLinksData,
  },
};

export const SingleLink: Story = {
  args: {
    data: {
      links: [sampleFeaturedLinksData.links[0]],
    },
  },
};

export const ManyLinks: Story = {
  args: {
    data: {
      links: Array(5).fill(null).map((_, index) => ({
        name: `Link ${index + 1}`,
        url: `https://example.com/${index + 1}`,
        imageUrl: `https://example.com/image${index + 1}.jpg`,
      })),
    },
  },
};
