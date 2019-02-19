import normalize from 'jsonapi-normalizer';

import { FETCH_CATEGORIES, DELETE_CATEGORY } from './types';

export const fetchCategories = () => async (dispatch, getState, api) => {
  const res = await api.get('/categories');

  dispatch({
    type: FETCH_CATEGORIES,
    payload: normalize(res.data)
  });
};

export const addCategory = category => async (dispatch, getState, api) => {
  const { name, parentId, hidden } = category;

  await api.post('/categories', {
    name,
    parent_id: parentId,
    hidden
  }).then(() => dispatch(fetchCategories()));
};

export const deleteCategory = id => async (dispatch, getState, api) => {
  await api.delete(`/categories/${id}`).then(() => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id
    });
  });
};

export const editCategory = (id, category) => async (dispatch, getState, api) => {
  const { name, parentId, hidden } = category;

  await api.put(`/categories/${id}`, {
    name,
    parent_id: parentId,
    hidden
  }).then(() => {
    dispatch(fetchCategories());
  });
};
