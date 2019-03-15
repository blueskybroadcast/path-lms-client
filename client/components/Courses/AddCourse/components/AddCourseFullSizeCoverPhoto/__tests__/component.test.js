import React from 'react';
import { shallow } from 'enzyme';
import AddCourseFullSizeCoverPhoto from '../component';

describe('AddCourseFullSizeCoverPhoto', () => {
  test('should render AddCourseFullSizeCoverPhoto without fullSizeCoverPhotoUrl correctly', () => {
    const wrapper = shallow(
      <AddCourseFullSizeCoverPhoto
        handleFullSizeCoverPhotoUrlToggle={jest.fn()}
        handleFullSizeCoverPhotoUrlChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseFullSizeCoverPhoto with fullSizeCoverPhotoUrl correctly', () => {
    const wrapper = shallow(
      <AddCourseFullSizeCoverPhoto
        fullSizeCoverPhotoUrl="fullsize_cover_photo_url"
        handleFullSizeCoverPhotoUrlToggle={jest.fn()}
        handleFullSizeCoverPhotoUrlChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
