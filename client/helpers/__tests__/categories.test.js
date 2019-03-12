import {
  getParentListLevelOne, getSortedCategories, getCategoriesForSelect
} from '../categories';

import { categoriesIds, categoriesData, categoriesSortedList } from '../../fixtures/categories';

describe('Categories helpers', () => {
  test('getSortedCategories should return sorted categories', () => {
    const result = getSortedCategories(categoriesIds, categoriesData);
    expect(result).toEqual(categoriesSortedList);
  });

  test('getParentListLevelOne should return top level categories', () => {
    const result = getParentListLevelOne(categoriesSortedList);
    expect(result).toEqual([{
      list: [{
        childCount: 0,
        hidden: false,
        id: '30',
        level: 1,
        name: 'Another Level 0 child',
        parentId: '28'
      }],
      name: 'Another Level 0'
    }, {
      list: [{
        childCount: 1,
        hidden: false,
        id: '26',
        level: 1,
        name: 'Level 0 child',
        parentId: '25'
      }],
      name: 'Level 0'
    }]);
  });

  test('getCategoriesForSelect should return categories for select', () => {
    const result = getCategoriesForSelect(categoriesIds, categoriesData);
    expect(result).toEqual([{
      children: [{
        children: [],
        hidden: false,
        id: '30',
        name: 'Another Level 0 child'
      }],
      hidden: false,
      id: '28',
      name: 'Another Level 0'
    }, {
      children: [{
        children: [{
          children: [],
          hidden: false,
          id: '27',
          name: 'Level 0 child child'
        }],
        hidden: false,
        id: '26',
        name: 'Level 0 child'
      }],
      hidden: false,
      id: '25',
      name: 'Level 0'
    }, {
      children: [],
      hidden: false,
      id: '29',
      name: 'Super Level 0'
    }]);
  });
});
