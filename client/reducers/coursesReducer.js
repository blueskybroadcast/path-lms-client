import { FETCH_COURSES } from '../actions/types';

const coursesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    default:
      return state;
  }
};

export default coursesReducer;
