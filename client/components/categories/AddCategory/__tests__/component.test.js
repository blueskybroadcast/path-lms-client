import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../component';

test('should render AddCategory correctly', () => {
  const addCategory = jest.fn();
  const wrapper = shallow(<AddCategory addCategory={addCategory} />);
  expect(wrapper).toMatchSnapshot();
});
