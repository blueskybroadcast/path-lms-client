import React from 'react';
import { shallow } from 'enzyme';
import CoursesHeader from '../component';

describe('Courses header', () => {
  test('should render CoursesHeader correctly', () => {
    const wrapper = shallow(
      <CoursesHeader />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
