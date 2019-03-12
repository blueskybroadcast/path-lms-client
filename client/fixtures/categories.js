export const categoriesData = {
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
    courses: []
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
    courses: []
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
    courses: []
  }
};

export const categoriesIds = ['28', '30', '25', '26', '27', '29'];

export const categoriesSortedList = [{
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
}];
