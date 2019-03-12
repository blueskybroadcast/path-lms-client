import { FETCH_COURSES_SUCCESS } from '../actions/types';

export const initialState = {
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
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default coursesReducer;
