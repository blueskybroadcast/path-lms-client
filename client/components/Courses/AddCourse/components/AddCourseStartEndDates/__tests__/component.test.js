import React from 'react';
import { shallow } from 'enzyme';
import AddCourseStartEndDates from '../component';

describe('AddCourseStartEndDates', () => {
  const props = {
    handleStartDateChange: jest.fn(),
    handleEndDateChange: jest.fn()
  };

  test('should render AddCourseStartEndDates without dates correctly', () => {
    const wrapper = shallow(
      <AddCourseStartEndDates {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseStartEndDates with dates correctly', () => {
    const wrapper = shallow(
      <AddCourseStartEndDates
        {...props}
        startDate={new Date(Date.UTC(2019, 3, 10))}
        endDate={new Date(Date.UTC(2019, 3, 20))}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
