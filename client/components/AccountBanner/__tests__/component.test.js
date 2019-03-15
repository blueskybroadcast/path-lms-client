import React from 'react';
import { shallow } from 'enzyme';
import AccountBanner from '../component';

test('should render AccountBanner correctly', () => {
  const props = {
    bannerUrl: 'banner url',
    bannerRedirectUrl: 'banner redirect url',
    bannerAltText: 'Banner Alt Text'
  };
  const wrapper = shallow(<AccountBanner {...props} />);
  expect(wrapper).toMatchSnapshot();
});
