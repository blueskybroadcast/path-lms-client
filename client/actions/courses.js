import normalize from 'jsonapi-normalizer';

import { FETCH_COURSES } from './types';

export const fetchCourses = () => async (dispatch, getState, api) => {
  const res = await api.get('/courses');

  dispatch({
    type: FETCH_COURSES,
    payload: normalize(res.data)
  });
};

export const addCourse = ({ name, active, categoryIds }) => async (dispatch, getState, api) => {
  const res = await api.post('/courses', {
    course: {
      name,
      category_ids: categoryIds,
      active
    }
  });

  dispatch(fetchCourses());
};
