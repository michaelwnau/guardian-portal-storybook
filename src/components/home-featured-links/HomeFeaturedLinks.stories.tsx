import type { Meta, StoryObj } from '@storybook/react';
import HomeFeaturedLinks from './HomeFeaturedLinks';
import { FeaturedLinksData, FeaturedLink } from '@/types';

const meta = {
  component: HomeFeaturedLinks,
  title: 'Components/HomeFeaturedLinks',
} satisfies Meta<typeof HomeFeaturedLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

const createSampleLink = (id: number): FeaturedLink => ({
  name: `Home Featured Link ${id}`,
  url: `https://example.com/home-link${id}`,
  imageUrl: `https://example.com/home-image${id}.jpg`,
});

const sampleHomeFeaturedLinksData: FeaturedLinksData = {
  links: [
    createSampleLink(1),
    createSampleLink(2),
    createSampleLink(3),
  ],
};

export const Default: Story = {
  args: {
    data: sampleHomeFeaturedLinksData,
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
      links: Array(10).fill(null).map((_, index) => createSampleLink(index + 1)),
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