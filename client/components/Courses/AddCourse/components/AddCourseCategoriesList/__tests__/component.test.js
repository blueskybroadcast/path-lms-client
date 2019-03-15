import React from 'react';
import { shallow } from 'enzyme';
import AddCourseCategoriesList from '../component';

import { visibleCategories } from '../../../../../../fixtures/categories';

describe('AddCourseCategoriesList', () => {
  test('should render AddCourseCategoriesList with data correctly', () => {
    const wrapper = shallow(
      <AddCourseCategoriesList
        categories={visibleCategories}
        categoryIds={['32', '33']}
        handleCategoryToggle={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseCategoriesList without data correctly', () => {
    const wrapper = shallow(
      <AddCourseCategoriesList
        categories={[]}
        categoryIds={[]}
        handleCategoryToggle={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
