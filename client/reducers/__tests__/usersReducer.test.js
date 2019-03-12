import { FETCH_USERS_SUCCESS } from '../../actions/types';
import usersReducer, { initialState } from '../usersReducer';

describe('Users Reducer', () => {
  test('should set default state', () => {
    const state = usersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set fetched users', () => {
    const action = {
      type: FETCH_USERS_SUCCESS,
      payload: {
        result: {
          user: ['14', '15']
        },
        entities: {
          user: {
            14: {},
            15: {}
          }
        }
      }
    };
    const state = usersReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      result: {
        user: ['14', '15']
      },
      entities: {
        user: {
          14: {},
          15: {}
        }
      }
    });
  });
});
