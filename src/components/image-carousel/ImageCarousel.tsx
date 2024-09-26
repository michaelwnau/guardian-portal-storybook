import React from 'react';
import styled from 'styled-components';

interface ImageCarouselProps {
  title: string;
  body: string;
  backgroundImage?: string;
}

const CarouselContainer = styled.div`
  width: 639px;
  height: 390px;
  border-radius: 8px;
  background-image: ${props => props.backgroundImage ?
    `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${props.backgroundImage})` :
    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Content = styled.div`
  height: 89px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Title = styled.h2`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 28px;
  font-weight: normal;
  line-height: normal;
  color: #ffffff;
  margin: 0 0 4px 0;
`;

const Body = styled.p`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  color: #ffffff;
  margin: 0;
`;

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ title, body, backgroundImage }) => {
  return (
    <CarouselContainer backgroundImage={backgroundImage}>
      <Content>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Content>
    </CarouselContainer>
  );
};
