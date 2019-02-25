import normalize from 'jsonapi-normalizer';

import { FETCH_USERS } from './types';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: normalize(res.data)
  });
};
