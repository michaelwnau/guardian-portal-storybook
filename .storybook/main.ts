import type { StorybookConfig } from '@storybook/nextjs';
import { ExtrasConfig } from '@storybook-extras/preset';
import path from 'path';

const config: StorybookConfig & ExtrasConfig = {
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
    '@storybook/addon-docs',
    '@storybook-extras/preset',
  ],

  "extras": {
    "swagger": {
      "stories": [
        {
          // "title": "Swagger UI",
          // "url": 'https://guardian-portal-storybook.vercel.app/v2/swagger.json',
          // "path": "../stories/swagger",
          // "titlePrefix": "Swagger",
        },
      ]
    },
  },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Provide the path to your tsconfig.json so that your stories can
      // display types from outside each individual story.
      tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules')
        }
        return true
      },
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