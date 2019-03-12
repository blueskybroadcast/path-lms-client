import { FETCH_GROUPS_SUCCESS } from '../../actions/types';
import groupsReducer, { initialState } from '../groupsReducer';

describe('Groups Reducer', () => {
  test('should set default state', () => {
    const state = groupsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set fetched groups', () => {
    const action = {
      type: FETCH_GROUPS_SUCCESS,
      payload: {
        result: {
          group: ['14', '15']
        },
        entities: {
          group: {
            14: {},
            15: {}
          }
        }
      }
    };
    const state = groupsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      result: {
        group: ['14', '15']
      },
      entities: {
        group: {
          14: {},
          15: {}
        }
      }
    });
  });
});
