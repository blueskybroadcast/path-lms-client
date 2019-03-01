import { FETCH_GROUPS } from '../actions/types';

const initialState = {
  result: {
    group: []
  },
  entities: {
    group: {}
  }
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS:
      return action.payload;
    default:
      return state;
  }
};

export default groupsReducer;
