import React from 'react';
import { shallow } from 'enzyme';
import CategoryFormModal from '../component';

import { categoriesSortedList } from '../../../../fixtures/categories';

test('should render CategoryFormModal correctly', () => {
  const wrapper = shallow(
    <CategoryFormModal
      handleSubmit={jest.fn()}
      handleClose={jest.fn()}
      show
      submitting={false}
      categoriesSortedList={categoriesSortedList}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
