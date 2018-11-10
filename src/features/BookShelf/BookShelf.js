import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { BookSearch } from './BookSearch';
import { BooksList } from './BooksList';

const MainInfo = styled.div`
  display: flex;
  padding: 60px 110px;
`;

export const BookShelf = () => (
  <MainInfo>
    <Switch>
      <Route exact path="/books/add" component={BookSearch} />
      <Route exact path="/books" component={BooksList} />
    </Switch>
  </MainInfo>
);
