import React from 'react';
import { shallow } from 'enzyme';
import CoursesPresentationItem from '../component';

describe('Courses Presentation Item', () => {
  const props = {
    id: '56',
    name: 'Presentation Item name',
    slug: 'testing',
    currency: 'usd'
  };
  test('should render CoursesPresentationItem with minimum data correctly', () => {
    const wrapper = shallow(
      <CoursesPresentationItem {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CoursesPresentationItem with all data correctly', () => {
    const wrapper = shallow(
      <CoursesPresentationItem
        {...props}
        coverDescription="Description"
        resizedCoverPhotoUrl="coverPhotoUrl"
        permittedContent={{
          assessment: 2,
          assignment: 1,
          certificate: 3,
          document: 1,
          link: 5,
          presentation: 9,
          section: 6,
          survey: 2
        }}
        statuses={{ purchase: 'unpaid' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
