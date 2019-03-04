import { FETCH_COURSES } from '../actions/types';

const initialState = {
  accountBanner: {},
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
        ...action.payload
      };

    default:
      return state;
  }
};

export default coursesReducer;
