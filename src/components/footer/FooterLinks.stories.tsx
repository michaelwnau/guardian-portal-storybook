import type { Meta, StoryObj } from '@storybook/react';
import FooterLinks from './FooterLinks';
import { FooterLink } from '@/types';

const meta = {
  component: FooterLinks,
  title: 'Components/FooterLinks',
} satisfies Meta<typeof FooterLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleLinks: FooterLink[] = [
  {
    name: 'Link 1', url: 'https://example.com/link1', openInNew: false,
    hidden: false
  },
  {
    name: 'Link 2', url: 'https://example.com/link2', openInNew: true,
    hidden: false
  },
  {
    name: 'Link 3', url: 'https://example.com/link3', openInNew: false,
    hidden: false
  },
];

export const Default: Story = {
  args: {
    title: 'Sample Links',
    links: sampleLinks,
  },
};

export const ManyLinks: Story = {
  args: {
    title: 'Many Links',
    links: Array(12).fill(null).map((_, index) => ({
      name: `Link ${index + 1}`,
      url: `https://example.com/link${index + 1}`,
      openInNew: index % 2 === 0,
      hidden: index % 2 === 0
    })),
  },
};