import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&family=IBM+Plex+Mono:wght@400;700&display=swap');

  body {
    background-color: #2c2c2c; // Slightly lighter background to show shadow
    margin: 0;
    padding: 20px;
  }
`;

const ShadowWrapper = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: inline-block; // To make the div fit the content
`;

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <ShadowWrapper>
          <Story />
        </ShadowWrapper>
      </>
    ),
  ],
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
Default.storyName = 'Default Header';

export const DarkMode = Template.bind({});
DarkMode.storyName = 'Dark Mode Header';
