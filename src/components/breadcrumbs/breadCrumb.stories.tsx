import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from './breadCrumb';
import { BreadCrumbData } from '@/types';

const meta = {
  component: BreadCrumb,
  title: 'Components/BreadCrumb',
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const createSampleBreadCrumbData = (links: Array<{ text: string; link: string }>): BreadCrumbData => ({
  links,
});

export const Default: Story = {
  args: {
    data: createSampleBreadCrumbData([
      { text: 'Category', link: 'category' },
      { text: 'Subcategory', link: 'category/subcategory' },
      { text: 'Page', link: 'category/subcategory/page' },
    ]),
  },
};

export const SingleLink: Story = {
  args: {
    data: createSampleBreadCrumbData([
      { text: 'Single Page', link: 'single-page' },
    ]),
  },
};

export const LongPath: Story = {
  args: {
    data: createSampleBreadCrumbData([
      { text: 'Level 1', link: 'level1' },
      { text: 'Level 2', link: 'level1/level2' },
      { text: 'Level 3', link: 'level1/level2/level3' },
      { text: 'Level 4', link: 'level1/level2/level3/level4' },
      { text: 'Level 5', link: 'level1/level2/level3/level4/level5' },
    ]),
  },
};

export const WithoutLinks: Story = {
  args: {
    data: createSampleBreadCrumbData([]),
  },
};

export const WithSpecialCharacters: Story = {
  args: {
    data: createSampleBreadCrumbData([
      { text: 'Parent & Child', link: 'parent-and-child' },
      { text: 'Section #1', link: 'parent-and-child/section-1' },
    ]),
  },
};