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

export const categoriesForSelect = [{
  id: '36',
  name: 'Cat Top 1',
  hidden: true,
  children: [{
    id: '37',
    name: 'Cat Top 1 child',
    hidden: false,
    children: []
  }]
}, {
  id: '32',
  name: 'Cat Top 2',
  hidden: false,
  children: [{
    id: '33',
    name: 'Cat Top 2 child',
    hidden: false,
    children: [{
      id: '34',
      name: 'Cat Top 2 child child',
      hidden: false,
      children: []
    }]
  }]
}];

export const visibleCategories = [{
  id: '36',
  level: 0,
  name: 'sda',
  childCount: 1,
  hidden: false
}, {
  id: '37',
  level: 1,
  name: 'gffdsg',
  childCount: 0,
  parentId: '36',
  hidden: false
}, {
  id: '32',
  level: 0,
  name: 'Test Test',
  childCount: 1,
  hidden: false
}, {
  id: '34',
  level: 2,
  name: 'Tea sadasd s',
  hidden: false
}];
