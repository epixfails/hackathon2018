import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import { NavigationPanel } from './components/NavigationPanel';
import { Profile } from '../features/Profile';

const MainLayout = styled.div`
  width: 1200px;
  margin: auto;
`;

export const App = ({ authenticated }) => {
  if (!authenticated) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }
  return (
    <MainLayout>
      <Header />
      <NavigationPanel />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/deal" component={() => <div>deals</div>} />
      </Switch>
    </MainLayout>
  );
};
