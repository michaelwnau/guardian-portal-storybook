import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useAutoSlide } from './useAutoSlide';

// Demo component to showcase useAutoSlide hook
const AutoSlideDemo: React.FC<{ imagesLength: number, delay: number }> = ({ imagesLength, delay }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { pauseAutoSlide, resumeAutoSlide } = useAutoSlide(imagesLength, setActiveIndex, delay);

  return (
    <div>
      <h2>useAutoSlide Demo</h2>
      <p>Active Index: {activeIndex}</p>
      <button onClick={pauseAutoSlide}>Pause</button>
      <button onClick={resumeAutoSlide}>Resume</button>
    </div>
  );
};

const meta = {
  component: AutoSlideDemo,
  title: 'Hooks/useAutoSlide',
} satisfies Meta<typeof AutoSlideDemo>;

export default meta;

type Story = StoryObj<typeof AutoSlideDemo>;

export const Default: Story = {
  args: {
    imagesLength: 5,
    delay: 3000,
  },
};

export const ShortDelay: Story = {
  args: {
    imagesLength: 3,
    delay: 1000,
  },
};

export const LongDelay: Story = {
  args: {
    imagesLength: 10,
    delay: 5000,
  },
};