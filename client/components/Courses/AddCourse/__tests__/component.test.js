import React from 'react';
import { shallow } from 'enzyme';
import AddCourse from '../component';

import { visibleCategories } from '../../../../fixtures/categories';
import { usersIds, usersData } from '../../../../fixtures/users';
import { sellableItems } from '../../../../fixtures/sellableItems';

describe('AddCourse', () => {
  const props = {
    addCourse: jest.fn(),
    handleClose: jest.fn(),
    fetchUsers: jest.fn(),
    fetchGroups: jest.fn(),
    history: {
      push: jest.fn()
    }
  };

  test('should render AddCourse correctly with basic tab enabled', () => {
    const wrapper = shallow(
      <AddCourse
        {...props}
        submitting={false}
        visibleCategories={visibleCategories}
        hiddenCategories={[]}
        usersIds={usersIds}
        usersData={usersData}
        slug="testing"
        groupsIds={['4', '3']}
        sellableItems={sellableItems}
        show
      />
    );
    wrapper.setState({ expirationDate: new Date('20.03.2019') });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourse correctly with advanced tab enabled', () => {
    const wrapper = shallow(
      <AddCourse
        {...props}
        submitting={false}
        visibleCategories={visibleCategories}
        hiddenCategories={[]}
        usersIds={usersIds}
        usersData={usersData}
        slug="testing"
        groupsIds={['4', '3']}
        sellableItems={sellableItems}
        show
      />
    );
    wrapper.setState({
      activeTab: 'advanced',
      expirationDate: new Date('20.03.2019')
    });
    expect(wrapper).toMatchSnapshot();
  });
});
