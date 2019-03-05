import { FETCH_USERS_SUCCESS } from '../actions/types';

const initialState = {
  result: {
    user: []
  },
  entities: {
    user: {}
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
