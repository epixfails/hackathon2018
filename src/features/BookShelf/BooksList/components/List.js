import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const ListWrapper = styled.div`
  display: flex;
`;

export const List = ({ books }) => (
  <ListWrapper>
    {books.map(book => (
      <ListItem book={book} />
    ))}
  </ListWrapper>
);
