import {
  categoriesSelector, categoriesSortedIdsSelector, categoriesIdsSelector,
  categoriesDataSelector
} from '../categoriesSelectors';

const state = {
  categories: {
    result: {
      category: ['28', '30']
    },
    entities: {
      category: {
        28: {},
        30: {}
      }
    },
    sorted: [{
      id: '28'
    }, {
      id: '30'
    }]
  }
};

describe('Categories selectors', () => {
  test('categoriesSelector should return categories object', () => {
    const result = categoriesSelector(state);
    expect(result).toEqual(state.categories);
  });

  test('categoriesSortedIdsSelector should return sorted categories', () => {
    const result = categoriesSortedIdsSelector(state);
    expect(result).toEqual([{
      id: '28'
    }, {
      id: '30'
    }]);
  });

  test('categoriesIdsSelector should return categories ids', () => {
    const result = categoriesIdsSelector(state);
    expect(result).toEqual(['28', '30']);
  });

  test('categoriesDataSelector should return categories ids', () => {
    const result = categoriesDataSelector(state);
    expect(result).toEqual({
      28: {},
      30: {}
    });
  });
});
