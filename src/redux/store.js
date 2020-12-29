import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/index';

const actionLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log(
        '%c action',
        'font-family:arial;color:green;font-weight:bold;font-size:0.75rem',
        action
      );
      const result = next(action);
      // console.log('Next state', store.getState());
      return result;
    };
  };
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(actionLogger);
}

const enhancers = [applyMiddleware(...middlewares)];

const composedEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
    ? composeWithDevTools({ trace: true, traceLimit: 10 })(...enhancers)
    : compose(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);
