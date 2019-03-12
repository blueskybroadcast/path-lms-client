import { FETCH_CATEGORIES_SUCCESS, DELETE_CATEGORY_SUCCESS } from '../../actions/types';
import categoriesReducer, { initialState } from '../categoriesReducer';

describe('Categories Reducer', () => {
  test('should set default state', () => {
    const state = categoriesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  describe('Categories manipulations', () => {
    let state;

    test('should set categories and sorted categories', () => {
      const action = {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
          result: {
            category: ['28', '30', '25', '26', '27', '29']
          },
          entities: {
            category: {
              25: {
                id: '25',
                name: 'Level 0',
                hidden: false,
                parent: {},
                courses: []
              },
              26: {
                id: '26',
                name: 'Level 0 child',
                hidden: false,
                parent: {
                  id: '25',
                  type: 'category'
                },
                courses: [{
                  id: '14',
                  type: 'course'
                }, {
                  id: '15',
                  type: 'course'
                }]
              },
              27: {
                id: '27',
                name: 'Level 0 child child',
                hidden: false,
                parent: {
                  id: '26',
                  type: 'category'
                },
                courses: []
              },
              28: {
                id: '28',
                name: 'Another Level 0',
                hidden: false,
                parent: {},
                courses: [{
                  id: '14',
                  type: 'course'
                }, {
                  id: '15',
                  type: 'course'
                }]
              },
              29: {
                id: '29',
                name: 'Super Level 0',
                hidden: false,
                parent: {},
                courses: []
              },
              30: {
                id: '30',
                name: 'Another Level 0 child',
                hidden: false,
                parent: {
                  id: '28',
                  type: 'category'
                },
                courses: [{
                  id: '14',
                  type: 'course'
                }, {
                  id: '15',
                  type: 'course'
                }]
              }
            }
          }
        }
      };

      state = categoriesReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        ...action.payload,
        sorted: [{
          id: '28',
          level: 0,
          name: 'Another Level 0',
          childCount: 1,
          hidden: false
        }, {
          id: '30',
          level: 1,
          name: 'Another Level 0 child',
          childCount: 0,
          parentId: '28',
          hidden: false
        }, {
          id: '25',
          level: 0,
          name: 'Level 0',
          childCount: 1,
          hidden: false
        }, {
          id: '26',
          level: 1,
          name: 'Level 0 child',
          childCount: 1,
          parentId: '25',
          hidden: false
        }, {
          id: '27',
          level: 2,
          name: 'Level 0 child child',
          hidden: false
        }, {
          id: '29',
          level: 0,
          name: 'Super Level 0',
          childCount: 0,
          hidden: false
        }]
      });
    });

    test('should correctly remove category', () => {
      const action = {
        type: DELETE_CATEGORY_SUCCESS,
        payload: '27'
      };
      state = categoriesReducer(state, action);
      expect(state).toEqual({
        result: {
          category: ['28', '30', '25', '26', '29']
        },
        entities: {
          category: {
            25: {
              id: '25',
              name: 'Level 0',
              hidden: false,
              parent: {},
              courses: []
            },
            26: {
              id: '26',
              name: 'Level 0 child',
              hidden: false,
              parent: {
                id: '25',
                type: 'category'
              },
              courses: [{
                id: '14',
                type: 'course'
              }, {
                id: '15',
                type: 'course'
              }]
            },
            28: {
              id: '28',
              name: 'Another Level 0',
              hidden: false,
              parent: {},
              courses: [{
                id: '14',
                type: 'course'
              }, {
                id: '15',
                type: 'course'
              }]
            },
            29: {
              id: '29',
              name: 'Super Level 0',
              hidden: false,
              parent: {},
              courses: []
            },
            30: {
              id: '30',
              name: 'Another Level 0 child',
              hidden: false,
              parent: {
                id: '28',
                type: 'category'
              },
              courses: [{
                id: '14',
                type: 'course'
              }, {
                id: '15',
                type: 'course'
              }]
            }
          }
        },
        sorted: [{
          id: '28',
          level: 0,
          name: 'Another Level 0',
          childCount: 1,
          hidden: false
        }, {
          id: '30',
          level: 1,
          name: 'Another Level 0 child',
          childCount: 0,
          parentId: '28',
          hidden: false
        }, {
          id: '25',
          level: 0,
          name: 'Level 0',
          childCount: 1,
          hidden: false
        }, {
          id: '26',
          level: 1,
          name: 'Level 0 child',
          childCount: 1,
          parentId: '25',
          hidden: false
        }, {
          id: '29',
          level: 0,
          name: 'Super Level 0',
          childCount: 0,
          hidden: false
        }]
      });
    });
  });
});
