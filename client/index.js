import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import '../styles/proof_of_concept.scss';

import routes from './routes';
import reducers from './reducers';

const accountSlug = window.location.pathname.split('/')[1];

const axiosInstance = axios.create({
  baseURL: `/api_private/api_private/v1/${accountSlug}`
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;
/* eslint-enable */

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
