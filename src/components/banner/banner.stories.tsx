import type { Meta, StoryObj } from '@storybook/react';
import Banner from './banner';
import { BannerData } from '@/types';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleBannerData: BannerData = {
  logoSrc: '/path/to/logo.png',
  logoAlt: 'Logo Alt Text',
  title: 'Sample Banner Title',
  tagline: 'This is a sample banner tagline',
  missionText: 'Our mission is to provide excellent service',
  visionText: 'Our vision is to be the leading company in our field',
};

export const Default: Story = {
  args: {
    data: sampleBannerData
  }
};

export const WithoutMission: Story = {
  args: {
    data: {
      ...sampleBannerData,
      missionText: '',
    }
  }
};

export const WithoutVision: Story = {
  args: {
    data: {
      ...sampleBannerData,
      visionText: '',
    }
  }
};
