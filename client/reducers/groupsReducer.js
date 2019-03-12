import { FETCH_GROUPS_SUCCESS } from '../actions/types';

export const initialState = {
  result: {
    group: []
  },
  entities: {
    group: {}
  }
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default groupsReducer;
