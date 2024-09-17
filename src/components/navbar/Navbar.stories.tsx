import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { NavbarData } from '@/types';

const meta = {
  component: Navbar,
  title: 'Components/Navbar',
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleNavbarData: NavbarData = {
  logo: '/assets/guardian_one_logo_wordMark.png',
  logoAlt: 'Guardian One Logo',
  notificationsCount: 3,
  user: {
    name: 'John Doe',
    avatarUrl: '/assets/avatar.png',
  },
  leftLinks: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ],
  rightLinks: [
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
  ],
};

export const Default: Story = {
  args: {
    data: sampleNavbarData,
  },
};

export const NoNotifications: Story = {
  args: {
    data: {
      ...sampleNavbarData,
      notificationsCount: 0,
    },
  },
};

export const ManyNotifications: Story = {
  args: {
    data: {
      ...sampleNavbarData,
      notificationsCount: 99,
    },
  },
};

export const FewerLinks: Story = {
  args: {
    data: {
      ...sampleNavbarData,
      leftLinks: [{ name: 'Home', url: '/' }],
      rightLinks: [{ name: 'Contact', url: '/contact' }],
    },
  },
};

export const MoreLinks: Story = {
  args: {
    data: {
      ...sampleNavbarData,
      leftLinks: [
        ...sampleNavbarData.leftLinks,
        { name: 'Products', url: '/products' },
        { name: 'Blog', url: '/blog' },
      ],
      rightLinks: [
        ...sampleNavbarData.rightLinks,
        { name: 'Support', url: '/support' },
        { name: 'Login', url: '/login' },
      ],
    },
  },
};