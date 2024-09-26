import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

const StyleGuide = styled.div`
  font-family: 'Libre Franklin', sans-serif;
  color: #ffffff;
  background-color: #1b2d3e;
  padding: 20px;
`;

const StyleItem = styled.div`
  margin-bottom: 20px;
`;

const StyleName = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #a0a0a0;
`;

const StyleExample = styled.div<{ className?: string }>`
  ${props => props.className}
`;

const TextStyleCatalog: React.FC = () => (
  <StyleGuide>
    <h1>USSF Portal - Styleguide</h1>
    {Object.entries(styles).map(([name, style]) => (
      <StyleItem key={name}>
        <StyleName>{name}</StyleName>
        <StyleExample className={style}>{style.split('{')[0].trim()}</StyleExample>
      </StyleItem>
    ))}
  </StyleGuide>
);

export default {
  title: 'Design System/Typography',
  component: TextStyleCatalog,
} as Meta<typeof TextStyleCatalog>;

type Story = StoryObj<typeof TextStyleCatalog>;

export const Default: Story = {};

const styles = {
  'M3/mobile/display/large': `
    font-family: LibreFranklin;
    font-size: 57px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.12;
    letter-spacing: -0.25px;
  `,
  'M3/mobile/display/medium': `
    font-family: LibreFranklin;
    font-size: 45px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: normal;
  `,
  'M3/mobile/display/small': `
    font-family: LibreFranklin;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
  `,
  // ... Add all other styles here
};
