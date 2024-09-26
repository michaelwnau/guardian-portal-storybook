import React from 'react';
import styled from 'styled-components';

const StyleGuide = styled.div`
  font-family: 'Libre Franklin', sans-serif;
  color: #ffffff;
  background-color: #1b2d3e;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyleItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
`;

const StyleName = styled.div`
  font-size: 16px;
  color: #ffffff;
  width: 300px;
  flex-shrink: 0;
`;

const StyleDetails = styled.div`
  font-size: 14px;
  color: #a0a0a0;
`;

export interface TextStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export interface TextStyleCatalogProps {
  styles: Record<string, TextStyle>;
}

export const TextStyleCatalog: React.FC<TextStyleCatalogProps> = ({ styles }) => (
  <StyleGuide>
    <Title>USSF Portal - Styleguide</Title>
    {Object.entries(styles).map(([name, style]) => (
      <StyleItem key={name}>
        <StyleName style={style}>{name}</StyleName>
        <StyleDetails>
          {style.fontFamily}, {style.fontWeight}, {style.fontSize}
          {style.lineHeight && `, Line height: ${style.lineHeight}`}
          {style.letterSpacing && `, Letter spacing: ${style.letterSpacing}`}
        </StyleDetails>
      </StyleItem>
    ))}
  </StyleGuide>
);
