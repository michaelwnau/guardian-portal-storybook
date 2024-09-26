import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextStyleCatalog, TextStyle } from './TextStyleCatalog';

const styles: Record<string, TextStyle> = {
  'M3/mobile/display/large': {
    fontFamily: 'LibreFranklin',
    fontSize: '57px',
    fontWeight: 'normal',
    lineHeight: '64px',
    letterSpacing: '-0.25px',
  },
  'M3/mobile/display/medium': {
    fontFamily: 'LibreFranklin',
    fontSize: '45px',
    fontWeight: 'normal',
    lineHeight: '52px',
  },
  'M3/mobile/display/small': {
    fontFamily: 'LibreFranklin',
    fontSize: '36px',
    fontWeight: 'normal',
    lineHeight: '44px',
  },
  'M3/mobile/headline/large': {
    fontFamily: 'LibreFranklin',
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '40px',
  },
  'M3/mobile/headline/medium': {
    fontFamily: 'LibreFranklin',
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '36px',
  },
  'M3/web/IBM-Plex-Mono/h1': {
    fontFamily: 'IBMPlexMono',
    fontSize: '28px',
    fontWeight: 'normal',
  },
  'M3/web/Libre-Franklin/h1': {
    fontFamily: 'LibreFranklin',
    fontSize: '28px',
    fontWeight: 'normal',
  },
  // ... Add all other styles here
};

export default {
  title: 'Design System/Typography',
  component: TextStyleCatalog,
} as Meta<typeof TextStyleCatalog>;

type Story = StoryObj<typeof TextStyleCatalog>;

export const Default: Story = {
  args: {
    styles: styles,
  },
};
