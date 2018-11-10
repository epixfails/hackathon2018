import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const tokenSelector = createSelector(authSelector, auth => auth.token);
