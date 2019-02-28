import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootreducer from '../reducers/index';

const defaultState = {
  posts,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
