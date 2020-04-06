import { takeLatest, put } from 'redux-saga/effects';
import { onSignOutSuccess, cleanCartOnSignOut } from '../cart.saga';
import userActionsTypes from '../../user/user.types';
import { clearCart } from '../cart.actions';

describe('SAGA: onSignOutSuccess', () => {
    const genObject = onSignOutSuccess();

    it('Should wait for latest SIGN_OUT_SUCCESS action then call cleanCartOnSignOut', () => {
        const expectedAction = genObject.next().value;
        expect(expectedAction).toEqual(takeLatest(userActionsTypes.SIGN_OUT_SUCCESS, cleanCartOnSignOut));
    });

    it('Should be done on the next iterator', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});

describe('SAGA: cleanCartOnSignOut', () => {
    const genObject = cleanCartOnSignOut();
    
    it('Should put action', () => {
        expect(genObject.next().value).toEqual(put(clearCart()));
    });
});
