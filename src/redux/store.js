import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const logger = createLogger({
  collapsed: true,
  diff: true,
  colors: {
    title: () => '#08f26e',
    prevState: () => '#ffa500',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const enhancers = [applyMiddleware(...middlewares)];

const composedEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
    ? composeWithDevTools({ trace: true, traceLimit: 10 })(...enhancers)
    : compose(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);

// const loggerInfo = (store) => (next) => (action) => {
//   console.log('Prev State - ', store.getState());
//   console.log('Action - ', action);
//   const result = next(action);
//   console.log('Next State -', store.getState());
//   return result;
// };
