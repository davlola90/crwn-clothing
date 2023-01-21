import { createSelector } from 'reselect';

import { UserState } from './user.reducer';
import { RooState } from "../store";
export const selectUserReducer = (state:RooState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);