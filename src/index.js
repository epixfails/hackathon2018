import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { configureStore, runSagaMiddleware } from './store';
import { Auth } from './features/Auth';
import { App } from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #363d47;
    position: relative;
    margin: 0;
  }
  * {
    font-family: 'Roboto', sans-serif;
  }
  `;

const history = createHistory();

const store = configureStore({}, history);

runSagaMiddleware();

const AppWrap = styled.div`
  margin: auto;
`;

const MainApp = () => (
  <Provider store={store}>
    <AppWrap>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route path="/:page" component={App} />
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </AppWrap>
  </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
