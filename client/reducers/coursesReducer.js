import normalize from 'jsonapi-normalizer';

import { FETCH_COURSES } from '../actions/types';

const initialState = {
  coursesDescriptionText: '',
  courses: {
    result: {
      course: []
    },
    entities: {
      course: {}
    }
  }
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        coursesDescriptionText: action.payload.meta.coursesDescriptionText,
        courses: normalize(action.payload)
      };

    default:
      return state;
  }
};

export default coursesReducer;
