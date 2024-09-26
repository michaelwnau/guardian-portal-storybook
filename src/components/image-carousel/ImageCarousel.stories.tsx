import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ImageCarousel } from './ImageCarousel';

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
} as Meta<typeof ImageCarousel>;

type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {
  args: {
    title: '<title>',
    body: '<body>',
    backgroundImage: 'https://via.placeholder.com/639x390',
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Beautiful Landscape',
    body: 'Explore nature',
    backgroundImage: 'https://via.placeholder.com/639x390?text=Landscape',
  },
};

export const WithoutBackgroundImage: Story = {
  args: {
    title: 'No Image',
    body: 'Text only carousel',
  },
};
