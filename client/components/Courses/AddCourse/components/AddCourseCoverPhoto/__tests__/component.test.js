import React from 'react';
import { shallow } from 'enzyme';
import AddCourseCoverPhoto from '../component';

describe('AddCourseCoverPhoto', () => {
  test('should render AddCourseCoverPhoto with cover photo url correctly', () => {
    const wrapper = shallow(
      <AddCourseCoverPhoto
        coverPhotoUrl="cover_photo_url"
        handleCoverPhotoUrlToggle={jest.fn()}
        handleCoverPhotoUrlChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseCoverPhoto without cover photo correctly', () => {
    const wrapper = shallow(
      <AddCourseCoverPhoto
        handleCoverPhotoUrlToggle={jest.fn()}
        handleCoverPhotoUrlChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
