import { FETCH_COURSES_SUCCESS, SORT_COURSES_IN_UI_REQUEST } from '../actions/types';

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

    case SORT_COURSES_IN_UI_REQUEST:
      console.log('action.payload', action.payload);
      return {
        ...state,
        courses: {
          ...state.courses,
          result: {
            course: [...action.payload]
          }
        }
      };

    default:
      return state;
  }
};

export default coursesReducer;
