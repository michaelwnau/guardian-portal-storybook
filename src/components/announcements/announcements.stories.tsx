import type { Meta, StoryObj } from '@storybook/react';

import Announcements from './announcements';

const meta = {
  component: Announcements,
} satisfies Meta<typeof Announcements>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [],
  },
};