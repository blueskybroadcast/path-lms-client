import React from 'react';
import { shallow } from 'enzyme';
import AddCourseExpire from '../component';

describe('AddCourseExpire', () => {
  const props = {
    handleChange: jest.fn(),
    handleExpirationTypeChange: jest.fn(),
    handleExpirationDateChange: jest.fn()
  };

  test('should render AddCourseExpire if it turned off correctly', () => {
    const wrapper = shallow(
      <AddCourseExpire
        {...props}
        expirable={false}
        repurchasable={false}
        expirationByDate
        expirationByDays={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseExpire correctly if it turned on and expirationByDate enabled', () => {
    const wrapper = shallow(
      <AddCourseExpire
        {...props}
        expirable
        repurchasable
        expirationByDate
        expirationDate={new Date(Date.UTC(2019, 3, 12))}
        expirationByDays={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCourseExpire correctly if it turned on and expirationByDays enabled', () => {
    const wrapper = shallow(
      <AddCourseExpire
        {...props}
        expirable
        repurchasable
        expirationByDate={false}
        expirationByDays
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
