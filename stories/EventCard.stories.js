import { fn } from '@storybook/test';
import { EventCard } from './EventCard';

export default {
  title: 'Components/EventCard',
  component: EventCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // You can add argTypes here if you want to control any props
  },
};

export const Default = {
  args: {},
};

export const CustomImage = {
  args: {
    image: '/images/custom-image.jpg',
    imageTitle: 'Custom Image',
  },
};

export const CustomContent = {
  args: {
    title: 'Custom Event',
    description: 'This is a custom event description.',
    shareButtonText: 'Share Event',
    learnMoreButtonText: 'More Info',
  },
};