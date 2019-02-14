import { FETCH_CURRENT_USER } from '../actions/types';

const initialState = {
  isAdmin: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        ...action.payload.data
      } || false;
    default:
      return state;
  }
};

export default authReducer;
