import React from 'react';
import { shallow } from 'enzyme';
import CoursesContent from '../component';

import { coursesIds, coursesData } from '../../../../fixtures/courses';

describe('Courses Content', () => {
  const props = {
    location: { search: 'asd' },
    slug: 'test',
    currency: 'usd'
  };

  test('should render CoursesContent in loading state correctly', () => {
    const wrapper = shallow(
      <CoursesContent
        {...props}
        loading
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesContent with data correctly', () => {
    const wrapper = shallow(
      <CoursesContent
        {...props}
        loading={false}
        coursesIds={coursesIds}
        coursesData={coursesData}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesContent without data correctly', () => {
    const wrapper = shallow(
      <CoursesContent
        {...props}
        loading={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
