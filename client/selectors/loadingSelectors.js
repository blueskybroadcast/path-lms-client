export const loadingSelector = state => state.loading;

export const createLoadingSelector = actions => state => (
  actions.some(action => loadingSelector(state)[action])
);

export const addingNewCourseSelector = state => (
  createLoadingSelector(['ADD_COURSE'])(state)
);
export const loadingCoursesSelector = state => (
  createLoadingSelector(['FETCH_COURSES'])(state)
);

export const addingNewCategorySelector = state => (
  createLoadingSelector(['ADD_CATEGORY'])(state)
);
export const loadingCategoriesSelector = state => (
  createLoadingSelector(['FETCH_CATEGORIES'])(state)
);
