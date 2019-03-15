import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../component';

test('should render Footer correctly', () => {
  const wrapper = shallow(
    <Footer slug="testing" />
  );
  expect(wrapper).toMatchSnapshot();
});
