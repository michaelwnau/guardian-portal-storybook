import type { Preview } from '@storybook/react';


const preview: Preview = {
  parameters: {
    actions: {
         handles: ['click', 'focus', 'blur'],
       },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333333' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
