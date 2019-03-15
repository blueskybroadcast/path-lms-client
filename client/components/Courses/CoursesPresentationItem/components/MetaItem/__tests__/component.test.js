import React from 'react';
import { shallow } from 'enzyme';
import MetaItem from '../component';

describe('Meta item', () => {
  test('should render MetaItem correctly', () => {
    const wrapper = shallow(
      <MetaItem
        count={5}
        icon="name"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
