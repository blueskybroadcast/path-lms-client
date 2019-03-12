import { usersSelector, usersIdsSelector, usersDataSelector } from '../usersSelectors';

const state = {
  users: {
    result: {
      user: ['14']
    },
    entities: {
      user: {
        14: { id: '14' }
      }
    }
  }
};

describe('Users selectors', () => {
  test('usersSelector should return users root object', () => {
    const result = usersSelector(state);
    expect(result).toEqual(state.users);
  });

  test('usersIdsSelector should return users ids', () => {
    const result = usersIdsSelector(state);
    expect(result).toEqual(['14']);
  });

  test('usersDataSelector should return users data', () => {
    const result = usersDataSelector(state);
    expect(result).toEqual({ 14: { id: '14' } });
  });
});
