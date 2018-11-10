import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  font-size: 20px;
  padding: 13px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SuggestionItem = ({ book, handleSelectBook }) => (
  <Wrapper onClick={() => handleSelectBook(book)}>{book.title}</Wrapper>
);
