import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GalleryContent from './GalleryContent';
import { GalleryItem } from '@/types';
import { CardType } from '@/utils/string-utils';
import SectionTitle from '../SectionTitle'

const meta: Meta<typeof GalleryContent> = {
  title: 'Components/GalleryContent',
  component: GalleryContent,
  argTypes: {
    minCardWidth: { control: { type: 'number'} },
    height: { control: { type: 'number'} },
    extraFilters: { control: 'boolean' },
    hidePagination: { control: 'boolean' },
    showFilter: { control: 'boolean' },
    cardType: {
      control: { type: 'select' },
      options: [CardType.VerticalCard, CardType.HorizontalCard, CardType.LongCard],
    },
  },
};

export default meta;

type Story = StoryObj<typeof GalleryContent>;

const sampleItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Article 1',
    body: 'This is the body of Article 1',
    slug: 'article-1',
    image: 'https://example.com/image1.jpg',
    publishedDate: '2023-06-01T00:00:00Z',
    category: 'News',
    type: 'article',
  },
  // Add more sample items...
];

export const Default: Story = {
  args: {
    items: sampleItems,
    sectionTitle: 'Latest Articles',
  },
};

export const WithFilter: Story = {
  args: {
    ...Default.args,
    showFilter: true,
    searchPlaceholder: 'Search articles...',
  },
};

export const HorizontalCards: Story = {
  args: {
    ...Default.args,
    cardType: CardType.HorizontalCard,
  },
};

export const ExtraFilters: Story = {
  args: {
    ...Default.args,
    extraFilters: true,
  },
};

export const HidePagination: Story = {
  args: {
    ...Default.args,
    hidePagination: true,
  },
};
