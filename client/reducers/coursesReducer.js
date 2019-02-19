import { FETCH_COURSES } from '../actions/types';

const initialState = {
  result: {
    course: []
  },
  entities: {
    course: {}
  }
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    default:
      return state;
  }
};

export default coursesReducer;
