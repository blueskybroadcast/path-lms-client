import { createSelector } from 'reselect';

export const groupsSelector = state => state.groups;

export const groupsIdsSelector = createSelector(
  groupsSelector,
  groups => groups.result.group
);

export const groupsDataSelector = createSelector(
  groupsSelector,
  groups => groups.entities.group
);
