import { FETCH_COURSES_SUCCESS } from '../../actions/types';
import coursesReducer, { initialState } from '../coursesReducer';

describe('Courses Reducer', () => {
  test('should set default state', () => {
    const state = coursesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set fetched courses', () => {
    const action = {
      type: FETCH_COURSES_SUCCESS,
      payload: {
        result: {
          course: ['14', '15']
        },
        entities: {
          course: {
            14: {},
            15: {}
          }
        }
      }
    };
    const state = coursesReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      result: {
        course: ['14', '15']
      },
      entities: {
        course: {
          14: {},
          15: {}
        }
      }
    });
  });
});
