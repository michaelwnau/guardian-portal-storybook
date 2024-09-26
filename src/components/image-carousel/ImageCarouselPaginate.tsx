import React from 'react';
import styled from 'styled-components';

interface ImageCarouselPaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0 6px;
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

export const ImageCarouselPaginate: React.FC<ImageCarouselPaginateProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <PaginationContainer>
      <NavigationButton onClick={() => onPageChange(1)}>{"<<"}</NavigationButton>
      <NavigationButton onClick={() => onPageChange(Math.max(1, currentPage - 1))}>{"<"}</NavigationButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={`page-${index + 1}`}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
      <NavigationButton onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>{">"}</NavigationButton>
      <NavigationButton onClick={() => onPageChange(totalPages)}>{">>"}</NavigationButton>
    </PaginationContainer>
  );
};
