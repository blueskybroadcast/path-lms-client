import { createSelector } from 'reselect';

export const coursesDescriptionTextSelector = state => state.courses.coursesDescriptionText;

export const coursesSelector = state => state.courses.courses;

export const coursesIdsSelector = createSelector(
  coursesSelector,
  courses => courses.result.course
);

export const coursesDataSelector = createSelector(
  coursesSelector,
  courses => courses.entities.course
);
