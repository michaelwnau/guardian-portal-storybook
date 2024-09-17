import type { Meta, StoryObj } from '@storybook/react';
import LandingPageFeaturedLinks from './landingPageFeaturedLinks';
import { FeaturedLinksData, FeaturedLink } from '@/types';

const meta = {
  component: LandingPageFeaturedLinks,
  title: 'Components/LandingPageFeaturedLinks',
} satisfies Meta<typeof LandingPageFeaturedLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

const createSampleLink = (id: number): FeaturedLink => ({
  name: `Featured Link ${id}`,
  url: `https://example.com/link${id}`,
  imageUrl: `https://example.com/image${id}.jpg`,
});

const sampleFeaturedLinksData: FeaturedLinksData = {
  links: [
    createSampleLink(1),
    createSampleLink(2),
    createSampleLink(3),
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
      links: [createSampleLink(1)],
    },
  },
};

export const ManyLinks: Story = {
  args: {
    data: {
      links: Array(5).fill(null).map((_, index) => createSampleLink(index + 1)),
    },
  },
};

export const NoLinks: Story = {
  args: {
    data: {
      links: [],
    },
  },
};

export const WithoutImages: Story = {
  args: {
    data: {
      links: [
        { name: 'Link without image 1', url: 'https://example.com/no-image1', imageUrl: '' },
        { name: 'Link without image 2', url: 'https://example.com/no-image2', imageUrl: '' },
      ],
    },
  },
};