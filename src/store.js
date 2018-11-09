import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { mainReducer } from './mainReducer';

// import createSagaMiddleware from 'redux-saga';

let store;

export const configureStore = (initState, history) => {
  const initialState = initState || {};

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // const sagaMiddleware = createSagaMiddleware();

  const middlewares = [routerMiddleware(history)];

  store = createStore(
    mainReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};
