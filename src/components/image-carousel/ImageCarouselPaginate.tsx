import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageCarouselPaginateProps {
  images: Array<{
    url: string;
    title: string;
    body: string;
  }>;
}

const CarouselContainer = styled.div<{ backgroundImage: string }>`
  width: 639px;
  height: 390px;
  border-radius: 8px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${props => props.backgroundImage});
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

const PaginationContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.75);
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  color: ${props => props.active ? '#000000' : '#ffffff'};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
`;

const PageCounter = styled.span`
  color: #ffffff;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 14px;
  margin: 0 10px;
`;

export const ImageCarouselPaginate: React.FC<ImageCarouselPaginateProps> = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <CarouselContainer backgroundImage={images[currentPage].url}>
      <Content>
        <Title>{images[currentPage].title}</Title>
        <Body>{images[currentPage].body}</Body>
      </Content>
      <PaginationContainer>
        <NavigationButton onClick={() => handlePageChange(0)}>{"<<"}</NavigationButton>
        <NavigationButton onClick={() => handlePageChange(Math.max(0, currentPage - 1))}>{"<"}</NavigationButton>
        {images.map((image, index) => (
          <PageButton
            key={`page-button-${image.url}`}
            active={index === currentPage}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </PageButton>
        ))}
        <NavigationButton onClick={() => handlePageChange(Math.min(images.length - 1, currentPage + 1))}>{">"}</NavigationButton>
        <NavigationButton onClick={() => handlePageChange(images.length - 1)}>{">>"}</NavigationButton>
        <PageCounter>{currentPage + 1} of {images.length}</PageCounter>
      </PaginationContainer>
    </CarouselContainer>
  );
};
