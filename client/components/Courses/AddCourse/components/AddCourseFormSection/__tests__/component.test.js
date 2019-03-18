import React from 'react';
import { shallow } from 'enzyme';
import AddCourseFormSection from '../component';

describe('AddCourseFormSection', () => {
  test('should render AddCourseFormSection with all props correctly', () => {
    const wrapper = shallow(
      <AddCourseFormSection
        label="Label"
        isRequired
        tooltip="Tooltip text"
      >
        <div>Children</div>
      </AddCourseFormSection>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
