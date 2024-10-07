import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 696px;
  padding: 32px;
  background-color: #121212; // Darker background
  color: #ffffff;
`;

const Title = styled.h1`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.48px;
  color: rgba(255, 255, 255, 0.87); // Slightly transparent white
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: rgba(255, 255, 255, 0.6); // More transparent white
  margin-bottom: 16px;
`;

const MainText = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
`;

const HeadersContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05); // Very slight white overlay
  padding: 16px;
  margin: 16px 0;
`;

const HeaderItem = styled.div`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-bottom: 8px;
`;

const BuildingBlocksTitle = styled.h2`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.36px;
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: 8px;
`;

const BuildingBlocksSubtitle = styled.p`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
`;

const BuildingBlocksBackground = styled.div`
  width: 100%;
  height: 150px;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 0px,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px,
    transparent 10px
  );
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>HEADER</Title>
      <Subtitle>This is the design of the headers with the backgrounds behind them</Subtitle>
      <MainText>MAIN</MainText>
      <Subtitle>Dark mode component</Subtitle>

      <HeadersContainer>
        {['HEADER', 'HEADER', 'HEADER', 'HEADER', 'HEADER', 'HEADER'].map((text, index) => (
          <HeaderItem key={index}>{text}</HeaderItem>
        ))}
      </HeadersContainer>

      <BuildingBlocksTitle>BUILDING BLOCKS</BuildingBlocksTitle>
      <BuildingBlocksSubtitle>This is the asset for the header background</BuildingBlocksSubtitle>
      <BuildingBlocksBackground />
    </HeaderWrapper>
  );
};

export default Header;
