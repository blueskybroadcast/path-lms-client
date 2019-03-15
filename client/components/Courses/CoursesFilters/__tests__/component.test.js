import React from 'react';
import { shallow } from 'enzyme';
import CoursesFilters from '../component';

import { categoriesIds, categoriesData } from '../../../../fixtures/categories';

describe('Courses filters', () => {
  test('should render CoursesFilters with data and admin rights correctly', () => {
    const search = '';
    const wrapper = shallow(
      <CoursesFilters
        location={{ search }}
        categoriesIds={categoriesIds}
        categoriesData={categoriesData}
        currentAccountFeatures={[]}
        slug="testing"
        history={{ push: jest.fn() }}
        fetchCourses={jest.fn()}
        isAdmin
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesFilters without data and admin rights, with search term correctly', () => {
    const search = '?search=asdasd';
    const wrapper = shallow(
      <CoursesFilters
        location={{ search }}
        currentAccountFeatures={[]}
        slug="testing"
        history={{ push: jest.fn() }}
        fetchCourses={jest.fn()}
        isAdmin={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
