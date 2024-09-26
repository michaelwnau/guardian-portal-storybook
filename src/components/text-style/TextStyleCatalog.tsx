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
  color: #ffffff;
`;

const StyleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
`;

const StyleName = styled.div<{ $style: TextStyle }>`
  font-family: ${props => props.$style.fontFamily};
  font-size: ${props => props.$style.fontSize};
  font-weight: ${props => props.$style.fontWeight};
  line-height: ${props => props.$style.lineHeight};
  letter-spacing: ${props => props.$style.letterSpacing};
  color: #ffffff;
  width: 50%;
`;

const StyleDetails = styled.div`
  font-size: 14px;
  color: #a0a0a0;
  width: 50%;
  text-align: right;
`;

export interface TextStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  letterSpacing?: string;
  [key: string]: string | undefined;
}

export interface TextStyleCatalogProps {
  styles: Record<string, TextStyle>;
}

export const TextStyleCatalog: React.FC<TextStyleCatalogProps> = ({ styles }) => (
  <StyleGuide>
    <Title>USSF Portal - Styleguide</Title>
    {Object.entries(styles).map(([name, style]) => (
      <StyleItem key={name}>
        <StyleName $style={style}>{name}</StyleName>
        <StyleDetails>
          {style.fontFamily}, {style.fontWeight}, {style.fontSize}
          {style.lineHeight !== 'normal' && `, Line height: ${style.lineHeight}`}
          {style.letterSpacing !== 'normal' && `, Letter spacing: ${style.letterSpacing}`}
        </StyleDetails>
      </StyleItem>
    ))}
  </StyleGuide>
);
