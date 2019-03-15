import React from 'react';
import { shallow } from 'enzyme';
import Header from '../component';

describe('Header', () => {
  const props = {
    slug: 'testing',
    accountName: 'account name'
  };
  test('should render Header correctly if user is admin', () => {
    const wrapper = shallow(
      <Header
        {...props}
        currentUser={{
          guest: false,
          admin: true,
          firstName: 'User'
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header correctly if user is guest', () => {
    const wrapper = shallow(
      <Header
        {...props}
        currentUser={{
          guest: true,
          admin: false,
          firstName: 'User'
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
