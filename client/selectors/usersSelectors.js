import { createSelector } from 'reselect';

export const usersSelector = state => state.users;

export const usersIdsSelector = createSelector(
  usersSelector,
  users => users.result.user
);

export const usersDataSelector = createSelector(
  usersSelector,
  users => users.entities.user
);
