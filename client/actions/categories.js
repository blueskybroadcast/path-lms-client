import normalize from 'jsonapi-normalizer';

import {
  FETCH_CATEGORIES_SUCCESS, DELETE_CATEGORY_SUCCESS, FETCH_CATEGORIES_REQUEST,
  ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS
} from './types';

export const fetchCategories = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  const res = await api.get('/categories');

  dispatch({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: normalize(res.data)
  });
};

export const addCategory = category => async (dispatch, getState, api) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  const { name, parentId, hidden } = category;

  await api.post('/categories', {
    name,
    parent_id: parentId,
    hidden
  }).then(() => {
    dispatch({ type: ADD_CATEGORY_SUCCESS });
    dispatch(fetchCategories());
  });
};

export const deleteCategory = id => async (dispatch, getState, api) => {
  await api.delete(`/categories/${id}`).then(() => {
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
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
