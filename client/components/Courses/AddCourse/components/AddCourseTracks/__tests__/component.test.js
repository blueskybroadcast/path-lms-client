import React from 'react';
import { shallow } from 'enzyme';
import AddCourseTracks from '../component';

describe('AddCourseTracks', () => {
  test('should render AddCourseTracks correctly', () => {
    const tracks = {
      0: {
        _destroy: false,
        name: 'Track 1'
      },
      1: {
        _destroy: false,
        name: 'Track 2'
      }
    };
    const wrapper = shallow(
      <AddCourseTracks
        tracks={tracks}
        handleTrackChange={jest.fn()}
        handleTrackDelete={jest.fn()}
        handleTrackAdd={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
