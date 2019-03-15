import React from 'react';
import { shallow } from 'enzyme';
import AddCourseAdminsList from '../component';

import { usersData } from '../../../../../../fixtures/users';

describe('AddCourseAdminsList', () => {
  test('should render AddCourseAdminsList with data correctly', () => {
    const wrapper = shallow(
      <AddCourseAdminsList
        usersData={usersData}
        usersForDropdown={['2', '3']}
        adminIds={['2']}
        handleAdminRemove={jest.fn()}
        handleAdminSelect={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseAdminsList without data correctly', () => {
    const wrapper = shallow(
      <AddCourseAdminsList
        adminIds={[]}
        usersForDropdown={[]}
        usersData={{}}
        handleAdminRemove={jest.fn()}
        handleAdminSelect={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
