import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ImageCarousel } from './ImageCarousel';

export default {
  title: 'Components/ImageCarousel/Carousel',
  component: ImageCarousel,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    backgroundImage: { control: 'text' },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'page changed' },
  },
} as Meta<typeof ImageCarousel>;

type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {
  args: {
    title: '<title>',
    body: '<body>',
    backgroundImage: 'https://via.placeholder.com/639x390',
    currentPage: 1,
    totalPages: 7,
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Beautiful Landscape',
    body: 'Explore nature',
    backgroundImage: 'images/space_force_command.jpeg',
    currentPage: 3,
    totalPages: 5,
  },
};

export const WithoutBackgroundImage: Story = {
  args: {
    title: 'No Image',
    body: 'Text only carousel',
    currentPage: 2,
    totalPages: 4,
  },
};

export const LastPage: Story = {
  args: {
    title: 'Last Page',
    body: 'This is the last page of the carousel',
    backgroundImage: 'images/space_force_fly_over.jpeg',
    currentPage: 7,
    totalPages: 7,
  },
};
