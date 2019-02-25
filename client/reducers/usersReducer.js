import { FETCH_USERS } from '../actions/types';

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
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
