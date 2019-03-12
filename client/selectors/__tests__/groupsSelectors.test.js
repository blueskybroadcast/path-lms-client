import { groupsSelector, groupsIdsSelector, groupsDataSelector } from '../groupsSelectors';

const state = {
  groups: {
    result: {
      group: ['14']
    },
    entities: {
      group: {
        14: { id: '14' }
      }
    }
  }
};

describe('Courses selectors', () => {
  test('groupsSelector should return groups root object', () => {
    const result = groupsSelector(state);
    expect(result).toEqual(state.groups);
  });

  test('groupsIdsSelector should return groups ids', () => {
    const result = groupsIdsSelector(state);
    expect(result).toEqual(['14']);
  });

  test('groupsDataSelector should return groups data', () => {
    const result = groupsDataSelector(state);
    expect(result).toEqual({ 14: { id: '14' } });
  });
});
