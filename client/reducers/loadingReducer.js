const initialState = {
  FETCH_COURSES: false,
  FETCH_CATEGORIES: false
};

const loadingReducer = (state = initialState, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST'
  };
};

export default loadingReducer;
