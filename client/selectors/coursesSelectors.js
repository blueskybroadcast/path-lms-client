import { createSelector } from 'reselect';

export const coursesBaseSelector = state => state.courses;

export const coursesDescriptionTextSelector = state => state.courses.coursesDescriptionText;

export const coursesSelector = createSelector(
  coursesBaseSelector,
  courses => courses.courses
);

export const coursesIdsSelector = createSelector(
  coursesSelector,
  courses => courses.result.course
);

export const coursesDataSelector = createSelector(
  coursesSelector,
  courses => courses.entities.course
);

export const accountBannerSelector = createSelector(
  coursesBaseSelector,
  courses => courses.accountBanner
);
