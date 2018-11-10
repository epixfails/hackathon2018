import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import cookies from 'js-cookie';
import { mainReducer } from './mainReducer';
import { rootSaga } from './rootSaga';

const accessToken = cookies.get('token');

let store;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initState, history) => {
  const initialState = initState || {};

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [routerMiddleware(history), sagaMiddleware];

  if (accessToken) {
    initialState.auth = {
      authenticated: true,
      token: accessToken,
    };
  }

  store = createStore(
    mainReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export function runSagaMiddleware() {
  sagaMiddleware.run(rootSaga);
}
