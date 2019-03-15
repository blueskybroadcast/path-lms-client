import React from 'react';
import { shallow } from 'enzyme';
import CoursesFiltersCategories from '../component';

import { categoriesForSelect } from '../../../../../../fixtures/categories';

describe('Courses filters categories', () => {
  test('should render CoursesFiltersCategories with data correctly', () => {
    const wrapper = shallow(
      <CoursesFiltersCategories
        categories={categoriesForSelect}
        handleCategorySelect={jest.fn()}
        handleCategoriesReset={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesFiltersCategories without data correctly', () => {
    const wrapper = shallow(
      <CoursesFiltersCategories
        handleCategorySelect={jest.fn()}
        handleCategoriesReset={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
