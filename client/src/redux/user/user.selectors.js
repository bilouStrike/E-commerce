import { createSelector } from 'reselect';

const selectUser = state => state.user; // our user reducer

export const selectCurrentUser = createSelector( 
    [selectUser],
    user => user.currentUser
);