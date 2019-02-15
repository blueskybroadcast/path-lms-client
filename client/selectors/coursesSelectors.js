import { createSelector } from 'reselect';

export const coursesSelector = state => state.courses;

export const coursesIdsSelector = createSelector(
  coursesSelector,
  courses => courses.result.course
);

export const coursesDataSelector = createSelector(
  coursesSelector,
  courses => courses.entities.course
);
