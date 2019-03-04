import { createSelector } from 'reselect';

export const authSelector = state => state.auth;

export const currentUserSelector = createSelector(
  authSelector,
  auth => auth.currentUser
);

export const currentUserAttributesSelector = createSelector(
  currentUserSelector,
  currentUser => currentUser.attributes
);

export const currentUserIsLoggedInSelector = createSelector(
  currentUserAttributesSelector,
  currentUserAttributes => !currentUserAttributes.guest
);

export const currentUserIsAdmin = createSelector(
  currentUserSelector,
  currentUser => currentUser.attributes.admin
);

export const currentAccountSelector = createSelector(
  authSelector,
  auth => auth.currentAccount.attributes
);

export const currentAccountNameSelector = createSelector(
  currentAccountSelector,
  currentAccount => currentAccount.name
);

export const currentAccountSlugSelector = createSelector(
  currentAccountSelector,
  currentAccount => currentAccount.slug
);

export const currentAccountFeaturesSelector = createSelector(
  currentAccountSelector,
  currentAccount => currentAccount.features
);

export const currentAccountCurrencySelector = createSelector(
  currentAccountSelector,
  currentAccount => currentAccount.currency
);
