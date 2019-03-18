import React from 'react';
import { shallow } from 'enzyme';
import CoursesDescription from '../component';

import { coursesIds, coursesData } from '../../../../fixtures/courses';

describe('Courses description', () => {
  test('should render CoursesDescription with edit button correctly', () => {
    const wrapper = shallow(
      <CoursesDescription
        description="<ul></ul>"
        isAdmin
        editCourseDescription={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesDescription without edit button correctly', () => {
    const wrapper = shallow(
      <CoursesDescription
        description="<ul></ul>"
        isAdmin={false}
        editCourseDescription={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
