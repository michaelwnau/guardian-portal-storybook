import type { Meta, StoryObj } from '@storybook/react';

import Events from './events';
// Make sure to import the Article type

const meta = {
  component: Events,
} satisfies Meta<typeof Events>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [], // Provide an empty array of Articles as the default
  },
};