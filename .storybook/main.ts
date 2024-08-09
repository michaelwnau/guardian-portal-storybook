import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/react-docgen-typescript-plugin',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: './tsconfig.json',
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'next/dist/shared/lib/router-context': 'next/dist/shared/lib/router-context.shared-runtime',
        'next/dist/shared/lib/head-manager-context': 'next/dist/shared/lib/head-manager-context.shared-runtime',
        'next/dist/shared/lib/app-router-context': 'next/dist/shared/lib/app-router-context.shared-runtime',
        'next/dist/shared/lib/hooks-client-context': 'next/dist/shared/lib/hooks-client-context.shared-runtime',
      };
    }
    return config;
  },
};

export default config;
