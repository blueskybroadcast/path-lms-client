import { createStore as createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../../client/reducers';

const createStore = (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3800/api_private/v1/testing',
    headers: {
      cookie: req.get('cookie') || ''
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
