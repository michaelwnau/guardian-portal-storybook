import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { KeycloakWarning } from './KeycloakWarning';

const meta: Meta<typeof KeycloakWarning> = {
  title: 'Components/KeycloakWarning',
  component: KeycloakWarning,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: { control: 'text' },
    backgroundVideoSrc: { control: 'text' },
    noticeText: { control: 'text' },
    warningText: { control: 'text' },
    buttonText: { control: 'text' },
    onAgree: { action: 'agreed' },
  },
};

export default meta;
type Story = StoryObj<typeof KeycloakWarning>;

export const Default: Story = {
  args: {
    logoSrc: '/assets/keycloak-pages/logo.png',
    backgroundVideoSrc: '/assets/keycloak-pages/dark_mode_blue_login_background.mp4',
    noticeText: 'Notice',
    warningText: 'You are accessing a U.S. Government (USG) Information System (IS) that is provided for USG-authorized use only.',
    buttonText: 'I Agree',
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

  .sizeContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  img.logo {
    max-width: 100%;
    height: auto;
    max-height: 257.6px;
    object-fit: contain;
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
