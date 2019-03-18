import React from 'react';
import { shallow } from 'enzyme';
import AddCourseActive from '../component';

test('should render AddCourseActive correctly', () => {
  const wrapper = shallow(
    <AddCourseActive
      active
      handleChange={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
