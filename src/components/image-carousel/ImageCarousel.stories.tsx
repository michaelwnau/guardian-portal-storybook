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
    backgroundImage: '/images/space_force_command.jpeg',
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Semper Supra!',
    body: 'Always Above the Rest!',
    backgroundImage: 'images/space_force_fly_over.jpeg',
  },
};

export const WithoutBackgroundImage: Story = {
  args: {
    title: 'No Image',
    body: 'Text only carousel',
  },
};
