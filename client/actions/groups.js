import normalize from 'jsonapi-normalizer';

import { FETCH_GROUPS_SUCCESS } from './types';

export const fetchGroups = () => async (dispatch, getState, api) => {
  const res = await api.get('/groups');

  dispatch({
    type: FETCH_GROUPS_SUCCESS,
    payload: normalize(res.data)
  });
};
