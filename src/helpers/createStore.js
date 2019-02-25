import { createStore as createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../../client/reducers';

const createStore = (request) => {
  const accountSlug = request.params.account || '';
  const apiHost = process.env.NODE_ENV === 'production' ? process.env.API_HOST_PROD : process.env.API_HOST_DEV;

  const axiosInstance = axios.create({
    baseURL: `${apiHost}/api_private/v1/${accountSlug}`,
    headers: {
      cookie: request.get('cookie') || ''
    }
  });
  const store = createReduxStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};

export default createStore;
