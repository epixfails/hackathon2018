import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import { NavigationPanel } from './components/NavigationPanel';
import { Profile } from '../features/Profile';
import { BookShelf } from '../features/BookShelf';

const MainLayout = styled.div`
  width: 1200px;
  margin: auto;
`;

export const App = props => {
  if (!props.authenticated) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  }

  return (
    <MainLayout>
      <Header />
      <NavigationPanel />
      <Switch>
        <Route path="/books" component={() => <BookShelf />} />
        <Route path="/deal" component={() => <div>deals</div>} />
        <Route path="*" component={Profile} />
      </Switch>
    </MainLayout>
  );
};
