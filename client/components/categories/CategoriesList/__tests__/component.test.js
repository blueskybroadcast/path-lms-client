import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from '../component';

import { categoriesSortedList, categoriesData } from '../../../../fixtures/categories';

test('should render CategoriesList in loading state correctly', () => {
  const wrapper = shallow(
    <CategoriesList
      loading
      categoriesSortedList={categoriesSortedList}
      categoriesData={categoriesData}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render CategoriesList correctly', () => {
  const wrapper = shallow(
    <CategoriesList
      loading={false}
      categoriesSortedList={categoriesSortedList}
      categoriesData={categoriesData}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
