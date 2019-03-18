import React from 'react';
import { shallow } from 'enzyme';
import HeaderNavDropdown from '../component';

describe('HeaderNavDropdown', () => {
  test('should render HeaderNavDropdown correctly', () => {
    const wrapper = shallow(
      <HeaderNavDropdown />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
