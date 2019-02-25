import { createSelector } from 'reselect';

export const categoriesSelector = state => state.categories;

export const categoriesSortedIdsSelector = createSelector(
  categoriesSelector,
  categories => categories.sorted
);

export const categoriesDataSelector = createSelector(
  categoriesSelector,
  categories => categories.entities.category
);
