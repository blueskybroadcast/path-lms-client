import { FETCH_CURRENT_USER } from '../actions/types';

const initialState = {
  currentUser: {
    attributes: {}
  },
  currentAccount: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.data,
        currentAccount: action.payload.meta.currentAccount.data
      };
    default:
      return state;
  }
};

export default authReducer;
