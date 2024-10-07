import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { FooterData } from '@/types';

const meta = {
  component: Footer,
  title: 'Components/Footer',
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleFooterData: FooterData = {
  streetAddress: '123 Main St',
  city: 'Anytown',
  state: 'ST',
  zip: '12345',
  email: 'info@example.com',
  phone: '(123) 456-7890',
  informationTitle: 'Information',
  informationText: 'Sample information text\nSecond line',
  feedback: '<p>Sample feedback</p>',
  default: true,
  image: 'https://example.com/map.jpg',
  quickLinks: [
    {
      name: 'Link 1', url: 'https://example.com/link1', openInNew: false,
      hidden: false
    },
    {
      name: 'Link 2', url: 'https://example.com/link2', openInNew: true,
      hidden: false
    },
  ],
  guardianPortal: [
    {
      name: 'Portal 1', url: 'https://example.com/portal1', openInNew: false,
      hidden: false
    },
    {
      name: 'Portal 2', url: 'https://example.com/portal2', openInNew: true,
      hidden: false
    },
  ],
  linkFB: 'https://facebook.com',
  linkX: 'https://x.com',
  linkIG: 'https://instagram.com',
  linkYT: 'https://youtube.com',
  imageDescription: '',
  hasLocation: true
};

export const Default: Story = {
  args: {
    data: sampleFooterData,
  },
};