import { FETCH_CURRENT_USER } from '../../actions/types';
import authReducer, { initialState } from '../authReducer';

describe('Auth Reducer', () => {
  test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set current user', () => {
    const action = {
      type: FETCH_CURRENT_USER,
      payload: {
        data: {
          id: '1',
          type: 'user',
          attributes: {
            platformAdmin: true,
            admin: true,
            guest: false,
            firstName: 'Admin',
            lastName: 'Blue Sky',
            email: 'admin@blueskyelearn.com'
          }
        },
        meta: {
          currentAccount: {
            data: {
              id: '1',
              type: 'currentAccount',
              attributes: {
                name: 'Test Account',
                slug: 'testing',
                language: 'en'
              }
            }
          }
        }
      }
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      currentUser: {
        id: '1',
        type: 'user',
        attributes: {
          platformAdmin: true,
          admin: true,
          guest: false,
          firstName: 'Admin',
          lastName: 'Blue Sky',
          email: 'admin@blueskyelearn.com'
        }
      },
      currentAccount: {
        id: '1',
        type: 'currentAccount',
        attributes: {
          name: 'Test Account',
          slug: 'testing',
          language: 'en'
        }
      }
    });
  });
});
