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
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/dropdown.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';

import ScrollToTop from './components/common/ScrollToTop';
import routes from './routes';
import reducers from './reducers';

const accountSlug = window.location.pathname.split('/')[1];

const axiosInstance = axios.create({
  baseURL: `/api_private/api_private/v1/${accountSlug}`
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const newConfig = { ...config };
  if (localStorage && token) {
    newConfig.headers['x-csrf-token'] = token;
  }
  return newConfig;
});

axiosInstance.interceptors.response.use((response) => {
  localStorage.setItem('token', response.headers['x-csrf-token']);
  return response;
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
      <ScrollToTop>
        {renderRoutes(routes)}
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
