import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ImageCarouselPaginate } from './ImageCarouselPaginate';

export default {
  title: 'Components/ImageCarouselPaginate',
  component: ImageCarouselPaginate,
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'page changed' },
  },
} as Meta<typeof ImageCarouselPaginate>;

type Story = StoryObj<typeof ImageCarouselPaginate>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 7,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 4,
    totalPages: 4,
  },
};
