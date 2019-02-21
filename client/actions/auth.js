import { FETCH_CURRENT_USER } from './types';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get(`/users/current_user`);

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  });
};
