import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { KeycloakLogin } from './KeycloakLogin';

const meta: Meta<typeof KeycloakLogin> = {
  title: 'Components/KeycloakLogin',
  component: KeycloakLogin,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: { control: 'text' },
    backgroundVideoSrc: { control: 'text' },
    onLogin: { action: 'logged in' },
    onForgotPassword: { action: 'forgot password clicked' },
    onCreateAccount: { action: 'create account clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof KeycloakLogin>;

export const Default: Story = {
  args: {
    logoSrc: '/assets/guardian_one_logo_logo.png',
    backgroundVideoSrc: '/assets/keycloak-pages/dark_mode_blue_login_background.mp4',
  },
};

const styles = `
  body, #storybook-root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

export const WithStyles: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <>
        <style>{styles}</style>
        <Story />
      </>
    ),
  ],
};
