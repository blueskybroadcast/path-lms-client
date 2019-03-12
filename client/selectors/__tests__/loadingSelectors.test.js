import {
  loadingSelector, createLoadingSelector, addingNewCourseSelector,
  loadingCoursesSelector, addingNewCategorySelector, loadingCategoriesSelector
} from '../loadingSelectors';

const state = {
  loading: {
    ADD_COURSE: false,
    ADD_CATEGORY: true,
    FETCH_COURSES: false,
    FETCH_CATEGORIES: false
  }
};

describe('Loading selectors', () => {
  test('loadingSelector should return loading root object', () => {
    const result = loadingSelector(state);
    expect(result).toEqual(state.loading);
  });

  test('createLoadingSelector should return if any provided items are loading', () => {
    const result = createLoadingSelector(['ADD_COURSE', 'ADD_CATEGORY'])(state);
    expect(result).toBe(true);
  });

  test('addingNewCourseSelector should return if the course is adding', () => {
    const result = addingNewCourseSelector(state);
    expect(result).toBe(false);
  });

  test('loadingCoursesSelector should return if courses are loading', () => {
    const result = loadingCoursesSelector(state);
    expect(result).toBe(false);
  });

  test('addingNewCategorySelector should return if category is adding', () => {
    const result = addingNewCategorySelector(state);
    expect(result).toBe(true);
  });

  test('loadingCategoriesSelector should return if categories are loading', () => {
    const result = loadingCategoriesSelector(state);
    expect(result).toBe(false);
  });
});
