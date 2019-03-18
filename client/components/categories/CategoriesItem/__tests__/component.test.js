import React from 'react';
import { shallow } from 'enzyme';
import CategoriesItem from '../component';

test('should render CategoriesItem correctly', () => {
  const props = {
    name: 'Category',
    id: '1',
    parent: {
      id: '8',
      type: 'type'
    },
    hidden: false,
    editCategory: jest.fn(),
    deleteCategory: jest.fn(),
    level: 1
  };

  const wrapper = shallow(<CategoriesItem {...props} />);
  expect(wrapper).toMatchSnapshot();
});
