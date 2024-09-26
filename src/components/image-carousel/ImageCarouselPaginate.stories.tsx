import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ImageCarouselPaginate } from './ImageCarouselPaginate';

export default {
  title: 'Components/ImageCarousel/Paginate',
  component: ImageCarouselPaginate,
  argTypes: {
    images: { control: 'object' },
  },
} as Meta<typeof ImageCarouselPaginate>;

type Story = StoryObj<typeof ImageCarouselPaginate>;

const defaultImages = [
  {
    url: 'images/semper_supra_banner.png',
    title: 'Beautiful Landscape',
    body: 'Explore nature'
  },
  {
    url: 'images/space_force_command.jpeg',
    title: 'Mountain View',
    body: 'Breathtaking peaks'
  },
  {
    url: 'images/semper_supra_banner.png',
    title: 'Serene Lake',
    body: 'Tranquil waters'
  },
  {
    url: 'images/space_force_command.jpeg4',
    title: 'Desert Sunset',
    body: 'Golden horizons'
  },
  {
    url: 'images/space_force_fly_over.jpeg',
    title: 'Semper Supra!',
    body: 'This is the last page of the carousel'
  }
];

export const Default: Story = {
  args: {
    images: defaultImages,
  },
};

export const SingleImage: Story = {
  args: {
    images: [defaultImages[0]],
  },
};

export const TwoImages: Story = {
  args: {
    images: defaultImages.slice(0, 2),
  },
};
