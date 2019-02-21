import normalize from 'jsonapi-normalizer';

import { FETCH_COURSES, FETCH_USERS, FETCH_ADMINS } from './types';

export const fetchCourses = () => async (dispatch, getState, api) => {
  const res = await api.get('/courses');

  dispatch({
    type: FETCH_COURSES,
    payload: normalize(res.data)
  });
};

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
