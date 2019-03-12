import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../../actions/types';
import loadingReducer, { initialState } from '../loadingReducer';

describe('Groups Reducer', () => {
  test('should set default state', () => {
    const state = loadingReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set fetching categories to true', () => {
    const action = { type: FETCH_CATEGORIES_REQUEST };
    const state = loadingReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      FETCH_CATEGORIES: true
    });
  });

  test('should set fetching categories to false', () => {
    const action = { type: FETCH_CATEGORIES_SUCCESS };
    const state = loadingReducer({
      ...initialState,
      FETCH_CATEGORIES: true
    }, action);
    expect(state).toEqual({
      ...initialState,
      FETCH_CATEGORIES: false
    });
  });
});
